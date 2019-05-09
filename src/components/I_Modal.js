import React, {Component} from 'react';

import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import {transitions} from '../lib/style.utils';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const Wrapper= styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:1000;
    width:400px;
    text-align:center;
    
    .modal-enter{
        animation : ${transitions.slideDown} .5s ease-in-out;
        animation-fill-mode : forwards;
    }
    
    .modal-leave{
        animation : ${transitions.slideUp} .5s ease-in-out;
        animation-fill-mode : forwards;
    }
`;

const IModalBox = styled.div`
    background:linear-gradient( to left, gray, white );
    opacity:0.9;  
    border-radius:15px;
`;

class IModal extends Component {
    static propTypes = {
        visible : PropTypes.bool
    };

    handleClickOutside = (e) =>{
        const { visible, onHide } = this.props;

        if(!visible) return null;
        onHide();
    };

    handleKeyUp = (e) => {
        const { onHide } = this.props;
        if(e.keyCode === 27){
            onHide();
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.visible !== this.props.visible){
            if(this.props.visible){
                document.body.addEventListener('keyup',this.handleKeyUp)
            }else{
                document.body.removeEventListener('keyup',this.handleKeyUp);
            }
        }
    }

    render() {
        const { visible, children } = this.props;

        return (
            <div>
                <Wrapper>
                    <CSSTransitionGroup
                        transitionName="modal"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        {
                            visible && (<IModalBox>{children}</IModalBox>)
                        }
                    </CSSTransitionGroup>
                </Wrapper>
            </div>
        );
    }
}

export default onClickOutside(IModal);