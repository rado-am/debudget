import * as Joi from 'joi';

export class EnvValidationSchema {
  public static schema = Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development')
      .required(),
    PORT: Joi.number().default(5000).required(),
  });
}
