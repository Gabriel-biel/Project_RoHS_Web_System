import React from "react";
import { FiLogIn } from "react-icons/fi";

import './styles.css';

import logo from '../../assets/logo.png'
import preencher from '../../assets/preencher-dados.jpg'

export default function Login() {
    return (
        <>
            <div className="login-container">

                <selection className="form">
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
                </selection>
                <img src={preencher} alt="Imagem" />
            </div>
        </>
    );
}