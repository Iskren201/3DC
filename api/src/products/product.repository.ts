import { Repository, EntityRepository } from 'typeorm';
import { Product } from './entities/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  // Custom methods for the repository can be added here
}
