import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}

