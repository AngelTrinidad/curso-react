import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas, eliminarCita}) => {

    //Imprimir el mensaje
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aqui';

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">
                    {citas.map(e => (
                        <Cita 
                            cita={e}
                            key={e.id}
                            eliminarCita={eliminarCita}
                        ></Cita>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListaCitas;