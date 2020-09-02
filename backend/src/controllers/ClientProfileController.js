const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const { client_id } = request.headers
  
    const client = await connection('clients')
      .where('id', client_id)
      .select('*')
      .first()
  
    return response.send({ client })
  }
}