import { NestFactory } from '@nestjs/core';
import { DocmanModule } from './docman.module';

async function bootstrap() {
  const app = await NestFactory.create(DocmanModule);
  await app.listen(3000);
}
bootstrap();
