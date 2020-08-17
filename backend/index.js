const express = require('express')

const app = express()

app.use(express.json())

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota: (filtros, paginacao) -> const params = request.query
  * Ruote Params: Parametros utilizados para identificar recursos (/users/:id) -> const params = request.params
  * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos -> request.body
  */

app.get('/users', (request, response) => {
  return response.json({ text: 'Hello World'})
})

app.listen(3333)