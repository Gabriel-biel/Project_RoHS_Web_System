const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const providers = await connection('providers').select('*')
  
    return response.json(providers)
  },

  async create(request, response) {
    const client_id = request.headers.authorization
  
    const id = crypto.randomBytes(4).toString('HEX')
    const password = crypto.randomBytes(5).toString('HEX')

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
  
    await connection('providers').insert({
      id,
      password: hash,
      client_id
    })

    return response.json({id: id, password: password})
  },

  async delete(request, response) {
    const { id } = request.params
    const client_id = request.headers.authorization

    const provider = await connection('providers')
      .where('id', id)
      .select('client_id')
      .first()


    if (provider.client_id !== client_id) {
      return response.status(401).json({ error: 'Operation not permitted' })
    }

    await connection('providers').where('id', id).delete()

    return response.status(204).send()
  }
}