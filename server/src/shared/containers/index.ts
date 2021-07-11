import { container } from 'tsyringe'

import './providers'

import { AdminsRepository } from '@modules/admins/infra/typeorm/repositories/AdminsRepository'
import { IAdminsRepository } from '@modules/admins/repositories/IAdminsRepository'

container.registerSingleton<IAdminsRepository>(
  'AdminsRepository',
  AdminsRepository
)
