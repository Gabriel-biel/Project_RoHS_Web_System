import { Router } from 'express'

import { AuthenticateAdminController } from '@modules/admins/useCases/authenticateAdmin/AuthenticateAdminController'
import { CreateAdminController } from '@modules/admins/useCases/createAdmin/CreateAdminController'

export const adminRoutes = Router()

const createAdminController = new CreateAdminController()
const authenticateAdminController = new AuthenticateAdminController()

adminRoutes.post('/', createAdminController.handle)
adminRoutes.post('/sessions', authenticateAdminController.handle)
