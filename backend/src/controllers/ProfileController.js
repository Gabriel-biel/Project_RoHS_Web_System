const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const provider_id = request.headers.authorization

    const companies = await connection('companies')
      .where('provider_id', provider_id)
      .select('*')

    return response.json(companies)
  }
}