import React from 'react'
import Button from '../Button'


import './style.css'

function CardPotions(props) {
    return (
        <div className='card-potion'>
            <Button
            classes='card-btn'
            onClick={props.onClick}
            >
            <img src={require('../../assets/' + props.imagem)} alt='potions images' className='card-img' />
            <p className='card-texto'>{props.texto + ' ' + '-'}<span className='card-span'>{props.span}</span></p>    
            </Button>    

        </div>
    )
}

export default CardPotions

