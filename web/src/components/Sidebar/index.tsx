import React from 'react'

import logo from '../../assets/logo.png'

import { Container, Link } from './styles'

interface ISidebarProps {
  page: 'ic' | 'gd' | 'gp'
}

const Sidebar: React.FC<ISidebarProps> = ({ page }: ISidebarProps) => {
  return (
    <Container>
      <img src={logo} alt="Salcomp" />

      <Link isActive={page === 'ic'} href="#">
        Informações da companhia
      </Link>
      <Link isActive={page === 'gd'} href="#">
        Gerenciamento de documentos
      </Link>
      <Link isActive={page === 'gp'} href="#">
        Gerenciamento de partes
      </Link>
    </Container>
  )
}

export default Sidebar
