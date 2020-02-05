import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Potions from './pages/Potions'
import Ingredients from './pages/Ingredients'
import Books from './pages/Books'
import Supplies from './pages/Supplies'
import Charms from './pages/Charms'
import Clearance from './pages/Clearance'
import Login from './pages/Login'
import PotionSelected from './pages/PotionSelected'


import './App.css';

function App() {
  return (
    <div>
      <div className='container-mobile'>
        <div className='container-navs'>
          <Nav />
          <Navbar />
        </div>
        <h4 className='text-mobile'>Free shipping on orders over $50</h4>
      </div>
      <Switch>
        <div>
          <Route exact path='/' component={Potions} />
          <Route path='/ingredients' component={Ingredients} />
          <Route path='/books' component={Books} />
          <Route path='/supplies' component={Supplies} />
          <Route path='/charms' component={Charms} />
          <Route path='/clearance' component={Clearance} />
          <Route path='/login' component={Login} />
          <Route path='/potionselected' component={PotionSelected} />

        </div>
      </Switch>

      <Footer/>
    </div>
  )
}

export default App
