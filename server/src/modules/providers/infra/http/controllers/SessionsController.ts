import { Request, Response } from 'express'

import AuthenticateProviderService from '@modules/providers/services/AuthenticateProviderService'

class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { identifier, password } = request.body

      const authenticateProvider = new AuthenticateProviderService()

      const { provider, token } = await authenticateProvider.execute({
        identifier,
        password
      })

      return response.json({ provider, token })
    } catch (err) {
      return response.status(401).json({ error: err.message })
    }
  }
}

export default SessionsController
