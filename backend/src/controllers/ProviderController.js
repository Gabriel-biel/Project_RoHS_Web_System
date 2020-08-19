const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const providers = await connection('providers').select('*')
  
    return response.json(providers)
  },

  async create(request, response) {
    const { password } = request.body

    const client_id = request.headers.authorization
  
    const id = crypto.randomBytes(4).toString('HEX')
  
    await connection('providers').insert({
      id,
      password,
      client_id
    })
    return response.json({ id })
  }
}