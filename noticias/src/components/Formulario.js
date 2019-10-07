import React, { Component } from 'react';

class Formulario extends Component {

    state = {
        categoria: 'general'
    }

    handleCategoriaChange = (e) => {
        this.setState({
            categoria: e.target.value
        }, () => {
            //Update noticias
            this.props.consultarNoticias(this.state.categoria);
        });
    }

    render() {
        const options = [
            {value: 'general', label: 'General'},
            {value: 'business', label: 'Negocios'},
            {value: 'entertainment', label: 'Entretenimiento'},
            {value: 'health', label: 'Salud'},
            {value: 'science', label: 'Ciencia'},
            {value: 'sports', label: 'Deportes'},
            {value: 'technology', label: 'Tecnologia'},

        ]
        return (
            <div className="buscador row ">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por categoria</h2>
                        <div className="input-field col s12 m8 offset-m2">
                        <select onChange={this.handleCategoriaChange}>
                            {options.map(e => 
                                <option value={e.value} key={e.value}>{e.label}</option>  
                            )}
                        </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;