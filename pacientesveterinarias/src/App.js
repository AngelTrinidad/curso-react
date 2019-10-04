import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    console.log(datos)
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
