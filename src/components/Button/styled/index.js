import styled from 'styled-components';


export const StyledButton = styled.button`
    padding: 6px 12px;
    margin: auto;
    margin-bottom: 8px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 110, 156, 0.69);
    cursor: pointer;
    transition: all .60s ease;
    background-color: transparent;
    &:hover {
        color: white;
        background: rgba(0, 110, 156, 0.69) 
    }, 
    &:focus {
        outline: none;
    },    
    box-sizing: none;
    border-width: 0px;
`;