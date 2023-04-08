import * as Joi from 'joi';

export class EnvValidationSchema {
  public static schema = Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development')
      .required(),
    PORT: Joi.number().default(5000).required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
    PGADMIN_EMAIL: Joi.string().email().required(),
    PGADMIN_PASSWORD: Joi.string().required(),
  });
}
