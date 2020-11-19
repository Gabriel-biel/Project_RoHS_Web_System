import React from 'react'

import logo from '../../assets/rohs.png'

import { Container, LinkSideBar } from './styles'

interface ISidebarProps {
  page: 'ic' | 'gerenciamentoDocumentos' | 'gerenciamentoPartes'
}

const Sidebar: React.FC<ISidebarProps> = ({ page }: ISidebarProps) => {
  return (
    <Container>
      <img src={logo} alt="Salcomp" />

      <LinkSideBar isactive={page === 'ic'} to="/dashboard">
        Dashboard
      </LinkSideBar>
      <LinkSideBar
        isactive={page === 'gerenciamentoDocumentos'}
        to="/documents"
      >
        Gerenciamento de documentos
      </LinkSideBar>
      <LinkSideBar isactive={page === 'gerenciamentoPartes'} to="/parts">
        Gerenciamento de partes
      </LinkSideBar>
    </Container>
  )
}

export default Sidebar
