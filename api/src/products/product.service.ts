import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const product = this.productRepository.create(createProductDto);
      const savedProduct = await this.productRepository.save(product);
      this.logger.log(
        `Product created successfully: ${JSON.stringify(savedProduct)}`,
      );
      return savedProduct;
    } catch (error) {
      this.logger.error('Error creating product', error.stack);
      throw new InternalServerErrorException('Failed to create product');
    }
  }

  async findAll(filters?: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
  }): Promise<Product[]> {
    const queryBuilder = this.productRepository.createQueryBuilder('product');
    //! Now is not use this added by @Rumen-Nikolaev
    // const filterFunctions = {   // Problem with this
    //   category: (value: string) =>
    //     queryBuilder.andWhere('product.category = :category', {
    //       category: value,
    //     }),
    //   minPrice: (value: number) =>
    //     queryBuilder.andWhere('product.price >= :minPrice', {
    //       minPrice: value,
    //     }),
    //   maxPrice: (value: number) =>
    //     queryBuilder.andWhere('product.price <= :maxPrice', {
    //       maxPrice: value,
    //     }),
    //   brand: (value: string) =>
    //     queryBuilder.andWhere('product.brand = :brand', { brand: value }),
    // };

    // Object.entries(filters || {}).forEach(([key, value]) => {
    //   const filterFunction = filterFunctions[key];
    //   if (filterFunction) {
    //     filterFunction(value);
    //   }
    // });

    try {
      const products = await queryBuilder.getMany();
      this.logger.log(
        `Products fetched successfully: ${JSON.stringify(products)}`,
      );
      return products;
    } catch (error) {
      this.logger.error('Error fetching products', error.stack);
      throw new InternalServerErrorException('Failed to fetch products');
    }
  }
}
