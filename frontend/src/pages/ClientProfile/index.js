import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'

import api from '../../services/api'

import './styles.css'

function ClientProfile() {
  const [ client, setClient ] = useState([])

  const history = useHistory()

  const id = localStorage.getItem('client_id')
  const Authorization = localStorage.getItem('Authorization')

  useEffect(() => {
    api.get('profile-client', {
      headers: {
        client_id: id,
        // Authorization
      }
    }).then(response => {
      setClient(response.data.client)
    })
  }, [id])

  function handleLogout() {
    localStorage.clear()
    history.push('/login')
  }

  return (
    <div className="client-content">
      <PageHeader
        provider="li"
        user="user"
        contacts="li"
      />
      <div className="profile-container">
        <article className="profile">
          <div className="wellcomes">
            <h1>Bem vindo,</h1>
            <span>{client.name}</span>
            <strong>Tenha um ótimo dia!</strong>
          </div>
          <div className="profile-data">
            <h1>Seu perfil</h1>
            <hr />
            <strong>Nome</strong>
            <p>{client.name}</p>

            <strong>Telefone</strong>
            <p>{client.phone}</p>

            <strong>E-mail</strong>
            <p>{client.email}</p>
          </div>
        </article>
        <article className="todo">
          <div className="todo-buttons">
            <strong>Clique abaixo para gerar uma ID e senha para um fornecedor</strong>
            <button className="button">
              Gerar ID
            </button>
          </div>
          <div className="todo-buttons">
            <strong>Clique abaixo para gerenciar a lista de contatos</strong>
            <button className="button">
              Gerenciar contatos
            </button>
          </div>
          <button onClick={handleLogout}>Sair</button>
        </article>
      </div>
    </div>
  )
}

export default ClientProfile;