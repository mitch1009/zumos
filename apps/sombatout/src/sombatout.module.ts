import { Module } from '@nestjs/common';
import { SombatoutController } from './sombatout.controller';
import { SombatoutService } from './sombatout.service';

@Module({
  imports: [],
  controllers: [SombatoutController],
  providers: [SombatoutService],
})
export class SombatoutModule {}
