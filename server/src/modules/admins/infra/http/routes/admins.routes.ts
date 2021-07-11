import { Router } from 'express'

import { CreateAdminController } from '@modules/admins/useCases/createAdmin/CreateAdminController'

export const adminRoutes = Router()

const createAdminController = new CreateAdminController()

adminRoutes.post('/', createAdminController.handle)
