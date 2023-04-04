import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

import { EnvModule } from './env.module';

describe('EnvModule', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [EnvModule],
    }).compile();

    configService = moduleRef.get<ConfigService>(ConfigService);
  });

  afterEach(() => {
    process.env.NODE_ENV = 'test';
  });

  it('should have a defined NODE_ENV value', () => {
    expect(configService.get<string>('NODE_ENV')).toBeDefined();
  });

  it('should have a defined PORT value', () => {
    expect(configService.get<number>('PORT')).toBeDefined();
  });

  it("should have a NODE_ENV value of 'test'", () => {
    expect(configService.get<string>('NODE_ENV')).toBe('test');
  });

  it('should have a PORT value of 3000', () => {
    expect(configService.get<number>('PORT')).toBe(3000);
  });
});
