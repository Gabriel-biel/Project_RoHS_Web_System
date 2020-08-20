const connection = require('../database/connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

module.exports = {
  async create(request, response) {
    const { id, password } = request.body

    const provider = await connection('providers')
      .where('id', id)
      .select('*')
      .first()

    if (!provider) {
      return response.status(400).json({ error: 'No PROVIDER found with this ID'})
    }

    if (!await bcrypt.compare(password, provider.password)) {
      return response.status(400).json({ error: 'Invalid password'})
    }

    provider.password = undefined

    const token = jwt.sign({ id: provider.id }, authConfig.secret, {
      expiresIn: 86400  // Expira em um dia
    })

    return response.send({provider, token})
  }
}