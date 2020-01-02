import React from 'react';

import { StyledRoot, StyledList } from './styled';


export default function List(props) {
    return (
        <StyledRoot>
            <StyledList>
                {props.children}
            </StyledList>
        </StyledRoot>
    );
};
