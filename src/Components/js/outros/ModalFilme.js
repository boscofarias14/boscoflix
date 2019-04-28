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
                    <p>{this.props.sinopse_modal}</p>
                    <div className="dadosFilme">
                        <ul className="collection">
                            <li className="collection-item">Alvin</li>
                            <li className="collection-item">Alvin</li>
                            <li className="collection-item">Alvin</li>
                            <li className="collection-item">Alvin</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default ModalFilme;