import React from 'react'

import Sidebar from '../../components/Sidebar'
import { Grid, Main, ButtonView } from './styles'
import carinha from '../../assets/Group.png'

const Contacts: React.FC = () => {
  return (
    <Grid>
      <Sidebar page="ic" />

      <Main>
        <h1>Caro fornecedor, cadastre aqui suas informações princiapis para que sejam notificados sobre informações importantes.</h1>
        <ButtonView>
          <button>
            <img src={carinha} alt="Carinha asiático" />
            Pressione
          </button>
        </ButtonView>
      </Main>
    </Grid>
  )
}

export default Contacts
