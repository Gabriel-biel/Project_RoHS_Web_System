import React from 'react'

import Sidebar from '../../components/Sidebar'
import { Grid, Main, ButtonView } from './styles'
import { FiPlusCircle } from 'react-icons/fi'

const Contacts: React.FC = () => {
  return (
    <Grid>
      <Sidebar page="ic" />

      <Main>
        <h1>Caro fornecedor, cadastre aqui suas informações princiapis para que sejam notificados sobre informações importantes.</h1>
        <ButtonView>
          <button>
            <FiPlusCircle size={16} color="#fff"/>
            Pressione
          </button>
        </ButtonView>
      </Main>
    </Grid>
  )
}

export default Contacts
