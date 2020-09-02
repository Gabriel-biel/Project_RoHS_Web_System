import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

import PageHeader from '../../components/PageHeader'

function LoginClient() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await api.post('login', { id, password })

      localStorage.setItem('client_id', response.data.client.id)
      localStorage.setItem('Authorization', response.data.token)

    } catch (err) {
      return alert('Id ou senha inválido')
    }

    history.push('/profile-client')
  }

  return (
    <div className="login-screen">
      <PageHeader
        provider="li"
        user="user"
        contacts="li"
      />
      <h1>Faça seu login de usuário</h1>

      <div className="img-fundo">
        <div className="login-container">
          <section className="form">
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <input
                  placeholder="Sua ID"
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>

  )
}

export default LoginClient