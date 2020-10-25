import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import Provider from '../infra/typeorm/entities/Provider'

interface IRequest {
  identifier: string
  password: string
}

interface IResponse {
  token: string
  provider: Provider
}

class AuthenticateProviderService {
  public async execute({ identifier, password }: IRequest): Promise<IResponse> {
    const providersRepository = getRepository(Provider)

    const provider = await providersRepository.findOne({
      where: { identifier }
    })

    if (!provider) {
      throw new Error('Incorrect email or password combination')
    }

    const passwordMatched = await compare(password, provider.password)

    if (!passwordMatched) {
      throw new Error('Incorrect email or password combination')
    }

    const token = sign({}, '3e51873bb507d32cda878d679b851500', {
      subject: provider.id,
      expiresIn: '1d'
    })

    return { provider, token }
  }
}

export default AuthenticateProviderService
