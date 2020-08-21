const express = require('express')

const ClientController = require('./controllers/ClientController')
const ContactController = require('./controllers/ContactController')
const ProviderController = require('./controllers/ProviderController')
const CompanyController = require('./controllers/CompanyController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const authMiddleware = require('./middlewares/auth')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/profile', authMiddleware, ProfileController.index)

routes.get('/clients', ClientController.index)
routes.post('/clients', authMiddleware, ClientController.create)

routes.get('/contacts', ContactController.index)
routes.post('/contacts', ContactController.create)
routes.delete('/contacts/:id', authMiddleware, ContactController.delete)

routes.post('/providers', authMiddleware, ProviderController.create)
routes.get('/providers', ProviderController.index)
routes.delete('/providers/:id', authMiddleware, ProviderController.delete)

routes.post('/companies', authMiddleware, CompanyController.create)
routes.get('/companies', authMiddleware, CompanyController.index)
routes.delete('/companies/:id', authMiddleware, CompanyController.delete)

module.exports = routes