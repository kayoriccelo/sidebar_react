import React from 'react';

import { StyledButton } from './styled';


export default function Item(props) {
    const handleClick = () => {
        alert(`Rota: ${props.path}`)
    }
    return (
        <StyledButton isSubMenu={props.isSubMenu} onClick={handleClick}>
            {`${props.icon} ${props.title}`}
        </StyledButton>
    );
};

export const GroupItem = props => {
    const handleClick = () => {
        alert(`Group`)
    }

    return (
        <StyledButton isGroup onClick={handleClick}>
            {`${props.icon} ${props.title}`}
        </StyledButton>
    );
}
