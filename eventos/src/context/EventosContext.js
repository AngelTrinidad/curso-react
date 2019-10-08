import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    state = {
        eventos: []
    }

    token = this.props.token;

    obtenerEventos = async (busqueda) => {
        const res = await axios({
            method: 'GET',
            url: `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&locale=es_ES0`,
            headers: {'Authorization': `Bearer ${this.token}`}
        })
        
        if(res.status === 200){
            this.setState({
                eventos: res.data.events
            })
        }

        return res.data.eventos;
    }

    render() {
        return (
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;