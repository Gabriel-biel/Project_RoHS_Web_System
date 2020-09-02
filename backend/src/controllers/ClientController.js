const crypto = require('crypto')
const bcrypt = require('bcryptjs')
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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
  
    await connection('clients').insert({
      id,
      password: hash,
      name,
      phone,
      email
    })
  
    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params

    const client = await connection('clients')
      .where('id', id)
      .select('*')
      .first()
    
    if (!client) {
      return response.status(400).json({ error: 'Client not founded' })
    }

    await connection('clients').where('id', id).delete()

    return response.status(204).send()
  }
}