import React, {Component} from 'react';
import I_Album_List from 'components/I_Album_List';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as imodalActions from 'store/modules/modal';

class IAlbumContainer extends Component {

    handleOnClick = (id) => {
        const { imgs, IModalActions } = this.props;

        const album = imgs.find(album => album.get('id') === id);

        IModalActions.show({
            album : album.toJS()
        })
    };

    render() {
        const { imgs } = this.props;
        const { handleOnClick } = this;
        return (
            <I_Album_List
                imgs={imgs}
                onClick = { handleOnClick }
            />
        );
    }
}

export default connect(
    (state) => ({
        imgs : state.M_I_Album_List
    }),
    (dispatch) => ({
        IModalActions : bindActionCreators(imodalActions,dispatch)
    })
)(IAlbumContainer);