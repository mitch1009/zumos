import { NestFactory } from '@nestjs/core';
import { ZunguModule } from './zungu.module';

async function bootstrap() {
  const app = await NestFactory.create(ZunguModule);
  await app.listen(3000);
}
bootstrap();
