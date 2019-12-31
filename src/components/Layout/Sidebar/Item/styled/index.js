import styled from 'styled-components';


export const StyledButton = styled.button`
    padding: 8px;
    margin: 0px 8px;
    border-radius: 2px;
    text-align: left;
    font-size: 12px;
    color: rgba(0, 110, 156, 0.69);
    background-color: inherit
    cursor: pointer;
    transition: all .40s ease;
    box-sizing: none;
    border-width: 0px;
    ${props => props.isSubMenu && 'padding-left: 15px;'}
    &:hover {
        border-right: 3px solid rgba(0, 110, 156, 0.69);
        ${props => !props.isSubMenu ? 'padding-left: 20px' : 'padding-left: 25px'};
    }, 
    &:focus {
        outline: none;
    },
`;