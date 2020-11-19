import React from 'react'
import { MdContacts } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'
import { FiAlertCircle, FiMapPin } from 'react-icons/fi'

import salcompLogo from '../../assets/salcomp-logo.jpg'

import {
  Grid,
  Main,
  ImageContainer,
  ListSquare,
  Square,
  Sidebar
} from './styles'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'

const Dashboard = () => {
  const history = useHistory()

  return (
    <Grid>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <img src={salcompRed} alt="logo-empresa" />

        <div>
          <Link to="/register">Edit Profile</Link>
        </div>
      </Sidebar>
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

          <Link to="/parts">
            <Square>
              <FiAlertCircle size={60} color="#b8b8f2" />
              <span>Documents Management</span>
              <p>Informações da Compania</p>
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
