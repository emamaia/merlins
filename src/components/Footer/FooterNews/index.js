import React from 'react'
import Input from '../../Input'
import Button from '../../Button'

import '../style.css'

function FooterNews(props){
    return(
        <div className= 'container-footer__news'>
            <h5>Sign up for our Newsletter</h5>
            <p>Sign up for our newsletter & get exlusive discounts</p>

            <div className='news-submit'>
            <Input
            placeholder = ' Enter your e-mail'
            />
            <Button
            className= 'btn-footer'
            >
                Submit
            </Button>
            </div>

        </div>
    )
}

export default FooterNews