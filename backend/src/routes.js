const express = require('express')

const ClientController = require('./controllers/ClientController')
const ContactController = require('./controllers/ContactController')
const ProviderController = require('./controllers/ProviderController')
const CompanyController = require('./controllers/CompanyController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/profile', ProfileController.index)

routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.create)

routes.get('/contacts', ContactController.index)
routes.post('/contacts', ContactController.create)
routes.delete('/contacts/:id', ContactController.delete)

routes.post('/providers', ProviderController.create)
routes.get('/providers', ProviderController.index)
routes.delete('/providers/:id', ProviderController.delete)

routes.post('/companies', CompanyController.create)
routes.get('/companies', CompanyController.index)
routes.delete('/companies/:id', CompanyController.delete)

module.exports = routes