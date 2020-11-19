import React from 'react'

import { Main, Grid, Form } from './styles'

const Informations = () => {
  return (
    <Grid>
      <Main>
        <span>Olá, registre seus dados e muita atenção!</span>
        <Form>
          <label htmlFor="Departamento">Departamento</label>
          <input id="Departamento" type="text" placeholder="Departamento" />

          <label htmlFor="name">Nome</label>
          <input id="name" type="text" placeholder="Nome" />

          <label htmlFor="função">Posição</label>
          <input id="função" type="text" placeholder="Posição / Função" />

          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" />

          <label htmlFor="contact1">Contato Nº1</label>
          <input id="contact1" type="text" placeholder="Contato Nº1" />

          <label htmlFor="contact2">Contato Nº2</label>
          <input type="text" placeholder="Contato Nº2" />
          <div className="button">
            <button type="submit">Salvar</button>
            <a href="/contacts">Cancelar</a>
          </div>
        </Form>
      </Main>
    </Grid>
  )
}

export default Informations
