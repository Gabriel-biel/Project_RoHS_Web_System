import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { IAuthenticateAdminDTO } from '@modules/admins/dtos/IAuthenticateAdminDTO'
import validateParams from '@utils/validateParams'

import { authenticateAdminSchema } from '../../schemas/authenticateAdminSchema'
import { AuthenticateAdminUseCase } from './AuthenticateAdminUseCase'

export class AuthenticateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.body

    const validParams = validateParams(params, authenticateAdminSchema)

    const { admin_id, password } = validParams as IAuthenticateAdminDTO

    const authenticateAdmin = container.resolve(AuthenticateAdminUseCase)

    const { token, admin } = await authenticateAdmin.execute({
      admin_id,
      password
    })

    return response.status(201).json({ token, admin })
  }
}
