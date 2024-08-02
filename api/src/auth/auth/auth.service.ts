import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from '../user/user.entity'; // Import UserRole
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(
    username: string,
    email: string,
    password: string,
    role: UserRole = UserRole.USER, // Default role
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
      role, // Assign role here
    });
    return this.usersRepository.save(user);
  }

  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Include role in JWT payload
      return this.jwtService.sign({
        userId: user.id,
        username: user.username,
        role: user.role, // Include role
      });
    }
    return null;
  }

  async getProfile(userId: number): Promise<User> {
    // Fetch user with role
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  async updateProfile(
    userId: number,
    username: string,
    email: string,
  ): Promise<User> {
    await this.usersRepository.update(userId, { username, email });
    return this.getProfile(userId);
  }
}

