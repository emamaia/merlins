import React from 'react'

import './style.css'

function CardPotions(props){
    return(
        <div className='card-potion'>
            <img src={require('../../assets/'+props.imagem)} alt='potions images' className='card-img'/>
            <p className='card-texto'>{props.texto}<span className='card-span'>{props.span}</span></p>

        </div>
    )
}

export default CardPotions

