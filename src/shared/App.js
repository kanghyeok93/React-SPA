import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Home,Profile } from 'pages';
import R_Album_Container from 'containers/R_Album_Container'
import I_Album_Container from 'containers/I_Album_Container'
import Menu from "containers/Menu";
import R_Album_ModalContainer from "containers/R_Album_ModalContainer";

const IU = styled.div`
    position:absolute;
    top:30px;
    left:55px;
    color:white;
    font-size:5rem;
    font-family: 'Sofia', cursive;
    letter-spacing:20px;
    z-index:100;
`;

const App = () => {
    return (
        <div className="App">
            <IU>IU</IU>
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/r_album" component={R_Album_Container}/>
            <Route path="/i_album" component={I_Album_Container}/>
            <R_Album_ModalContainer/>
        </div>
    );
};

export default App;