import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.png'

import './styles.css'

export default function PageHeader(props) {
  const history = useHistory()

  function credentialUser(e) {
    e.preventDefault()

    const client_id = localStorage.getItem('client_id')

    if (!client_id) {
      history.push('/login')
    } else {
      history.push('/profile-client')
    }
  }

  return (
    <header className="page-header">
      <section className="logo-content">
        <Link to="/" >
          <img src={logoImg} alt="Salcomp" />
        </Link>
      </section>
      <section className="menu">
        <ul>
          <li className={`${props.provider}`}>
            <Link to="/">Provider</Link>
          </li>
          <li className={`${props.user}`}>
            <Link onClick={credentialUser} to='/client-profile'>User</Link>
          </li>
          <li className={`${props.contacts}`}>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </section>
    </header>
  )
}