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

  async findAll(filters: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    brand?: string;
  }): Promise<Product[]> {
    const query = this.productRepository.createQueryBuilder('product');

    if (filters.category) {
      query.andWhere('product.category = :category', {
        category: filters.category,
      });
    }

    if (filters.minPrice) {
      query.andWhere('product.price >= :minPrice', {
        minPrice: filters.minPrice,
      });
    }

    if (filters.maxPrice) {
      query.andWhere('product.price <= :maxPrice', {
        maxPrice: filters.maxPrice,
      });
    }

    if (filters.brand) {
      query.andWhere('product.brand = :brand', { brand: filters.brand });
    }

    return await query.getMany();
  }
}
