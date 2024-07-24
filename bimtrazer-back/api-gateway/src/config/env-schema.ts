import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.string().default(3000),
  JWT_SECRET: Joi.string().required(),
});
