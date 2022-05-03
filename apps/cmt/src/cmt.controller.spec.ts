import { Test, TestingModule } from '@nestjs/testing';
import { CmtController } from './cmt.controller';
import { CmtService } from './cmt.service';

describe('CmtController', () => {
  let cmtController: CmtController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CmtController],
      providers: [CmtService],
    }).compile();

    cmtController = app.get<CmtController>(CmtController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cmtController.getHello()).toBe('Hello World!');
    });
  });
});
