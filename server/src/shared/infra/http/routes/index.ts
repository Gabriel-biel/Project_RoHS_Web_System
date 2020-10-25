import { Router } from 'express'

import providersRouter from '@modules/providers/infra/http/routes/providers.routes'

const routes = Router()

routes.use('/providers', providersRouter)

export default routes
