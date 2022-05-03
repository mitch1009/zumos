import { Controller, Get } from '@nestjs/common';
import { DocmanService } from './docman.service';

@Controller()
export class DocmanController {
  constructor(private readonly docmanService: DocmanService) {}

  @Get()
  getHello(): string {
    return this.docmanService.getHello();
  }
}
