import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';


import AgregarProductos from './components/AgregarProductos';
import Productos from './components/Productos';
import EditarProductos from './components/EditarProductos';
import Producto from './components/Producto';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const urlAPI = 'http://localhost:4000';

  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const res = await axios.get(`${urlAPI}/restaurant`);
      
      guardarProductos(res.data);
    }
    consultarAPI();
  }, []);

  return (
    <Router>
      <Header /> {/*Como un include a todas las paginas dentro del router*/}
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos/nuevo" component={AgregarProductos}/>
          <Route exact path="/productos" render={() => (
            <Productos productos={productos}/>
          )}/>
          <Route exact path="/productos/editar/:id" component={EditarProductos}/>
          <Route exact path="/productos/:id" component={Producto}/>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
