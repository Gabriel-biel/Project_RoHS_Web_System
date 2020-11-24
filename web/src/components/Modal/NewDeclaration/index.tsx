import React from 'react'

import {
  CloseButton,
  DeclarationModal,
  PopupContent,
  DeclarationInfo,
  ButtonSubmit,
  DeclarationContent
} from './styles'

const Declarations = ({ onClose = () => {} }) => {
  return (
    <DeclarationModal>
      <PopupContent>
        <CloseButton>
          <button onClick={onClose}>+</button>
        </CloseButton>
        <DeclarationContent>
          <table>
            <thead>
              <tr>
                <td>Document</td>
                <td>Anexo</td>
                <td>Observation</td>
              </tr>
            </thead>
            <tbody>
              <DeclarationInfo>
                <td>
                  <input type="text" placeholder="Document Name" />
                </td>
                <td>Anexo Arquivo</td>
                <td>
                  <input type="text" placeholder="Observations" />
                </td>
              </DeclarationInfo>
            </tbody>
          </table>
        </DeclarationContent>
        <ButtonSubmit>
          <button type="submit">Submit</button>
        </ButtonSubmit>
      </PopupContent>
    </DeclarationModal>
  )
}

export default Declarations
