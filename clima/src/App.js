import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {

  //State principal
  //ciudad = state, guardarCiudad = setState
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);

  const datosConsulta = datos => {
    //Validacion
    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  let componente;
  console.log(error)
  if(error){
    componente = <Error mensaje='Ambos campos son obligatorios'></Error>
  }else{
    componente = null;
  }

  return (
    <div>
      <Header/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
