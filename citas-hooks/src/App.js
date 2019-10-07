import React, {useState} from 'react';
import Formulario from './components/Formulario';
import ListaCitas from './components/ListaCitas';

const App = () => {

  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    //Tomar una copia del state y agregar cliente
    const nuevasCitas = [...citas, cita];
    guardarCitas(nuevasCitas);
  }

  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index,1);
    guardarCitas(nuevasCitas);
  }

  return (
    <div>
      <h1>Administrador de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <ListaCitas 
              citas={citas}
              eliminarCita={eliminarCita}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;