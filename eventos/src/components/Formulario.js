import React, { Component } from 'react';
import {CategoriasConsumer} from '../context/CategoriasContext';
import {EventosConsumer} from '../context/EventosContext';

class Formulario extends Component {

    state = {
        nombre: '',
        categoria: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    return (
                        <form
                            onSubmit={e => {
                                e.preventDefault()
                                value.obtenerEventos(this.state)
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por nombre o categoria
                                </legend>
                            </fieldset>
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de evento o ciudad"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.handleChange}
                                    >
                                        <option value="">|Selecciona una categoria|</option>
                                        <CategoriasConsumer>
                                            {({categorias}) => {
                                                return (categorias.map(e => (
                                                    <option key={e.id} value={e.id} data-uk-form-select>
                                                        {e.name_localized}
                                                    </option>
                                                )))
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <input type="submit" className="uk-button uk-button-danger" value="Buscar"></input>
                                </div>
                            </div>
                        </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;