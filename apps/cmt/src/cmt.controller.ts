import { Controller, Get } from '@nestjs/common';
import { CmtService } from './cmt.service';

@Controller()
export class CmtController {
  constructor(private readonly cmtService: CmtService) {}

  @Get()
  getHello(): string {
    return this.cmtService.getHello();
  }
}
