import React from 'react';

import Logo from '../../../Logo';
import { StyledRoot, StyledTitle } from './styled'; 


export default function Head() {
    return (
        <StyledRoot>
            <Logo />

            <StyledTitle children="Sidebar" />
        </StyledRoot>
    );
};
