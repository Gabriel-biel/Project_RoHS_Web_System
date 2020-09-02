const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const companies = await connection('companies').select('*')

    return response.json(companies)
  },

  async create(request, response) {
    const {
      company_name,
      cnpj,
      location,
      phone,
      email,
      skype
    } = request.body

    const provider_id = request.headers.authorization

    const res = await connection('companies').insert({
      company_name,
      cnpj,
      location,
      phone,
      email,
      skype,
      provider_id
    })

    return response.json(res)
  },

  async delete(request, response) {
    const { id } = request.params
    const provider_id = request.headers.authorization

    const company = await connection('companies')
      .where('id', id)
      .select('provider_id')
      .first()


    if (company.provider_id !== provider_id) {
      return response.status(401).json({ error: 'Operation not permitted' })
    }

    await connection('companies').where('id', id).delete()

    return response.status(204).send()
  }
}