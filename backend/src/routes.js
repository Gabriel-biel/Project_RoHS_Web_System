const express = require('express')
const crypto = require('crypto')

const connection = require('./database/connection')

const routes = express.Router()

routes.get('/clients', async (request, response) => {
  const clients = await connection('clients').select('*')

  return response.json(clients)
})

routes.post('/clients', async (request, response) => {
  const {
    password,
    name,
    phone,
    email
  } = request.body

  const id = crypto.randomBytes(4).toString('HEX')

  await connection('clients').insert({
    id,
    password,
    name,
    phone,
    email
  })

  return response.json({ id })
})

module.exports = routes