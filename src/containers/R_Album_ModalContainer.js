import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import R_Ablum_Modal from 'components/R_Album_Modal';
import Dimmed from 'components/Dimmed';

import * as rmodalActions from 'store/modules/modal';

class R_Album_ModalContainer extends Component {

    handleHide = () => {
        const { RModalActions }= this.props;

        RModalActions.hide();
    };


    render() {
        const{ modal } = this.props;
        const { visible, album } = modal.toJS();
        const { handleHide } = this;
        return (
            <div>
                <R_Ablum_Modal
                    visible = { visible }
                    name = { album.name }
                    genre = { album.genre }
                    release = { album.release }
                    rsc = { album.rsc }
                    onHide = { handleHide }
                />
                <Dimmed  visible = {visible}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        modal : state.modal
    }),
    (dispatch) => ({
        RModalActions : bindActionCreators(rmodalActions,dispatch)
    })
)(R_Album_ModalContainer);