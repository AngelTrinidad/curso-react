import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';

const App = () => {

  //Utilizar useState
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  //Metodo para consultar la api de letras de canciones
  const consultarAPILetra = async busqueda => {
    const url = `https://api.lyrics.ovh/v1/${busqueda.artista}/${busqueda.cancion}`;
    const res = await axios(url);
    
    agregarArtista(busqueda.artista);

    //guardar en el state
    agregarLetra(res.data.lyrics);
  }

  const consultarAPIInfo = async () => {
    
    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const res = await axios(url);
      agregarInfo(res.data.artists[0]);
    }    
  }

  useEffect(() => {
    consultarAPIInfo();
  }, [artista])

  return (
    <Fragment>
      <Formulario
        consultarAPILetra={consultarAPILetra}
      ></Formulario>
      <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Informacion
                info={info}
              />
            </div>
            <div className="col-md-6">
              <Cancion
                letra={letra}
              />
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default App;