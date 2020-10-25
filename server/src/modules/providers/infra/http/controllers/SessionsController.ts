import { Request, Response } from 'express'

import AuthenticateProviderService from '@modules/providers/services/AuthenticateProviderService'

class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { identifier, password } = request.body

    const authenticateProvider = new AuthenticateProviderService()

    const { provider, token } = await authenticateProvider.execute({
      identifier,
      password
    })

    return response.json({ provider, token })
  }
}

export default SessionsController
