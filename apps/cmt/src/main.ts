import { NestFactory } from '@nestjs/core';
import { CmtModule } from './cmt.module';

async function bootstrap() {
  const app = await NestFactory.create(CmtModule);
  await app.listen(3000);
}
bootstrap();
