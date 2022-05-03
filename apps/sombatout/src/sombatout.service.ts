import { Injectable } from '@nestjs/common';

@Injectable()
export class SombatoutService {
  getHello(): string {
    return 'Hello World!';
  }
}
