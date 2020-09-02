import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader'

import './styles.css'

import api from '../../services/api';

export default function Contacts() {
  //function handleContacts(e){
    //e.preventDefault();
  //}
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get('contacts').then(response => {
      setContacts(response.data);
    })
  }, [])

  /*const contacts = [
    {
      id: 1,
      department: 'Departamento de TI',
      contact_name: 'Samuel da Silva Andrade',
      phone: '+5592999134575',
      email: 'samuel.andrade@salcomp.com'
    },

    {
      id: 2,
      department: 'Departamento de TI',
      contact_name: 'Vinicius Malafaia Peres',
      phone: '+5592999134575',
      email: 'vinniemalafaia@hotmail.com'
    },

    {
      id: 3,
      department: 'Departamento de TI',
      contact_name: 'Vinicius Malafaia Peres',
      phone: '+5592999134575',
      email: 'vinniemalafaia@hotmail.com'
    }
  ]*/

  return (
    <div className="contacts-content">
      <PageHeader 
        provider="li"
        user="li"
        contacts="contacts"
      />
      <div className="contacts-container">
        <h1>Lista de Contatos</h1>
        <ul className="box">
          {contacts.map(contact => (
            <li key={contact.id}>
              <table>
                <tr>
                  <td className="title">Departamento</td>
                  <td className="title">Nome</td>
                  <td className="title">Telefone</td>
                  <td className="title">E-mail</td>
                </tr>
                <tr className="values">
                  <td>{contact.department}</td>
                  <td>{contact.contact_name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                </tr>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}