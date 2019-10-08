import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas, eliminarCita}) => {
    const titulo = Object.keys(citas).length > 0 ? 'Listado de citas' : 'No hay citas';
    return (
        <div>
            <h2>{titulo}</h2>
            {citas.map((cita, index) => {
                return (<Cita 
                    key={index}
                    index={index}
                    cita={cita}
                    eliminarCita={eliminarCita}
                />);
            })}
        </div>
    );
};

export default ListaCitas;