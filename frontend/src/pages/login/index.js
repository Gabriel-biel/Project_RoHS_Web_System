import React from "react";
import { FiLogIn } from "react-icons/fi";

import './styles.css';

import logo from '../../assets/logo.png'
import imgFundo from '../../assets/preencher-dados.jpg'

export default function Login() {
    return (
        <>
            <div className="login-container">

                <section className="form">
                    <a>
                        <img src={logo} alt="Salcomp" />
                    </a>
                    <img src={imgFundo} alt="Imagem" />
                    <form>
                        <fieldset>
                            <legend>Faça Seu Login</legend>
                            <div className="inputs">
                                <input placeholder="Prestador"></input>
                                <input placeholder="Sua ID"></input>
                                <input placeholder="Senha"></input>
                                <button className="button" type="submit">Entrar</button>
                            </div>

                            <a href="/registers">
                                <FiLogIn size={16} color="#ffa500" />
                                Não tenho cadastro
                            </a>
                        </fieldset>
                        <fieldset>
                            <footer>
                                Entrar em contato
                                <br />
                                    Suporte
                                <br />
                                    Duvidas
                                <br />
                                    Atendimento remoto
                            </footer>

                        </fieldset>
                    </form>
                </section>
            </div>
        </>
    );
}