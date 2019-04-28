import React, { Component } from 'react';
import '../../css/ModalFilme.css';


class ModalFilme extends Component{

    render(){
        var style = {
            estilo_poster:{
                backgroundImage: `url(${this.props.url_poster})`,
                backgroundSize:"cover"
            }
        };
        return(
            <div className="div-flex">
                <div className="imgPoster" style = {Object.assign(style.estilo_poster)}></div>
                <div className="detalhesFilme">
                    <h5>Sinopse</h5>
                    <p>{this.props.sinopse_modal}</p>
                    <div className="dadosFilme">
                        <div className="duracao">
                            <span>Duração: </span> {this.props.duracao} minutos
                        </div>
                        <div className="genero">
                            <span>Gênero: </span> {this.props.genero}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ModalFilme;