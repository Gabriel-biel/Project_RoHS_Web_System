import joi from 'joi'

import { IAuthenticateAdminDTO } from '@modules/admins/dtos/IAuthenticateAdminDTO'

export const authenticateAdminSchema = joi.object<IAuthenticateAdminDTO>({
  admin_id: joi.number().required(),
  password: joi.string().required()
})
