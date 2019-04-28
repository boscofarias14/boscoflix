import React, { Component } from 'react';
import Filme from './Components/js/Filme';
import './App.css';
import APIFilmes, {APIMenu}  from './Components/api';
import Header from './Components/js/outros/header';
// import Modal from './Components/js/modal'



class App extends Component {
  
  render() {
 
    var filmes = APIFilmes.allFilmes().map((filme) => 
      <div className="filmeTeste">
        <Filme 
          titulo={filme.titulo} 
          url={filme.url} 
          url_poster={filme.modal.url_poster}
          sinopse={filme.sinopse}
          duracao={filme.modal.duracao}
          genero={filme.modal.genero}>
          {APIFilmes.reduzSinopse(filme.id)}
        </Filme>
      </div>  
    )
    
    return (
      <div className="content">
          <Header />          
          <div className="container div-flex">
            {filmes}
          </div>
      </div> 
      
    ); 
  }
}

export default App;
