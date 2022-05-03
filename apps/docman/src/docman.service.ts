import { Injectable } from '@nestjs/common';

@Injectable()
export class DocmanService {
  getHello(): string {
    return 'Hello World!';
  }
}
