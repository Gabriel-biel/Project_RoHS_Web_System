import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import DocumentsManagement from '../pages/DocumentsManagement'
import PartsManagement from '../pages/PartsManagement'
import Contacts from '../pages/Contacts'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/documents" exact component={DocumentsManagement} />
    <Route path="/parts" exact component={PartsManagement} />
    <Route path="/contacts" exact component={Contacts} />
  </Switch>
)

export default Routes
