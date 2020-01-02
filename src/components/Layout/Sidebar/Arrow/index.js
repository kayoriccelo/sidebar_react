import React from 'react';

import { StyledArrow } from './styled';


export default function Arrow(props) {
    return (
        <StyledArrow onClick={props.onClick}>
            {props.label}
        </StyledArrow>
    );
};
