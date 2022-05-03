import { Injectable } from '@nestjs/common';

@Injectable()
export class CmtService {
  getHello(): string {
    return 'Hello World!';
  }
}
