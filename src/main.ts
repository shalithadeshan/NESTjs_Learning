import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // creating a nest application
  await app.listen(3000); // listening on port 3000
}
bootstrap();
