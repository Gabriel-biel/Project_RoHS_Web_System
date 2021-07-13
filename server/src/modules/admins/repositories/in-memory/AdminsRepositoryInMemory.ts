import { v4 as uuid } from 'uuid'

import { ICreateAdminDTO } from '@modules/admins/dtos/ICreateAdminDTO'
import { Admin } from '@modules/admins/infra/typeorm/entities/Admin'

import { IAdminsRepository } from '../IAdminsRepository'

export class AdminsRepositoryInMemory implements IAdminsRepository {
  private admins: Admin[] = []

  async create({ admin_id, password }: ICreateAdminDTO): Promise<void> {
    const admin = new Admin()

    Object.assign(admin, {
      id: uuid(),
      admin_id,
      password,
      created_at: Date.now()
    })

    this.admins.push(admin)
  }

  async findAdmin(): Promise<Admin | undefined> {
    return this.admins[0]
  }

  async findById(id: string): Promise<Admin | undefined> {
    return this.admins.find(admin => admin.id === id)
  }
}
