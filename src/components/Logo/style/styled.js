import styled, { keyframes } from 'styled-components';


const ascendOne = keyframes`
    0% {
        top: 52px
    }
    100% {
        top: 0px
    }
`;

const ascendTwo = keyframes`
    0% {
        top: 52px
    }
    100% {
        top: 26px
    }
`;

const morphOne = keyframes`
    0% {
        transform: rotate(-45deg) skew(15deg, 15deg);
        top: 52px;
    }
    100% {
        transform: rotate(-45deg) skew(-45deg, 15deg);
        height: 18.5px;
        top: 59px;
    }
`;

const morphTwo = keyframes`
    0% {
        transform: rotate(-45deg) skew(15deg, 15deg);
    }

    100% {
        transform: rotate(-45deg) skew(-45deg, 15deg);
        height: 18.5px;
        top: 13px;
        opacity: 1
    }
`;

export const StyledContainer = styled.div`
    width: 20px;
    margin: 15px 5px;
    position: relative;
`;

export const StyledSquare = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    left: 10px;
`;

export const StyledFaceTop = styled(StyledSquare)`
    transform: rotate(-45deg) skew(15deg, 15deg);
`;

export const StyledSide = styled(StyledSquare)`
    transform: rotate(-45deg) skew(15deg, 15deg);
    transform-origin: bottom left;
`;

export const StyledSideTwo = styled(StyledSquare)`
    transform: rotate(-45deg) skew(15deg, 15deg);
    transform-origin: top left;
`;

export const StyledSquareOne = styled(StyledFaceTop)`
    background: #0039e6;
    z-index: 5;
    top: 52px;
    animation: ${ascendOne} 1s .5s 1 forwards;
`;

export const StyledSquareTwo = styled(StyledFaceTop)`
    background: #0039e6;
    top: 52px;
    z-index: 4;
    animation: ${ascendTwo} .8s .5s 1 forwards;
`;

export const StyledSquareThree = styled(StyledFaceTop)`
    background: #0039e6;
    top: 52px;
`;

export const StyledSquareFour = styled(StyledSide)`
    background: #0000ff;
    top: 52px;
    left: 22px;
    animation: ${morphOne} 0.6s .6s 1 forwards ease-in-out;
`

export const StyledSquareFive = styled(StyledSideTwo)`
    background: #002db3;
    top: 12.5px;
    left: 0px;
    opacity: 0;
    animation: ${morphTwo} 0.6s 1.1s 1 forwards ease-in-out;
`;
