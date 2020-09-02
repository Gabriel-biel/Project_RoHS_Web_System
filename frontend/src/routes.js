import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import LoginClient from './pages/LoginClient'
import ClientProfile from './pages/ClientProfile'
import Contacts from './pages/Contacts'
import dataManagement from './pages/DataManagement'
import ClientData from './pages/ClientData'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' component={LoginClient} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/profile-client' component={ClientProfile} />
        <Route path='/management' component={dataManagement} />
        <Route path='/client-data' component={ClientData} />
      </Switch>
    </BrowserRouter>
  )
}