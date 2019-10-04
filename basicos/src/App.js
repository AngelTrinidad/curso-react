import React, {Fragment} from 'react';
import './App.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';
//import MiPrimerComponente from './components/MiPrimerComponente.js'

function App() {
  
  const fecha = new Date();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual"></Header>
      <Productos></Productos>
      <Footer fecha={fecha.getFullYear()}></Footer>
    </Fragment>
  );
}

export default App;
