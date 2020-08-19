const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { id, password } = request.body

    const provider = await connection('providers')
      .where('id', id)
      .where('password', password)
      .select('id')
      .first()

    if (!provider) {
      return response.status(400).json({ error: 'No PROVIDER found with this ID or Incorrect Password'})
    }

    return response.json(provider)
  }
}