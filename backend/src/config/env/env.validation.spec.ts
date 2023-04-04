import * as Joi from 'joi';

import { EnvValidationSchema } from './env.validation';

describe('EnvValidationSchema', () => {
  it('should define a valid schema', () => {
    const schema = EnvValidationSchema.schema;

    expect(schema).toBeDefined();
    expect(Joi.isSchema(schema)).toBeTruthy();

    const env = {
      NODE_ENV: 'development',
      PORT: 3000,
    };

    const { error, value } = schema.validate(env);

    expect(error).toBeUndefined();
    expect(value).toEqual(env);
  });

  it('should fail for missing required environment variables', () => {
    const schema = EnvValidationSchema.schema;

    const env = {
      NODE_ENV: 'development',
    };
    const { error } = schema.validate(env, { abortEarly: false });

    expect(error).toBeDefined();
    expect(error.details).toHaveLength(1);
    expect(error.details[0].message).toMatch('"PORT" is required');
  });

  it('should fail for invalid environment variables', () => {
    const schema = EnvValidationSchema.schema;

    const env = {
      NODE_ENV: 'invalid',
      PORT: 'invalid',
    };
    const { error } = schema.validate(env, { abortEarly: false });

    expect(error).toBeDefined();
    expect(error.details).toHaveLength(2);
    expect(error.details[0].message).toMatch(
      '"NODE_ENV" must be one of [development, production, test]',
    );
    expect(error.details[1].message).toMatch('"PORT" must be a number');
  });
});
