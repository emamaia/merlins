import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu'


import './style.css'

function Navbar() {
  return (
    <nav className='navbar'>

      <Menu />
      <ul className='navbar-ul'>
        <li>
          <Link to='/clearance' className='navbar-links__ativo clearance'>
            Clearance
          </Link>
        </li>
        <li>
          <Link to='/login' className='navbar-links__ativo'>
            Sing In or Sig Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar