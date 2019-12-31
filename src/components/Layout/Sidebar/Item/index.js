import React from 'react';

import { StyledButton } from './styled';


export default function Item(props) {
    const handleClick = () => {
    }
    
    return (
        <StyledButton isSubMenu={props.isSubMenu} onClick={handleClick}>
            {`${props.icon} ${props.title}`}
        </StyledButton>
    );
};

export const GroupItem = props => {
    const handleClick = () => {
    }

    return (
        <StyledButton isGroup onClick={handleClick}>
            {`${props.icon} ${props.title}`}
        </StyledButton>
    );
}
