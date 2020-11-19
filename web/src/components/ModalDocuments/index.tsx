import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'

import {
  PopupModal,
  PartsList,
  PartsInfo,
  CloseButton,
  PopupContent,
  EditButton,
  ContentPage
} from './styles'

const Modal = ({ onClose = () => {} }) => {
  return (
    <PopupModal>
      <PopupContent>
        <CloseButton>
          <span>Parts Managements: XY0000</span>
          <button className="close" onClick={onClose}>
            +
          </button>
        </CloseButton>
        <ContentPage>
          <EditButton>
            <button className="Edit">Edit</button>
          </EditButton>
          <h1>XXXXXX</h1>
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
                <td>Status</td>
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
                <td>Upload DOC</td>
                <td>Upload DOC</td>
                <td>Upload DOC</td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <span className="aprovado">Aprovado</span>
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
        </ContentPage>
      </PopupContent>
    </PopupModal>
  )
}

export default Modal
