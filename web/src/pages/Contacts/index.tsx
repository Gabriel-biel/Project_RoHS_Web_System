import React from 'react'

import {
  Grid,
  Main,
  Sidebar,
  ButtonView,
  LogoMainFooter,
  ContactList,
  Options,
  Contact
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
          <table>
            <thead>
              <tr>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>Department</td>
                <td>Name</td>
                <td>Position</td>
                <td>Email</td>
                <td>Contact n01</td>
                <td>Contact n02</td>
                <Options></Options>
              </tr>
            </thead>
            <tbody>
              <Contact>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>T.I</td>
                <td>Gabriel Lima de Antonio Andrade</td>
                <td>Vagabundo</td>
                <td>gabigay24@gmail.com</td>
                <td>92992929292</td>
                <td>97991919191</td>
                <Options>...</Options>
              </Contact>
            </tbody>
          </table>
        </ContactList>
        <LogoMainFooter>
          <img src="" alt="" />
        </LogoMainFooter>
      </Main>
    </Grid>
  )
}

export default Contacts
