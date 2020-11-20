import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle, FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'

import Modal from '../../components/Modal/PartCode'

import {
  Grid,
  LinkSideBar,
  Main,
  Sidebar,
  ButtonView,
  LogoMainFooter,
  PartsList,
  Options,
  BackButton,
  InfoParts
} from './styles'

interface ISidebarProps {
  page: 'ic' | 'gd' | 'gp'
}

const DocumentsManagement: React.FC<ISidebarProps> = ({
  page
}: ISidebarProps) => {
  const [isModal, setIsModal] = useState(false)
  return (
    <Grid>
      {isModal ? <Modal onClose={() => setIsModal(false)} /> : null}
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <LinkSideBar isactive={page === 'gp'} to="/parts">
          Gerenciamento de partes
        </LinkSideBar>
        <LinkSideBar isactive={page === 'gd'} to="/register">
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
        <h1>
          Caro fornecedor, cadastre aqui suas
          <br /> informações princiapis para que sejam
          <br /> notificados sobre informações importantes.
        </h1>
        <ButtonView>
          <Link to="/documents">
            <button>
              <FiPlusCircle size={28} color="#fff" />
              New Part Code
            </button>
          </Link>
        </ButtonView>
        <PartsList>
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
              <InfoParts>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>
                  <button onClick={() => setIsModal(true)}>XXXXXX</button>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>20/12/2020</td>
                <td>
                  <span className="aprovado">Aprovado</span>
                </td>
                <td>
                  <input type="text" />
                </td>
              </InfoParts>
              <InfoParts>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>
                  <button>XXXXXX</button>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>20/12/2020</td>
                <td>
                  <span className="reprovado">Reprovado</span>
                </td>
                <td>
                  <input type="text" />
                </td>
              </InfoParts>
              <InfoParts>
                <Options>
                  <input type="checkbox" />
                </Options>
                <td>
                  <button>XXXXXX</button>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>20/12/2020</td>
                <td>
                  <span className="pendente">Pendente</span>
                </td>
                <td>
                  <input type="text" />
                </td>
              </InfoParts>
            </tbody>
          </table>
        </PartsList>
        <LogoMainFooter>
          <img src="" alt="" />
        </LogoMainFooter>
      </Main>
    </Grid>
  )
}

export default DocumentsManagement
