import styled from 'styled-components';


export const StyledArrow = styled.button`
    padding: 3px 8px;
    margin: auto;
    margin-bottom: 8px;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    color: #8c8c8c;
    cursor: pointer;
    transition: all .60s ease;
    background-color: inherit;
    &:hover {
        color: white;
        background: #8c8c8c;
    }, 
    &:focus {
        outline: none;
    },    
    box-sizing: none;
    border-width: 0px;
`;