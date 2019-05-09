import {keyframes} from 'styled-components';

export const transitions = {
    slideDown: keyframes`
    0%{
        opacity : 0;
        transform : translateY(-100vh);
    }
    75%{
        opacity : 1;
        transform : translateY(25px);
    }
    100%{
        transform : translateY(0);
    }
  `,
    slideUp: keyframes`
        0%{
            opacity : 1;
            transform : translateY(0);
        }
        25%{
            opacity : 1;
            transform : translateY(25px);
        }
        100%{
            opacity : 0;                                
            transform : translateY(-100vh);
        }
    `
}