import styled from 'styled-components';


export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: ${props => props.openDrawer ? 'calc(100% - 281px)' : 'calc(100% - 61px)'};
    margin-left: ${props => props.openDrawer ? '0px' : '61px'};
    position: ${props => props.openDrawer ? 'relative' : 'absolute'};
`;
