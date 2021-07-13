import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateAdminUseCase } from './CreateAdminUseCase'

export class CreateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createAdmin = container.resolve(CreateAdminUseCase)

    const admin = await createAdmin.execute()

    return response.status(201).json(admin)
  }
}
