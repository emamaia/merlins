import React from  'react'
import FooterLinks from './FooterLinks'
import FooterNews from './FooterNews'

import './style.css'

function Footer(props){
    return(
        <div className='container-footer'>
            <FooterLinks />
            <FooterNews />
        </div>
    )
}

export default Footer