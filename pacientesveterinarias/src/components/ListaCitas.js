import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas, eliminarCita}) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">Administra las citas aqui</h2>
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