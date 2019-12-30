import React from 'react';

import { StyledButton } from './styled';


export default function Button(props) {
    return (
        <StyledButton onClick={props.onClick}>
            {props.label}
        </StyledButton>
    );
};
