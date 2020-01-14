import styled from 'styled-components';


export const StyledGroup = styled.div`
    transition: all 0.40s ease;
    display: ${props => props.open ? 'block' : 'none'};
`;

export const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.50s ease;    
    outline: 0;
    overflow: hidden;
    cursor: pointer;
    box-sizing: none;
    border-radius: 4px;
    border-width: 0px;
    color: rgba(103, 103, 103, 0.90);
    background-color: inherit;
    width: 100%;
    padding: 8px 0px 8px 9px;
    ${props => props.isSubMenu && 'padding-left: 12px;'}
    text-align: left;
    font-size: 12px;
    white-space: nowrap;
    ${props => props.isInicio && `
        background: #55C39E!important;
        color: white;
        &:hover {
            color: white!important;
            border-right: none!important;
        }
        &:focus {
            border-right: none!important;
            background-color: #b5d3e3;
            color: white!important;
        }
    `}
    &:hover {
        ${props => !props.isSubMenu ? 'padding-left: 12px' : 'padding-left: 16px'};
        border-right: 3px solid #666666;
        color: #666666;
    }
    &:focus {
        border-right: 3px solid #666666;
        background-color: #ddd;
        font-weight: bold; 
        color: #666666;
    }
`;

export const StyledIcon = styled.img`
    height: 20px;
    margin: 0px 20px 0px 5px;
    
    ${props => props.isInicio ? `
        filter: invert(100%);
    ` : `
        filter: invert(45%);
    `}
`;

export const StyledArrow = styled.img`
    height: 20px;
    margin: 0px 0px 0px 72px;
    display: flex;
    justify-content: right;
`;
