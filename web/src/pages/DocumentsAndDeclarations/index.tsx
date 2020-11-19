import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi'

import {
  Grid,
  Sidebar,
  LinkSideBar,
  Main,
  BackButton,
  PartsList,
  PartsInfo,
  ButtonView
} from './styles'

interface ISidebarProps {
  page: 'ic' | 'gdd'
}

const DocumentsDeclarations: React.FC<ISidebarProps> = ({
  page
}: ISidebarProps) => {
  return (
    <Grid>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <LinkSideBar isactive={page === 'ic'} to="/parts">
          Gerenciamento de partes
        </LinkSideBar>
        <LinkSideBar isactive={page === 'gdd'} to="/register">
          Documentos e Declarações
        </LinkSideBar>

        <img src={salcompRed} className="salcompRed" alt="logo-empresa" />

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
        <ButtonView>
          <h1>Documents And Declarations</h1>
          <Link to="parts">
            <button>
              <FiPlusCircle size={28} color="#fff" />
              Register Documents
            </button>
          </Link>
        </ButtonView>
        <PartsList>
          <table>
            <thead>
              <tr>
                <td>Document Name</td>
                <td>Submit Date</td>
                <td>Status</td>
                <td>Observation</td>
              </tr>
            </thead>
            <tbody>
              <PartsInfo>
                <td>Name Document</td>
                <td>
                  <input type="date" />
                </td>
                <td>Date</td>
                <td>Description</td>
              </PartsInfo>
            </tbody>
          </table>
        </PartsList>
      </Main>
    </Grid>
  )
}

export default DocumentsDeclarations