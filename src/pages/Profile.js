import React from 'react';

import './Profile.scss';

import styled from 'styled-components'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Wrapper = styled.div`
    background:black;
    width:100vw;
    height:100vh;
`;

const Profile = () => {
    return (
        <Wrapper>
            <div className="P_bg">
                <div className="P_about">
                    <h3>본명 : 이지은</h3>
                    <h3>출생 : 1993년 5월 16일</h3>
                    <h3>직업 : 가수, 탤런트</h3>
                    <h3>데뷔 : 2008년 9월 18일</h3>
                    <h3>소속사 : 카카오M</h3>
                    <h3></h3>
                </div>
                <div className="P_Fa_Box">
                    <a href="https://ko-kr.facebook.com/iu.loen"><FaFacebookSquare/></a>
                    <a href="https://twitter.com/_iuofficial"><FaTwitterSquare/></a>
                    <a href="https://www.instagram.com/dlwlrma/?hl=ko"><FaInstagram/></a>
                    <a href="https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww?pbjreload=10"><FaYoutubeSquare/></a>
                </div>
            </div>
        </Wrapper>
    );
};

export default Profile;