import { NestFactory } from '@nestjs/core';
import { SombatoutModule } from './sombatout.module';

async function bootstrap() {
  const app = await NestFactory.create(SombatoutModule);
  await app.listen(3000);
}
bootstrap();
