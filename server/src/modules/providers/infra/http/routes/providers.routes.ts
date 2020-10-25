import { Router } from 'express'

import ProvidersController from '../controllers/ProvidersController'

const providersRouter = Router()

const providersController = new ProvidersController()

providersRouter.get('/', providersController.index)
providersRouter.post('/', providersController.create)

export default providersRouter
