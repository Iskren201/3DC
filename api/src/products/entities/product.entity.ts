import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 'No description provided', nullable: true })
  description: string;

  @Column({ nullable: true, type: 'decimal' })
  price: number;

  @Column({ nullable: true, type: 'int' })
  stock: number;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  brand: string;
}

