import { Test, TestingModule } from '@nestjs/testing';
import { DocmanController } from './docman.controller';
import { DocmanService } from './docman.service';

describe('DocmanController', () => {
  let docmanController: DocmanController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocmanController],
      providers: [DocmanService],
    }).compile();

    docmanController = app.get<DocmanController>(DocmanController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(docmanController.getHello()).toBe('Hello World!');
    });
  });
});
