import React from 'react'

import {
  Grid,
  Main,
  Sidebar,
  ButtonView,
  LogoMainFooter,
  ContactList,
  TableContainer,
  TableRow,
  TableTitle,
  TableLine
} from './styles'
import carinha from '../../assets/Group.png'
import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'

const Contacts: React.FC = () => {
  return (
    <Grid>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <img src={salcompRed} alt="logo-empresa" />

        <div>
          <span>Seguimento de Embalagens</span>
          <span>Manaus - Am </span>
          <span>224466884422</span>
        </div>
      </Sidebar>
      <Main>
        <h1>
          Caro fornecedor, cadastre aqui suas informações princiapis para que
          sejam notificados sobre informações importantes.
        </h1>
        <ButtonView>
          <button>
            <img src={carinha} alt="Carinha asiático" />
            Pressione
          </button>
        </ButtonView>
        <ContactList>
          <TableContainer>
            <TableRow>
              <TableTitle>
                <input type="checkbox" />
              </TableTitle>
              <TableTitle>Departamento</TableTitle>
              <TableTitle>Nome</TableTitle>
              <TableTitle>Position</TableTitle>
              <TableTitle>Email</TableTitle>
              <TableTitle>Contact Nº 1</TableTitle>
              <TableTitle>Contact Nº 2</TableTitle>
            </TableRow>
            <TableRow>
              <TableLine>T.I</TableLine>
              <TableLine>Gabriel Lima de Antonio Andrade</TableLine>
              <TableLine>Estagíario</TableLine>
              <TableLine>gabriel97gla98@gmail.com</TableLine>
              <TableLine>929xxxxxxx</TableLine>
              <TableLine>97991780447</TableLine>
            </TableRow>
            <TableRow>
              <TableLine>T.I</TableLine>
              <TableLine>Gabriel Lima de Antonio Andrade</TableLine>
              <TableLine>Estagíario</TableLine>
              <TableLine>gabriel97gla98@gmail.com</TableLine>
              <TableLine>929xxxxxxx</TableLine>
              <TableLine>97991780447</TableLine>
            </TableRow>
          </TableContainer>
        </ContactList>
        <LogoMainFooter>
          <img src="" alt="" />
        </LogoMainFooter>
      </Main>
    </Grid>
  )
}

export default Contacts
