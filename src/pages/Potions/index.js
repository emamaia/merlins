import React from 'react'
import { getPotions } from '../../service/base'
import CardPotions from '../../components/CardPotions'



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

    selectPotion(id) {
        console.log('clicou')      
        localStorage.setItem('id',id)  
       
       this.props.history.push({
           pathname: '/potionselected'
       })
    }

    render() {
        return (
            <div>
                <h2>Potions</h2>
                <div className='container-card__potions'>
                    {this.state.listaCard.map(item => {
                        return (
                            <div>
                            <CardPotions
                                imagem={item.image}                                
                                onClick={() => this.selectPotion(item.id)}
                                texto={item.name}
                                span={item.price}
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Potions

