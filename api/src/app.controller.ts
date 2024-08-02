import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //! POST /login
  @Post('login')
  login(): any {
    return {};
  }

  //! POST /protected
  @Post('protected')
  getHello(): any {
    return this.appService.getHello();
  }
}

//Test
