import { Module } from '@nestjs/common';
import { ZunguController } from './zungu.controller';
import { ZunguService } from './zungu.service';

@Module({
  imports: [],
  controllers: [ZunguController],
  providers: [ZunguService],
})
export class ZunguModule {}
