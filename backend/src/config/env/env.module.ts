import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvValidationSchema } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: EnvValidationSchema.schema,
      isGlobal: true,
      cache: true,
    }),
  ],
})
export class EnvModule {}
