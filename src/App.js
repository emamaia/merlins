import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import Potions from './pages/Potions'
import Ingredients from './pages/Ingredients'
import Books from './pages/Books'
import Supplies from './pages/Supplies'
import Charms from './pages/Charms'
import Clearance from './pages/Clearance'
import Login from './pages/Login'


import './App.css';

function App () {
  return (
    <div>
      <Nav/>
      <Navbar />
    <Switch>
      <div>
        <Route exact path='/' component={Potions} />
        <Route path='/ingredients' component={Ingredients} />
        <Route path='/books' component={Books} />
        <Route path='/supplies' component={Supplies} />
        <Route path='/charms' component={Charms} />
        <Route path='/clearance' component={Clearance} />
        <Route path='/login' component={Login} />

      </div>
    </Switch>
    </div>
  )
}

export default App
