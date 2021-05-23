import React from 'react';
import styled from 'styled-components';

const Background = () => {
    return (
        <>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                    fillOpacity="1"
                    d="M0,96L80,133.3C160,171,320,245,480,234.7C640,224,800,128,960,85.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
            </Svg>
        </>
    );
}

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

export default Background;
