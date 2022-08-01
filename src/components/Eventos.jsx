import { render } from '@testing-library/react'
import React, {Component} from 'react'

export default class Eventos extends Component {

    lanzarAlerta() {
        alert('Me clickeaste')

    }

    cambiarAzul () {
        document.querySelector('body').style.backgroundColor = 'blue'
    }

    cambiarRosa () {
        document.querySelector('body').style.backgroundColor = 'pink'
    }


    render() {
        return (
            <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAzul} onMouseOut={this.cambiarRosa}>
                <h1>Pagina de Eventos</h1>
            </div>
        )
    }
}