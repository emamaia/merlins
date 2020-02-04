import React from 'react'
import { Link } from 'react-router-dom'

import menu from '../../../assets/menu-nav.png'

import '../style.css'


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aberto: false
        }
    }

    handleAbreOuFecha = e => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto }
        })
    }
    render() {
        let classesDasOpcoes = 'navbar-menu__opcoes'
        let classesDoBotao = 'navbar-menu__botao'

        if (this.state.aberto) {
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
            classesDoBotao += ' navbar-menu__botao--aberto'
        }
        return (
            <div className='nav-menu navbar-links'>
                <img src={menu} className={classesDoBotao} onClick={this.handleAbreOuFecha}/>
                    
        
                <ul className={classesDasOpcoes}>
                    <li>
                        <Link to='/' className='navbar-links__ativo'>
                            Potions
                        </Link>
                    </li>
                    <li>
                        <Link to='/ingredients' className='navbar-links__ativo'>
                            Ingredients
                        </Link>
                    </li>
                    <li>
                        <Link to='/books' className='navbar-links__ativo'>
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link to='/supplies' className='navbar-links__ativo'>
                            Supplies
                        </Link>
                    </li>
                    <li>
                        <Link to='/charms' className='navbar-links__ativo'>
                            Charms
                        </Link>
                    </li>
                   
                </ul>

            </div>
        )
    }
}

export default Menu
