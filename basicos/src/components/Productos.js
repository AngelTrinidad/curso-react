import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
    state = {
        list: [
            {id: 1, name: 'Producto-1', price: 30},
            {id: 2, name: 'Producto-2', price: 40},
            {id: 3, name: 'Producto-3', price: 50},
            {id: 4, name: 'Producto-4', price: 30}
        ]
    }

    componentDidMount(){
        console.log('El componente esta listo!');
    }

    componentWillMount(){
        console.log('El componente aun no esta listo...');
    }

    componentWillUpdate(){
        console.log('El componente fue actualizado.');
    }

    render() {

        const {list} = this.state;

        return (
            <div>
                <h1>Lista de Productos</h1>
                {list.map(producto => 
                    <Producto 
                        producto={producto}
                        key={producto.id}
                    />
                )}
            </div>
        );
    }
}

export default Productos;