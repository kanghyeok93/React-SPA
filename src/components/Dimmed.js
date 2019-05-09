import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Black= styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:900;
    background:rgba(0,0,0,0.3);
`;

const Dimmed = ({visible}) => {
    return (
        <div>
            {visible && <Black/>}
        </div>
    );
};

Dimmed.propTypes = {
    visible : PropTypes.bool
};

export default Dimmed;