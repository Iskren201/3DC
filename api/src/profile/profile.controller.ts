// src/profile/profile.controller.ts
import { Controller, Get, Put, Body, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Req() req: Request) {
    const userId = req.user['userId'];
    return this.profileService.getProfile(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateProfile(
    @Req() req: Request,
    @Body() updateData: { username: string; email: string },
  ) {
    const userId = req.user['userId'];
    return this.profileService.updateProfile(userId, updateData);
  }
}
