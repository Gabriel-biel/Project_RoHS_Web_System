import { AdminsRepositoryInMemory } from '@modules/admins/repositories/in-memory/AdminsRepositoryInMemory'
import { HashProviderInMemory } from '@shared/containers/providers/HashProvider/in-memory/HashProviderInMemory'
import { AppError } from '@shared/errors/AppError'

import { CreateAdminUseCase } from './CreateAdminUseCase'

let adminsRepository: AdminsRepositoryInMemory
let hashProvider: HashProviderInMemory
let createAdmin: CreateAdminUseCase

describe('CreateAdmin', () => {
  beforeEach(() => {
    adminsRepository = new AdminsRepositoryInMemory()
    hashProvider = new HashProviderInMemory()
    createAdmin = new CreateAdminUseCase(adminsRepository, hashProvider)
  })

  it('should be able to create a new admin', async () => {
    const admin = await createAdmin.execute()

    expect(admin).toHaveProperty('admin_id')
    expect(typeof admin.admin_id).toBe('number')
  })

  it('should not be able to create more than one admin', async () => {
    await createAdmin.execute()

    await expect(createAdmin.execute()).rejects.toBeInstanceOf(AppError)
  })
})
