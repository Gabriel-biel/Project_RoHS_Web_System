import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import NewContact from '../components/Modal/NewContact'
import NewDeclaration from '../components/Modal/NewDeclaration'
import DocumentsManagement from '../pages/DocumentsManagement'
import DocumentsDeclarations from '../pages/DocumentsAndDeclarations'
import PartsManagement from '../pages/PartsManagement'
import Contacts from '../pages/Contacts'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/NewDeclaration" exact component={NewDeclaration} />
    <Route path="/newContact" exact component={NewContact} />
    <Route path="/documents" exact component={DocumentsManagement} />
    <Route path="/register" exact component={DocumentsDeclarations} />
    <Route path="/parts" exact component={PartsManagement} />
    <Route path="/contacts" exact component={Contacts} />
  </Switch>
)

export default Routes
