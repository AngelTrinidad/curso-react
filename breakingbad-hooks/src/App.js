import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase({frase}) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  );
}

const App = () => {

  const [frase, obtenerFrase] = useState({});

  //consulta a una rest api
  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    obtenerFrase(resultado.data[0]);
  }

  //Segundo parametro para especificar que llamara el callback cuando cambie
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      ></Frase>
      <button onClick={consultarAPI}>Generar nueva</button>
    </div>
  );
};

export default App;