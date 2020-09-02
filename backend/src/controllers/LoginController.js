const connection = require('../database/connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

module.exports = {
  async create(request, response) {
    const { id, password } = request.body

    const client = await connection('clients')
      .where('id', id)
      .select('*')
      .first()

    if (!client) {
      return response.status(400).json({ error: 'No PROVIDER found with this ID'})
    }

    if (!await bcrypt.compare(password, client.password)) {
      return response.status(400).json({ error: 'Invalid password'})
    }

    client.password = undefined

    const token = jwt.sign({ id: client.id }, authConfig.secret, {
      expiresIn: 86400  // Expira em um dia
    })

    return response.send({client, token})
  }
}