import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import CreateProviderService from '@modules/providers/services/CreateProviderService'

import Provider from '@modules/providers/infra/typeorm/entities/Provider'

export default class ProvidersController {
  async index(request: Request, response: Response): Promise<Response> {
    const providersRepository = getRepository(Provider)

    const providers = await providersRepository.find()

    return response.status(200).json(providers)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, identifier, password, cnpj, location, segment } = request.body

    const createProvider = new CreateProviderService()

    const provider = await createProvider.execute({
      name,
      identifier,
      password,
      cnpj,
      location,
      segment
    })

    return response.status(200).json(provider)
  }
}
