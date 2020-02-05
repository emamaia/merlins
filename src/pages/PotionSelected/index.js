import React from 'react'
import { getPotions } from '../../service/base'


import './style.css'

class PotionSelected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            potion: [],

        }
    }


    componentDidMount() {
        getPotions()
            .then(response => {               
                this.setState({
                    potion: response.data.potions[localStorage.getItem('id')]
                })
            })
            .catch(error => {
                console.error(error)
            })                      
    }


    render() {
        return (
            <div className='container-selected'>

                <img 
                src={this.state.potion.image != undefined ? require('../../assets/' + this.state.potion.image): ''} 
                alt='Potion selected' className='container-selected__img' 
                />
                <div className='container-selected__text'>
                    <h3 className='sleected-title'>{this.state.potion.name}</h3>
                    <div>
                        <h3>Use/Effect:</h3>
                        <p>{this.state.potion.effect}</p>
                    </div>

                    <div>
                        <h3>Ingredients</h3>
                        <span>{this.state.potion.ingredients}</span>
                    </div>

                    <div>
                        <h3>Price</h3>
                        <h7>{this.state.potion.price}</h7>
                    </div>

                </div>

            </div>
        )
    }
}

export default PotionSelected