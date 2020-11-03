import React from 'react'

import logo from '../../assets/rohs.png'

import { Container, LinkSideBar } from './styles'

interface ISidebarProps {
  page: 'ic' | 'gd' | 'gp'
}

const Sidebar: React.FC<ISidebarProps> = ({ page }: ISidebarProps) => {
  return (
    <Container>
      <img src={logo} alt="Salcomp" />

      <LinkSideBar isactive={page === 'ic'} to="/dashboard">
        Dashboard
      </LinkSideBar>
      <LinkSideBar isactive={page === 'gd'} to="/documents">
        Gerenciamento de documentos
      </LinkSideBar>
      <LinkSideBar isactive={page === 'gp'} to="/parts">
        Gerenciamento de partes
      </LinkSideBar>
    </Container>
  )
}

export default Sidebar
