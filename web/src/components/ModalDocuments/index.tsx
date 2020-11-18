import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'

import { PartsList, PopupModal, ContentPage } from './styles'

const Modal = ({ onClose = () => {} }) => {
  return (
    <PopupModal>
      <div>
        <button className="close" onClick={onClose}>
          +
        </button>
        <ContentPage>
          <button className="Edit">Edit</button>
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
        </ContentPage>
      </div>
    </PopupModal>
  )
}

export default Modal
