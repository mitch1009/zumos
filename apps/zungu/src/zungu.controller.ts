import { Controller, Get } from '@nestjs/common';
import { ZunguService } from './zungu.service';

@Controller()
export class ZunguController {
  constructor(private readonly zunguService: ZunguService) {}

  @Get()
  getHello(): string {
    return this.zunguService.getHello();
  }
}
