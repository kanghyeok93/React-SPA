import React from 'react';
import './Home.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
    background:black;
`;

const Home = () => {
    return (
        <Wrapper>
            <div className="Home"/>
        </Wrapper>
    );
};

export default Home;