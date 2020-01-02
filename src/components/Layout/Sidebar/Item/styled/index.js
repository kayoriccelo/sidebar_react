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
    position: relative;
    display: inline-block;
    transition: all 0.60s ease-in-out;    
    outline: 0;
    overflow: hidden;
    cursor: pointer;
    box-sizing: none;
    border-radius: 4px;
    border-width: 0px;
    color: rgba(103, 103, 103, 0.90);
    background-color: inherit;
    padding: 8px;
    ${props => props.isSubMenu && 'padding-left: 15px;'}
    margin: 0px 5px;
    text-align: left;
    font-size: 12px;
    &:hover {
        ${props => !props.isSubMenu ? 'padding-left: 20px' : 'padding-left: 25px'};
        border-right: 3px solid #8c8c8c;
        background-color: #f2f2f2;
    }
    &:focus {
        border-right: 3px solid rgba(103, 103, 103, 0.90);
        background-color: #f2f2f2;
        font-weight: bold;       
    }
`;
