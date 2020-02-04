import React from 'react'
import Input from '../Input'

import logo from '../../assets/logo.png'
import iconeCaldeira from '../../assets/iconecaldeirao.png'

import './style.css'

function Nav(props) {
    return (
        <div className='container-nav'>
            <img className='logo-img' src={logo} />
            <Input
                placeholder='Search our stock'
            />
            <div className='container-nav__buy'>
                <div className='container-nav__text'>
                    <h3>Free shipping</h3>
                    <p>on orders over $50</p>
                </div>

                <img className='icone' src={iconeCaldeira} />

               <p>BAG: <span>1</span></p>
            </div>

        </div>
    )
}

export default Nav