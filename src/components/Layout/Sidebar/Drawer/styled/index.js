import styled from 'styled-components';


export const StyledRoot = styled.div`
    box-shadow: 4px 0px 8px -8px rgba(0,0,0,0.75);!important;
    white-space: nowrap;
    height: 100vh;
    
    ${props => props.openDrawer ? 
    `
        position: relative;
        width: 280px;
        border-right: none;
    ` : `
        overflow-x: hidden;
        transition: all .60s ease;
        width: 60px;
        &:hover: {
            width: 280px;
            position: absolute;
        }
    `}
`;