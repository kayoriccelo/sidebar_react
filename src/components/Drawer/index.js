import React from 'react';

import { StyledRoot } from './styled';


export default function Drawer(props) {
    return (
        <StyledRoot {...props}>
            {props.children}
        </StyledRoot>
    );
};
