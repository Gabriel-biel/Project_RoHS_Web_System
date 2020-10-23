import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import Provider from '../models/Provider'

export default class ProvidersController {
  async index(request: Request, response: Response): Promise<Response> {
    const providersRepository = getRepository(Provider)

    const providers = await providersRepository.find()

    return response.status(200).json(providers)
  }
}
