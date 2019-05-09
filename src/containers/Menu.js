import React, {Component} from 'react';
import './Menu.scss';

import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const StyledItem = styled.div`
    color:white;
    font-size:2.5rem;
    text-align:center;
    cursor:pointer;
    &:hover{
        color:rgba(255,051,051,0.5);
    }
    
`;

const Item = ({children,handleClick}) => (
  <StyledItem onClick={handleClick}>
      {children}
  </StyledItem>
);

class Menu extends Component {

    state = {
      isToggle : false,
       item : true
     };

    handleClick = () => {
      this.setState({
          isToggle : !this.state.isToggle,
          item : !this.state.item
      })
    };

    render(){
        const { item } = this.state;

        return (
            <div className="Menu">
                <ul>
                    <Item handleClick={this.handleClick}>{
                        item ? <FaBars/> : <FaTimes/>
                    }</Item>
                    <div style={{display : this.state.isToggle ? 'block' : 'none'}}>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><a href="https://en.wikipedia.org/wiki/IU_(singer)">About</a></li>
                        <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
                        <li><NavLink to="/r_album" activeClassName="active">R-Album</NavLink></li>
                        <li><NavLink to="/i_album" activeClassName="active">I-Album</NavLink></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Menu;