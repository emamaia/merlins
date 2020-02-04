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
                console.log(response);
                
                let lista = []
                for (var potion in response.data) {
                    lista.push(potion)
                }
                this.setState({
                    listaCard: lista
                })
            })
            .catch(error => {
                console.error(error)
            })

    }

    render() {
        return (
            <div>
                <h3> texto</h3>
            </div>
        )
    }
}

export default Potions

