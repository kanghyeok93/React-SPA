import React, {Component} from 'react';

import { R_Album } from "pages";
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class RAlbumList extends Component {

    static propTypes = {
        imgs : ImmutablePropTypes.listOf(
            ImmutablePropTypes.mapContains({
                id : PropTypes.string,
                img : PropTypes.string
            })
        )
    };

    render() {
        const { imgs, onClick } = this.props;

        const R_Album_List = imgs.map(
            img => (
                <R_Album
                    imgs = { img }
                    onClick = { onClick }
                />
            )
        );

        return (
            <div>
                 { R_Album_List }
            </div>
        );
    }
}

export default RAlbumList;



