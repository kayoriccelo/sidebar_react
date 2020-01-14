import styled from 'styled-components';

import { StyledRoot as List } from '../../List/style/styled';


export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    transition: all .60s ease;
    background: white;
    ${props => props.openDrawer ? 
    `
        width: 284px;
    ` : `
        overflow-x: hidden;
        width: 60px;
        &:hover ${List} {
            min-width: 60px;
            overflow-x: auto;
        }
        &:hover {
            width: 284px;
        }
    `}
`;