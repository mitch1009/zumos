import { Controller, Get } from '@nestjs/common';
import { SombatoutService } from './sombatout.service';

@Controller()
export class SombatoutController {
  constructor(private readonly sombatoutService: SombatoutService) {}

  @Get()
  getHello(): string {
    return this.sombatoutService.getHello();
  }
}
