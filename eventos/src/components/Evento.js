import React from 'react';

const Evento = ({evento}) => {

    return (
        <div >
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo
                        ? <img src={evento.logo.url} alt={evento.name}/>
                        : null
                    }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                </div>

                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={evento.url} target="_blank" rel="noopener noreferrer">
                        Mas info
                    </a>
                </div>
            </div>
        </div>
        
    );
};

export default Evento;