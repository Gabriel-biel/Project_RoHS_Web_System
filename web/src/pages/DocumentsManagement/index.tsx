import React from 'react'
import Sidebar from '../../components/Sidebar'

import { Container } from './styles'

const DocumentsManagement: React.FC = () => {
  return (
    <Container>
      <Sidebar page="gd" />
      <main>
        <h1>Gerenciamento de Documentos</h1>
      </main>
    </Container>
  )
}

export default DocumentsManagement
