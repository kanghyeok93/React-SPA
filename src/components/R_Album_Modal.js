import React,{Component} from 'react';
import styled from 'styled-components';
import R_Modal from './R_Modal';
import PropTypes from 'prop-types';
import { FaPlayCircle } from "react-icons/fa";

const Item = styled.div`
    padding:1rem;
    font-family: 'Black And White Picture', sans-serif;
    font-size:2rem
`;

const Item_play = styled.div`
    padding:1rem;
    font-size:3rem
    a{
        color:black;
        &:hover{
            color:red;
        }
    }
    
`;

class RAlbumModal extends Component {
    static propTypes = {
        visible : PropTypes.bool,
        name : PropTypes.string,
        genre : PropTypes.string,
        release : PropTypes.string,
        onHide : PropTypes.func
    };

    render() {

        const { visible, name, genre, release, rsc, onHide} = this.props;

        return (
            <R_Modal visible={visible} onHide={onHide}>
                <Item>
                    {name}
                </Item>
                <Item>
                    장르 : {genre}
                </Item>
                <Item>
                    발매일 : {release}
                </Item>
                <Item_play>
                    <a href={rsc} target="_blank"><FaPlayCircle/></a>
                </Item_play>
            </R_Modal>
        );
    }
}

export default RAlbumModal;