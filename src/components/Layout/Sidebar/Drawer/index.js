import React from 'react';

import { StyledRoot } from './style/styled';


export default function Drawer(props) {
    return (
        <StyledRoot {...props}>
            {props.children}
        </StyledRoot>
    );
};
