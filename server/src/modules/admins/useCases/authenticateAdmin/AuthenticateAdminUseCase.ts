import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import authConfig from '@config/auth'
import { IAuthenticateAdminDTO } from '@modules/admins/dtos/IAuthenticateAdminDTO'
import { IAdminsRepository } from '@modules/admins/repositories/IAdminsRepository'
import { IHashProvider } from '@shared/containers/providers/HashProvider/models/IHashProvider'
import { AppError } from '@shared/errors/AppError'

interface IResponse {
  admin: {
    admin_id: number
  }
  token: string
}

@injectable()
export class AuthenticateAdminUseCase {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute({
    admin_id,
    password
  }: IAuthenticateAdminDTO): Promise<IResponse> {
    const admin = await this.adminsRepository.findAdmin()

    if (!admin) {
      throw new AppError('There is no admin registered!', 404)
    }

    if (admin.admin_id !== admin_id) {
      throw new AppError('Email or password incorrect!', 401)
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      admin.password
    )

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: admin.id,
      expiresIn
    })

    return {
      admin: {
        admin_id: admin.admin_id
      },
      token
    }
  }
}
