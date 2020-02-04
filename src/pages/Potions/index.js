import React from 'react'
import { getPotions } from '../../service/base'
import CardPotions from '../../components/CardPotions'
import aging from '../../assets/aging-potion.png'
import bulgeye from '../../assets/bulgeye-potion.png'
import dragon from '../../assets/dragon-tonic.png'
import love from '../../assets/love-potion.png'
import polyjuice from '../../assets/polyjuice-potion.png'
import sleeping from '../../assets/sleeping-draught.png'


import './style.css'

class Potions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaCard: []
        }
    }

    componentDidMount() {
        getPotions()
            .then(response => {                        
                let lista = Object.values(response.data.potions)
                this.setState({
                    listaCard: lista
                })
               console.log(this.state.listaCard);
               
            })
            .catch(error => {
                console.error(error)
            })         
         
    }

    render() {
        return (
            <div className='container-card__potions'>               
               {this.state.listaCard.map(item => {
                            return (
                                    <CardPotions
                                        imagem={item.image}
                                        texto={item.name}
                                        span={item.price}
                                    />
                                                               
                            )
                        })
            }
            </div>
        )
    }
}

export default Potions

