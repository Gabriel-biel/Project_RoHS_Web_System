import { Router } from 'express'

import { adminRoutes } from '@modules/admins/infra/http/routes/admins.routes'

export const appRoutes = Router()

appRoutes.use('/admins', adminRoutes)
