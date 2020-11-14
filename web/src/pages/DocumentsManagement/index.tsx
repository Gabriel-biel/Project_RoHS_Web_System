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
  PartsList,
  Options,
  BackButton,
  BGModal,
  InfoParts
} from './styles'

interface ISidebarProps {
  page: 'ic' | 'gd' | 'gp'
}

const DocumentsManagement: React.FC<ISidebarProps> = ({
  page
}: ISidebarProps) => {
  return (
    <Grid>
      <BGModal>
        <div>
          <button>Edit</button>
          <h1>XXXXXX</h1>
          <table>
            <thead>
              <tr>
                <td>Sub Part</td>
                <td>Sub Group</td>
                <td>GWI-11A1</td>
                <td>FISP/MSDS</td>
                <td>Rohs Report</td>
                <td>Date Rohs Report</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <PartsList>
                <td>
                  <input type="text" placeholder="Paper" />
                </td>
                <td>
                  <select name="cars" id="cars">
                    <option value="Select">Select</option>
                    <option value="First option">First Option</option>
                    <option value="saab">Secund Option</option>
                    <option value="opel">Three Option</option>
                    <option value="audi">Four Opion</option>
                  </select>
                </td>
                <td>Upload</td>
                <td>Upload</td>
                <td>Upload</td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <Link to="">
                    <FiPlusCircle size={28} color="#43B162" />
                  </Link>
                </td>
              </PartsList>
            </tbody>
          </table>
        </div>
      </BGModal>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <LinkSideBar isactive={page === 'gp'} to="/parts">
          Gerenciamento de partes
        </LinkSideBar>
        <LinkSideBar isactive={page === 'gp'} to="/parts">
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
          Caro fornecedor, cadastre aqui suas informações princiapis para que
          sejam notificados sobre informações importantes.
        </h1>
        <ButtonView>
          <Link to="parts">
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
                  <button>XXXXXX</button>
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
