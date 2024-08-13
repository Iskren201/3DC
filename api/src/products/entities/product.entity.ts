import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @Column({ default: 'No description provided', nullable: true })
  description: string;

  @Column({ nullable: true, type: 'decimal' })
  price: number;

  // You can add other properties like stock, imageUrl, etc. here as needed
}
