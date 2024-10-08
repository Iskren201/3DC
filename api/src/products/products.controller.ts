import {
  Controller,
  Post,
  Get,
  Query,
  Body,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProductService } from './product.service';
import * as path from 'path';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(
    @Query('category') category: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
    @Query('brand') brand: string,
  ): Promise<Product[]> {
    try {
      return await this.productService.findAll({
        category,
        minPrice,
        maxPrice,
        brand,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch products');
    }
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extname = path.extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${extname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Product> {
    if (file) {
      createProductDto.imageUrl = file.filename;
    }

    try {
      const createdProduct = await this.productService.create(createProductDto);
      return createdProduct;
    } catch (error) {
      throw new HttpException(
        'Failed to create product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
