import React from 'react'
import { MdContacts } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'
import { FiAlertCircle, FiMapPin } from 'react-icons/fi'

import salcompLogo from '../../assets/salcomp-logo.jpg'

import Sidebar from '../../components/Sidebar'

import { Grid, Main, ImageContainer, ListSquare, Square } from './styles'

const Dashboard = () => {
  const history = useHistory()

  return (
    <Grid>
      <Sidebar page="ic" />
      <Main>
        <header>
          <div>
            <span>samuel.andrade@salcomp.com</span>
            <p>Supplier</p>
          </div>
        </header>

        <ImageContainer>
          <img src={salcompLogo} alt="Salcomp" />
        </ImageContainer>

        <ListSquare>
          <Link to="/contacts">
            <Square onClick={() => history.push('contacts')}>
              <MdContacts size={60} color="#b8b8f2" />
              <span>Contatos</span>
              <p>Veja sua lista de contatos</p>
            </Square>
          </Link>

          <Link to="/informations">
            <Square>
              <FiAlertCircle size={60} color="#b8b8f2" />
              <span>Informações da companhia</span>
              <p>Visualize informações da companhia</p>
            </Square>
          </Link>

          <Square>
            <FiMapPin size={60} color="#b8b8f2" />
            <span>Localização</span>
            <p>Veja as melhores rotas</p>
          </Square>
        </ListSquare>
      </Main>
    </Grid>
  )
}

export default Dashboard
