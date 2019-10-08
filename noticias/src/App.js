import React, { Component } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias()
  }

  consultarNoticias = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6f987e6fb351468cb299c689eea7630e`;

    const res = await fetch(url);
    const data = await res.json();

    if(data.status === 'ok'){
      this.setState({
        noticias: data.articles
      })
    }
  }

  render() {
    const noticias = this.state.noticias

    return (
      <div>
        <Header></Header>
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias
            noticias={noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;