import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async onModuleInit() {
    await this.createDefaultUser();
  }

  async register(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return this.jwtService.sign({ userId: user.id, username: user.username });
    }
    return null;
  }

  async getProfile(userId: number): Promise<User> {
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

  private async createDefaultUser() {
    const defaultEmail = 'iskren201@gmail.com';
    const defaultPassword = 'Test@123';

    // Check if the default user already exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: defaultEmail },
    });

    if (!existingUser) {
      // Hash the default password before saving
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);

      // Create the default user
      const defaultUser = this.usersRepository.create({
        username: 'admin',
        email: defaultEmail,
        password: hashedPassword,
      });

      await this.usersRepository.save(defaultUser);
      console.log('Default user created with email:', defaultEmail);
    } else {
      console.log('Default user already exists with email:', defaultEmail);
    }
  }
}
