import React from 'react'

import {
  Grid,
  Main,
  Sidebar,
  ButtonView,
  ListaContatos,
  LogoMainFooter
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
        <ListaContatos>
          <table>
            <tr>
              <th>Departamento</th>
              <th>Nome</th>
              <th>Position</th>
              <th>Email</th>
              <th>Contact Nº 1</th>
              <th>Contact Nº 2</th>
            </tr>
            <tr>
              <td>T.I</td>
              <td>Gabriel Lima de Antonio Andrade</td>
              <td>Estagíario</td>
              <td>gabriel97gla98@gmail.com</td>
              <td>929xxxxxxx</td>
              <td>97991780447</td>
            </tr>
            <tr>
              <td>T.I</td>
              <td>Vinicius Malafaia</td>
              <td>Estagíario</td>
              <td>Vinicius97vm98@gmail.com</td>
              <td>929xxxxxxx</td>
              <td>97991780447</td>
            </tr>
          </table>
        </ListaContatos>
        <LogoMainFooter>
          <img src="" alt="" />
        </LogoMainFooter>
      </Main>
    </Grid>
  )
}

export default Contacts
