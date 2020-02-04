import React from 'react'

function Button(props){
    return(
        <button onSubmit={props.onSubmit} className={props.classes} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button