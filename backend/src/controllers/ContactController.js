const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const contacts = await connection('contacts')
      .join('clients', 'clients.id', '=', 'contacts.client_id')
      .select([
        'contacts.*',
        'clients.name',
      ])

    return response.json(contacts)
  },

  async create(request, response) {
    const { department, contact_name, phone, email } = request.body
    const client_id = request.headers.authorization

    const [id] = await connection('contacts').insert({
      department,
      contact_name,
      phone,
      email,
      client_id
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params
    const client_id = request.headers.authorization

    const contact = await connection('contacts')
      .where('id', id)
      .select('client_id')
      .first()


    if (contact.client_id !== client_id) {
      return response.status(401).json({ error: 'Operation not permitted' })
    }

    await connection('contacts').where('id', id).delete()

    return response.status(204).send()
  }
}