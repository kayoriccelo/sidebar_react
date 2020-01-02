import styled from 'styled-components';

import { StyledRoot as StyledList } from '../../List/styled';


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
        &:hover ${StyledList} {
            width: 228px;
            min-width: 60px;
            overflow-x: auto;
        }
        &:hover {
            width: 280px;
        }
    `}
`;