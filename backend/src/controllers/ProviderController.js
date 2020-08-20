const crypto = require('crypto')
const bcrypt = require('bcryptjs')
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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
  
    await connection('providers').insert({
      id,
      password: hash,
      client_id
    })
    return response.json({ id })
  }
}