import { Router } from 'express'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import ProvidersController from '../controllers/ProvidersController'

const providersRouter = Router()

const providersController = new ProvidersController()

providersRouter.use(ensureAuthenticated)

providersRouter.get('/', providersController.index)
providersRouter.post('/', providersController.create)

export default providersRouter
