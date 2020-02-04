import React from 'react'

import './style.css'

function CardPotions(props){
    return(
        <div className='card-potion'>
            <img src={props.imagem} alt='potions images' className='card-img'/>
            <p className='card-texto'>{props.texto}<span className='card-span'>{props.spam}</span></p>

        </div>
    )
}

export default CardPotions