// user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity'; // Adjust based on where user.entity.ts is located
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }
}
