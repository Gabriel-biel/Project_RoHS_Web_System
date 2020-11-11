import React from 'react'
import { Link } from 'react-router-dom'

import { FiPlusCircle, FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'

import {
  Grid,
  Main,
  Sidebar,
  LogoMainFooter,
  ContactList,
  Options,
  BackButton,
  Contact
} from './styles'

const PartsManagement: React.FC = () => {
  return (
    <Grid>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

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
        <ContactList>
          <table>
            <thead>
              <tr>
                <td>Sub Part</td>
                <td>Sub Group</td>
                <td>GWI-11A1</td>
                <td>FISP/MSDS</td>
                <td>Rohs Report</td>
                <td>Date Rohs Report</td>
              </tr>
            </thead>
            <tbody>
              <Contact>
                <td>
                  <input type="text" placeholder="Paper" />
                </td>
                <td>
                  <select name="cars" id="cars">
                    <option value="Select"></option>
                    <option value="First option">First Option</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
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

export default PartsManagement
