import React, { Component } from 'react';
import './../../css/header.css';
import {APIMenu} from './../../api'; 
import { Route, BrowserRouter, NavLink } from 'react-router-dom';

export class Header extends Component{

    render(){
        var itensMenu = APIMenu.itensMenu.map((itemMenu) =>
            <li key={itemMenu.id}>
                <NavLink to={itemMenu.link}>{itemMenu.label}</NavLink>
            </li>
        );

        return(
            <header>
                <div className="logo">
                    <h1>BoscoFlix</h1>
                </div>
                <div className="menu">
                    <ul>
                    {itensMenu}
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;