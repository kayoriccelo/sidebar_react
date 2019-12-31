import styled from 'styled-components';


export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    transition: all .60s ease;
    ${props => props.openDrawer ? 
    `
        width: 280px;

    ` : `
        overflow-x: hidden;
        width: 60px;
        &:hover: {
            width: 280px;
            position: absolute;
        }
    `}
`;