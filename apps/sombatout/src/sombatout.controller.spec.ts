import { Test, TestingModule } from '@nestjs/testing';
import { SombatoutController } from './sombatout.controller';
import { SombatoutService } from './sombatout.service';

describe('SombatoutController', () => {
  let sombatoutController: SombatoutController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SombatoutController],
      providers: [SombatoutService],
    }).compile();

    sombatoutController = app.get<SombatoutController>(SombatoutController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sombatoutController.getHello()).toBe('Hello World!');
    });
  });
});
