import styled, { keyframes } from 'styled-components';


let transforms = '';

[...Array(100)].map((_, i) => (
    transforms += `${i}% {
        transform: scaleX(${(i % 2) === 0 ? '1.011' : '0.90'});
        opacity: 0.35;
    }`
))

const keyframeButton = keyframes`
    ${transforms}
`;

export const StyledButton = styled.button`
    padding: 8px;
    margin: 0px 5px;
    border-radius: 4px;
    text-align: left;
    font-size: 12px;
    color: rgba(103, 103, 103, 0.90);
    background-color: inherit;
    cursor: pointer;
    box-sizing: none;
    border-width: 0px;
    outline: 0;
    ${props => props.isSubMenu && 'padding-left: 15px;'}
    &:hover {
        ${props => !props.isSubMenu ? 'padding-left: 20px' : 'padding-left: 25px'};
        border-right: 3px solid #8c8c8c;
        background-color: #f2f2f2;
    }
    &:focus {
        border-right: 3px solid rgba(103, 103, 103, 0.90);
        background-color: #ddd;
        font-weight: bold;
        &:before {
            animation: ${keyframeButton} 100s;
        }  
    }
    position: relative;
    display: inline-block;
    transition: all 0.4s ease-in-out;
    span[class^='ion'] {
        position: relative;
    }

`;
