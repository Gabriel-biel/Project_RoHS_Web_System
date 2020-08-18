const express = require('express')

const ClientController = require('./controllers/ClientController')
const ContactController = require('./controllers/ContactController')

const routes = express.Router()

routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.create)

routes.get('/contacts', ContactController.index)
routes.post('/contacts', ContactController.create)
routes.delete('/contacts/:id', ContactController.delete)

module.exports = routes