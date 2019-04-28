import React, { Component } from 'react';
import '../css/Filme.css';
import { Modal } from 'react-materialize';
import ModalFilme from './outros/ModalFilme';

class Filme extends Component{
  
    render(){
      const trigger = <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">info_outline</i></a>;
      var style = {
        estilo_filme : {
          backgroundImage: `url(${this.props.url})`, 
          backgroundSize:"cover"
        }
      }
      return(
        <div className="row">
          <div className="card">
            <div className="card-image">
              <div className="imgFilme" style = {Object.assign(style.estilo_filme)}></div>
              <Modal header={this.props.titulo} trigger={trigger}>
                <ModalFilme 
                  url_poster={this.props.url_poster} 
                  sinopse_modal={this.props.sinopse}
                  duracao={this.props.duracao} 
                  genero={this.props.genero}/>
              </Modal>
            </div>
            <div className="card-content">
            <span className="card-title">{this.props.titulo}</span>
              <p>{this.props.children}</p>
            </div>
          </div>
        </div>      
      );
    }
}

export default Filme;