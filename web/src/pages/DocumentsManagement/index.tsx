import React from 'react'
import { Link } from 'react-router-dom'

import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi'

import logo from '../../assets/rohs.png'
import salcompRed from '../../assets/logo.png'

import {
  Grid,
  Main,
  Sidebar,
  LogoMainFooter,
  PartsList,
  BackButton,
  DescriptionPart,
  ButtonSubmit,
  PartsInfo
} from './styles'

const PartsManagement: React.FC = () => {
  return (
    <Grid>
      <Sidebar>
        <img src={logo} alt="Salcomp" />

        <img src={salcompRed} className="salcompRed" alt="logo-empresa" />

        <div>
          <span>Manaus - Am </span>
          <span>Seguimento de Embalagens</span>
          <span>CNPJ - 224466884422</span>
        </div>
      </Sidebar>
      <Main>
        <BackButton>
          <Link to="parts">
            <button>
              <FiArrowLeft size={20} color="#fff" />
              Back
            </button>
          </Link>
        </BackButton>
        <DescriptionPart>
          <div className="PartCode">
            <label htmlFor="PartCode">Part Code</label>
            <input type="text" placeholder="Code off Part" />
          </div>
          <div className="Description">
            <label htmlFor="Description">Description</label>
            <input type="text" placeholder="Description off Product" />
          </div>
        </DescriptionPart>
        <PartsList>
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
              <PartsInfo>
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
              </PartsInfo>
            </tbody>
          </table>
        </PartsList>
        <ButtonSubmit>
          <button type="submit">Submit</button>
          <Link to="/parts">
            <button className="cancel">Cancel</button>
          </Link>
        </ButtonSubmit>
        <LogoMainFooter>
          <img src={salcompRed} alt="" />
        </LogoMainFooter>
      </Main>
    </Grid>
  )
}

export default PartsManagement
