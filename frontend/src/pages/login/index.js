<<<<<<< Updated upstream
import React from "react";
import { FiLogIn } from "react-icons/fi";

import './styles.css';

import logo from '../../assets/logo.png'
import preencher from '../../assets/preencher-dados.jpg'

export default function Login() {
    return (
        <>
            <div className="login-container">

                <section className="form">
                    <a>
                        <img src={logo} alt="Salcomp" />
                    </a>
                    <form>
                        <h1>Faça Seu Logon</h1>

                        <input placeholder="Sua ID"></input>
                        <input placeholder="Senha"></input>

                        <button className="button" type="submit">Entrar</button>

                        <a href="/register">
                            <FiLogIn size={16} color="#ffa500" />
                            Não tenho cadastro
                        </a>
                        <footer>
                            Entrar em contato
                        </footer>
                    </form>
                </section>
                <img src={preencher} alt="Imagem" />
            </div>
        </>
    );
}
=======
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
>>>>>>> Stashed changes
