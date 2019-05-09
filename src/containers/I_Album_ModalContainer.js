import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import I_Ablum_Modal from 'components/I_Album_Modal';
import Dimmed from 'components/Dimmed';

import * as imodalActions from 'store/modules/modal';

class I_Album_ModalContainer extends Component {

    handleHide = () => {
        const { IModalActions }= this.props;

        IModalActions.hide();
    };


    render() {
        const{ modal } = this.props;
        const { visible, album } = modal.toJS();
        const { handleHide } = this;
        return (
            <div>
                <I_Ablum_Modal
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
        IModalActions : bindActionCreators(imodalActions,dispatch)
    })
)(I_Album_ModalContainer);