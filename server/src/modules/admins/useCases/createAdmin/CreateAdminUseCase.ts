import { inject, injectable } from 'tsyringe'

import { IAdminsRepository } from '@modules/admins/repositories/IAdminsRepository'
import { IHashProvider } from '@shared/containers/providers/HashProvider/models/IHashProvider'
import { AppError } from '@shared/errors/AppError'
import generateId from '@utils/generateId'
import generatePassword from '@utils/generatePassword'

interface IResponse {
  admin_id: number
  password: string
}

@injectable()
export class CreateAdminUseCase {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute(): Promise<IResponse> {
    const findAdmin = await this.adminsRepository.findAdmin()

    if (findAdmin) {
      throw new AppError('An Admin is already registered!')
    }

    const id = generateId()
    const password = generatePassword()

    const hashedPassword = await this.hashProvider.generateHash(password)

    await this.adminsRepository.create({
      admin_id: id,
      password: hashedPassword
    })

    return {
      admin_id: id,
      password
    }
  }
}
