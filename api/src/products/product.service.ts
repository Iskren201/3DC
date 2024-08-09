import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(filters?: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
  }): Promise<Product[]> {
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (filters) {
      if (filters.category) {
        queryBuilder.andWhere('product.category = :category', { category: filters.category });
      }

      if (filters.minPrice !== undefined) {
        queryBuilder.andWhere('product.price >= :minPrice', { minPrice: filters.minPrice });
      }

      if (filters.maxPrice !== undefined) {
        queryBuilder.andWhere('product.price <= :maxPrice', { maxPrice: filters.maxPrice });
      }

      if (filters.brand) {
        queryBuilder.andWhere('product.brand = :brand', { brand: filters.brand });
      }
    }

    return queryBuilder.getMany();
  }
}
