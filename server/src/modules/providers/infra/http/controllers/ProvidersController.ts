import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import Provider from '@modules/providers/infra/typeorm/entities/Provider'

export default class ProvidersController {
  async index(request: Request, response: Response): Promise<Response> {
    const providersRepository = getRepository(Provider)

    const providers = await providersRepository.find()

    return response.status(200).json(providers)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, identifier, password, cnpj, location, segment } = request.body

    const providersRepository = getRepository(Provider)

    const verifyProviderById = await providersRepository.findOne({
      where: { identifier }
    })

    if (verifyProviderById) {
      return response.status(401).json({ error: 'Provider already exists' })
    }

    const verifyProviderByCnpj = await providersRepository.findOne({
      where: { cnpj }
    })

    if (verifyProviderByCnpj) {
      return response.status(401).json({ error: 'User already exists' })
    }

    try {
      const provider = providersRepository.create({
        name,
        identifier,
        password,
        cnpj,
        location,
        segment
      })

      await providersRepository.save(provider)

      return response.status(200).json(provider)
    } catch (err) {
      return response.status(401).json({ error: err.message })
    }
  }
}
