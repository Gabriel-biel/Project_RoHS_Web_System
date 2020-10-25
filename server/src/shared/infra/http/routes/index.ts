import { Router } from 'express'

import providersRouter from '@modules/providers/infra/http/routes/providers.routes'
import sessionsRouter from '@modules/providers/infra/http/routes/sessions.routes'

const routes = Router()

routes.use('/providers', providersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
