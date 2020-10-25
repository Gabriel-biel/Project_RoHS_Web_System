import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '@config/auth'
import AppError from '@shared/errors/AppError'

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
      throw new AppError('Incorrect email or password combination', 401)
    }

    const passwordMatched = await compare(password, provider.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect email or password combination', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: provider.id,
      expiresIn
    })

    return { provider, token }
  }
}

export default AuthenticateProviderService
