const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const clients = await connection('clients').select('*')
  
    return response.json(clients)
  },

  async create(request, response) {
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
  }
}