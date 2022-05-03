import { Test, TestingModule } from '@nestjs/testing';
import { ZunguController } from './zungu.controller';
import { ZunguService } from './zungu.service';

describe('ZunguController', () => {
  let zunguController: ZunguController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ZunguController],
      providers: [ZunguService],
    }).compile();

    zunguController = app.get<ZunguController>(ZunguController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(zunguController.getHello()).toBe('Hello World!');
    });
  });
});
