import { getRepository, Repository } from 'typeorm'

import { ICreateAdminDTO } from '@modules/admins/dtos/ICreateAdminDTO'
import { IAdminsRepository } from '@modules/admins/repositories/IAdminsRepository'

import { Admin } from '../entities/Admin'

export class AdminsRepository implements IAdminsRepository {
  private repository: Repository<Admin>

  constructor() {
    this.repository = getRepository(Admin)
  }

  async create({ admin_id, password }: ICreateAdminDTO): Promise<void> {
    const admin = this.repository.create({
      admin_id,
      password
    })

    await this.repository.save(admin)
  }

  async findAdmin(): Promise<Admin | undefined> {
    const admins = await this.repository.find()

    return admins[0]
  }
}
