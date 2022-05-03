import { Injectable } from '@nestjs/common';

@Injectable()
export class ZunguService {
  getHello(): string {
    return 'Hello World!';
  }
}
