import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();  // Load environment variables

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS if needed
  await app.listen(process.env.PORT || 3000); // Use environment variable for port
}
bootstrap();

