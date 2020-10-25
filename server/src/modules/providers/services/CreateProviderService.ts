import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import ICreateProviderDTO from '@modules/providers/dtos/ICreateProviderDTO'

import Provider from '../infra/typeorm/entities/Provider'

class CreateProviderService {
  public async execute({
    name,
    identifier,
    password,
    cnpj,
    location,
    segment
  }: ICreateProviderDTO): Promise<Provider> {
    const providersRepository = getRepository(Provider)

    const verifyProviderById = await providersRepository.findOne({
      where: { identifier }
    })

    if (verifyProviderById) {
      throw new Error('Provider already exists')
    }

    const verifyProviderByCnpj = await providersRepository.findOne({
      where: { cnpj }
    })

    if (verifyProviderByCnpj) {
      throw new Error('Provider already exists')
    }

    const hashedPassword = await hash(password, 10)

    const provider = providersRepository.create({
      name,
      identifier,
      password: hashedPassword,
      cnpj,
      location,
      segment
    })

    await providersRepository.save(provider)

    return provider
  }
}

export default CreateProviderService
