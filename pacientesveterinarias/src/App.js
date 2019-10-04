import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  }

  componentDidMount(){
    const citas = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [];

    this.setState({
      citas
    });
  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = data => {
    const citas = [...this.state.citas, data];
    this.setState({
      citas
    });
  }

  eliminarCita = data => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(e => e.id !== data);
    this.setState({
      citas
    });
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
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
