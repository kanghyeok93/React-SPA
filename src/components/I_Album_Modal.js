import React,{Component} from 'react';
import styled from 'styled-components';
import I_Modal from './I_Modal';
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

class IAlbumModal extends Component {
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
            <I_Modal visible={visible} onHide={onHide}>
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
            </I_Modal>
        );
    }
}

export default IAlbumModal;