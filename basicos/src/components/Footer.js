import React, { Component } from 'react';

class Footer extends Component {
    
    render() {

        const fecha = this.props.fecha;

        return (
            <div>
                <p>Todos los derechos reservados | {fecha}</p>
            </div>
        );
    }
}

export default Footer;