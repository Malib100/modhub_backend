import { Test, TestingModule } from '@nestjs/testing';
import { ModController } from '../src/mod/mod.controller';
import { ModService } from '../src/mod/mod.service';

describe('ModController', () => {
  let controller: ModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModController],
      providers: [ModService],
    }).compile();

    controller = module.get<ModController>(ModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
