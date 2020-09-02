import React from 'react'

import './styles.css'

import PageHeader from '../../components/PageHeader';

function Login() {
  return (
    <div className="login-screen">
      <PageHeader
        provider="provider"
        user="li"
        contacts="li"
      />

      <h1>Faça seu login</h1>
      
      <div className="img-fundo">

        <div className="login-container">
          <section className="form">
            <form>

              <div className="box">
                <input placeholder="Sua ID" />
                <input type="password" placeholder="Sua senha" />
                <button className="button" type="submit">Entrar</button>
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  )
}

export default Login