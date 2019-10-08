import React, { Component } from 'react';
import axios from 'axios';

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    state = {
        categorias : []
    }
    
    token = this.props.token;

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        const res = await axios({
            method: 'GET',
            url: `https://www.eventbriteapi.com/v3/categories/?locale=es_ES0`,
            headers: {'Authorization': `Bearer ${this.token}`}
        })
        if(res.status === 200){
            this.setState({
                categorias: res.data.categories
            })
        }
    }

    render() {
        return (
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;