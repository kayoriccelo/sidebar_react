import styled from 'styled-components';


export const StyledButtonMenu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    margin: 8px auto;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    color: #8c8c8c;
    cursor: pointer;
    transition: all .60s ease;
    background-color: inherit;
    &:hover {
        color: white;
        background: #ddd;
    }, 
    &:focus {
        outline: none;
    },    
    box-sizing: none;
    border-width: 0px;
`;

export const StyledMenuOpen = styled.img`
`;

export const StyledMenuClose = styled.img`
`;
