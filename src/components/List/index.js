import React from 'react';

import { StyledRoot } from './styled';


export default function List(props) {
    return (
        <StyledRoot>
            {props.children}
        </StyledRoot>
    );
};
