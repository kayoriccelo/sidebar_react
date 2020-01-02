import styled from 'styled-components';


export const StyledGroup = styled.div`
    transition: all 0.80s ease-in-out;
`;

export const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.40s ease-in-out;    
    outline: 0;
    overflow: hidden;
    cursor: pointer;
    box-sizing: none;
    border-radius: 4px;
    border-width: 0px;
    color: rgba(103, 103, 103, 0.90);
    background-color: inherit;
    width: calc(100% - 4px);
    padding: 8px 6.5px;
    ${props => props.isSubMenu && 'padding-left: 12px;'}
    text-align: left;
    font-size: 12px;
    white-space: nowrap;
    &:hover {
        ${props => !props.isSubMenu ? 'padding-left: 12px' : 'padding-left: 16px'};
        border-right: 3px solid #8c8c8c;
        background-color: #f2f2f2;
    }
    &:focus {
        border-right: 3px solid #8c8c8c;
        background-color: #f2f2f2;
        font-weight: bold;       
    }
`;

export const StyledIcon = styled.img`
    height: 20px;
    margin: 0px 20px 0px 5px;
`;

export const StyledArrow = styled.img`
    height: 20px;
    margin: 0px 0px 0px 72px;
    display: flex;
    justify-content: right;
`;
