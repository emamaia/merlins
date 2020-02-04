import React from 'react'
import { Link } from 'react-router-dom'

import facebook from '../../../assets/facebook.png'
import pinterest from  '../../../assets/pinterest.png'
import twitter from '../../../assets/twitter.png'
import google from '../../../assets/google.png'
import git from '../../../assets/git.png'

import '../style.css'

function FooterLinks(props) {
    return (
        <div className= 'container-footer__div'>
            <div className='container-footer__links'>
                <Link className='links-footer'>
                    Company
                </Link>
                <Link className='links-footer'>
                    Contact us
                </Link>
                <Link className='links-footer'>
                    Shippings
                </Link>
                <Link className='links-footer'>
                    Returns
               </Link>
                <Link className='links-footer'>
                    Carees
            </Link>
            </div>

            <div className='container-footer__icones'>
                <img src={facebook} alt='Icone mídias sociais'/>
                <img src={pinterest} alt='Icone mídias sociais'/>
                <img src={twitter} alt='Icone mídias sociais'/>
                <img src={google} alt='Icone mídias sociais'/>
                <img src={git} alt='Icone mídias sociais'/>
            </div>

            <div className='container-footer__texto' >
                <p>@2015 Merlin's Potions. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default FooterLinks