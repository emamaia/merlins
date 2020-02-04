import React from 'react'

import './style.css'

function Input(props){
    return(
        <input className='input' onSubmit={props.onSubmit} type= {props.type} placeholder={props.placeholder}>{props.children}</input>
    )
}

export default Input