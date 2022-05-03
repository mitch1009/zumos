import { Module } from '@nestjs/common';
import { DocmanController } from './docman.controller';
import { DocmanService } from './docman.service';

@Module({
  imports: [],
  controllers: [DocmanController],
  providers: [DocmanService],
})
export class DocmanModule {}
