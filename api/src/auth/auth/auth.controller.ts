import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return this.authService.register(body.username, body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const token = await this.authService.validateUser(
      body.email,
      body.password,
    );
    if (token) {
      return { access_token: token };
    }
    return { message: 'Invalid credentials' };
  }
  //TODO
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // async getProfile(@Req() req: User) {
  //   return this.authService.getProfile(req.id);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Put('profile')
  // async updateProfile(
  //   @Req() req: User,
  //   @Body() body: { username: string; email: string },
  // ) {
  //   return this.authService.updateProfile(req.id, body.username, body.email);
  // }

  @Post('logout')
  async logout() {
    return { message: 'Logged out successfull' };
  }
}
