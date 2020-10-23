import { Router } from 'express'

import providersRouter from './provider.routes'

const routes = Router()

routes.use('/providers', providersRouter)

export default routes
