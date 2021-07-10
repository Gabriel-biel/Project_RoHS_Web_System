import Joi from 'joi'

import { AppError } from '@shared/errors/AppError'

export default function (params: object, schema: Joi.ObjectSchema): object {
  const validation = schema.validate(params)

  if (validation.error) {
    throw new AppError(validation.error.details[0].message)
  }

  return validation.value
}
