import { Module } from '@nestjs/common';
import { CmtController } from './cmt.controller';
import { CmtService } from './cmt.service';

@Module({
  imports: [],
  controllers: [CmtController],
  providers: [CmtService],
})
export class CmtModule {}
