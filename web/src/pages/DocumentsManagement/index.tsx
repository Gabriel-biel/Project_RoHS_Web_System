import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle, FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'

import {
  Grid,
  LinkSideBar,
  Main,
  Sidebar,
  ButtonView,
  LogoMainFooter,
  ContactList,
  Options,
  BackButton,
  Contact
} from './styles'

interface ISidebarProps {
  page: 'ic' | 'gd' | 'gp'
}

const DocumentsManagement: React.FC<ISidebarProps> = ({
  page
}: ISidebarProps) => {
  return (
    <Grid>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <LinkSideBar isactive={page === 'gp'} to="/parts">
          Gerenciamento de partes
        </LinkSideBar>
        <LinkSideBar isactive={page === 'gp'} to="/parts">
          Documentos e Declarações
        </LinkSideBar>

        <img src={salcompRed} alt="logo-empresa" />

        <div>
          <span>Seguimento de Embalagens</span>
          <span>Manaus - Am </span>
          <span>224466884422</span>
        </div>
      </Sidebar>
      <Main>
        <BackButton>
          <Link to="dashboard">
            <button className="voltar">
              <FiArrowLeft size={20} color="#fff" />
              Back
            </button>
          </Link>
        </BackButton>
        <h1>
          Caro fornecedor, cadastre aqui suas informações princiapis para que
          sejam notificados sobre informações importantes.
        </h1>
        <ButtonView>
          <Link to="informations">
            <button>
              <FiPlusCircle size={28} color="#fff" />
              New Part Code
            </button>
          </Link>
        </ButtonView>
        <ContactList>
          <table>
            <thead>
              <tr>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>Part Code</td>
                <td>Description</td>
                <td>Submit Date</td>
                <td>Status</td>
                <td>Comments</td>
              </tr>
            </thead>
            <tbody>
              <Contact>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>
                  <a href="/part">XXXXXX</a>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>20/12/2020</td>
                <td>
                  <span className="aprovado">Aprovado</span>/
                  <span className="reprovado">Reprovado</span>/
                  <span className="pendente">Pendente</span>
                </td>
                <td>
                  <input type="text" />
                </td>
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

export default DocumentsManagement
