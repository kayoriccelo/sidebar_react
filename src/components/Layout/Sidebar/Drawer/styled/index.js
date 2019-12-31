import styled from 'styled-components';


export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    box-shadow: 4px 0px 8px -8px rgba(0,0,0,0.75);!important;
    height: 100vh;
    transition: all .60s ease;

    ${props => props.openDrawer ? 
    `
        position: relative;
        width: 280px;
        border-right: none;
    ` : `
        overflow-x: hidden;
        width: 60px;
        &:hover: {
            width: 280px;
            position: absolute;
        }
    `}
`;