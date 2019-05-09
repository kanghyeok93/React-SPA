import React, {Component} from 'react';

import styled from 'styled-components';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

import './R_Album.scss';

const Wrapper = styled.div`
    width:20%;
    height:100%;
    box-sizing:border-box;
    margin:0 auto;
    padding:20px;
`;

class R_Album extends Component {
    static propTypes ={
        imgs : ImmutablePropTypes.mapContains({
            id : PropTypes.string,
            img : PropTypes.string
        }),
        onClick : PropTypes.func
    };

    render() {
        const { imgs,onClick } = this.props;
        const{ img,id } = imgs.toJS();

        return (
            <Wrapper>
                <div className="R_Album_Item">
                    <img src={require(`../${img}`)} onClick={ () => onClick(id)} />
                </div>
            </Wrapper>
        );
    }
}

export default R_Album;

