const connection = require('../database/connection')
const bcrypt = require('bcryptjs')

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

    console.log(password, provider.password)

    if (!await bcrypt.compare(password, provider.password)) {
      return response.status(400).json({ error: 'Invalid password'})
    }

    return response.json(provider)
  }
}