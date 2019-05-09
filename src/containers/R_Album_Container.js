import React, {Component} from 'react';
import R_Album_List from 'components/R_Album_List';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as rmodalActions from 'store/modules/modal';

class RAlbumContainer extends Component {

    handleOnClick = (id) => {
        const { imgs, RModalActions } = this.props;

        const album = imgs.find(album => album.get('id') === id);

        RModalActions.show({
            album : album.toJS()
        })
    };

    render() {
        const { imgs } = this.props;
        const { handleOnClick } = this;
        return (
            <R_Album_List
                imgs={imgs}
                onClick = { handleOnClick }
            />
        );
    }
}

export default connect(
    (state) => ({
        imgs : state.M_R_Album_List
    }),
    (dispatch) => ({
        RModalActions : bindActionCreators(rmodalActions,dispatch)
    })
)(RAlbumContainer);