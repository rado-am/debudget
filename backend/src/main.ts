import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const logger = new Logger(bootstrap.name);

  const port = configService.get<number>('PORT');
  const environment = configService.get<string>('NODE_ENV');

  await app.listen(port, () => {
    logger.log(`Listening at http://localhost:${port}`);
    logger.log(`Running in ${environment} mode`);
  });
}
bootstrap();
