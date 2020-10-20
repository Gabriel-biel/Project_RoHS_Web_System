import React from 'react'
import Sidebar from '../../components/Sidebar'

import { Container } from './styles'

const PartsManagement: React.FC = () => {
  return (
    <Container>
      <Sidebar page="gp" />
      <main>
        <h1>Gerenciamento de Partes</h1>
      </main>
    </Container>
  )
}

export default PartsManagement
