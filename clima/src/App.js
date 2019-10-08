import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import axios from 'axios';
import Resultado from './components/Resultado';

function App() {

  //State principal
  //ciudad = state, guardarCiudad = setState
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState('');
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {

    //prevenir primera ejecucion
    if(ciudad === '' || pais === '') return;

    consultarAPI();

  }, [ciudad, pais]);

  const datosConsulta = datos => {
    guardarError(false);
    //Validacion
    if(datos.ciudad === '' || datos.pais === ''){
      guardarError('Ambos campos son obligatorios');
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    
  }

  const consultarAPI = async () => {
    const appId = '8fd59dd4811dad5b3091e7ce01cc3b81';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    
    try{
      const res = await axios({
        url,
        method: 'GET'
      });
  
      if(res.status === 200){
        
        guardarResultado(res.data);
      }

    }catch(err){
      guardarError('La ciudad no existe en nuestro registros');
    }
  }

  let componente;
  if(error){
    componente = <Error mensaje={error}/>
  }else if(resultado.cod === '404'){
    componente = <Error mensaje={error}/>
  }else{
    componente = <Resultado resultado={resultado}/>
  }

  return (
    <div>
      <Header/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6" >
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
