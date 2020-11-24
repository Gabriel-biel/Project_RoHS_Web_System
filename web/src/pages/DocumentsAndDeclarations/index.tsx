import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi'
import { MdGetApp } from 'react-icons/md'

import NewDeclaration from '../../components/Modal/NewDeclaration'

import {
  Grid,
  Sidebar,
  LinkSideBar,
  Main,
  Square,
  ListSquare,
  BackButton,
  DocumentsList,
  DocumentsInfo,
  Anexos,
  ButtonView
} from './styles'

interface ISidebarProps {
  page: 'ic' | 'gdd'
}

const DocumentsDeclarations: React.FC<ISidebarProps> = ({
  page
}: ISidebarProps) => {
  const [isDeclaration, setIsDeclaration] = useState(false)
  return (
    <Grid>
      {isDeclaration ? (
        <NewDeclaration onClose={() => setIsDeclaration(false)} />
      ) : null}
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
          <button onClick={() => setIsDeclaration(true)}>
            <FiPlusCircle size={28} color="#fff" />
            Register Documents
          </button>
        </ButtonView>
        <DocumentsList>
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
              <DocumentsInfo>
                <td>Name Document</td>
                <td>
                  <input type="date" />
                </td>
                <td>Date</td>
                <td>Description</td>
              </DocumentsInfo>
            </tbody>
          </table>
        </DocumentsList>
        <Anexos>
          <span>Anexos</span>
          <hr />
          <ListSquare>
            <Square>
              <span>Declaração de conflito de minerais</span>
              <MdGetApp size={30} color="#3333" />
              <p>click here on download</p>
            </Square>
            <Square>
              <span>UL ECV</span>
              <MdGetApp size={30} color="#3333" />
              <p>click here on download</p>
            </Square>
            <Square>
              <span>Declaração SVHC</span>
              <MdGetApp size={30} color="#3333" />
              <p>click here on download</p>
            </Square>
            <Square>
              <span>Outro Download Qualquer</span>
              <MdGetApp size={30} color="#3333" />
              <p>click here on download</p>
            </Square>
          </ListSquare>
        </Anexos>
      </Main>
    </Grid>
  )
}

export default DocumentsDeclarations
