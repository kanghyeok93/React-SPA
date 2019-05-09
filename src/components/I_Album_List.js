import React, {Component} from 'react';

import { I_Album } from "pages";
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class IAlbumList extends Component {

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

        const I_Album_List = imgs.map(
            img => (
                <I_Album
                    imgs = { img }
                    onClick = { onClick }
                />
            )
        );

        return (
            <div>
                { I_Album_List }
            </div>
        );
    }
}

export default IAlbumList;



