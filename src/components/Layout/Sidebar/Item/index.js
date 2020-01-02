import React, { useState } from 'react';

import { StyledButton, StyledIcon, StyledArrow, StyledGroup } from './styled';


const Item = ({ iconName, title, isSubMenu, handleClick }) => {

    return (
        <StyledButton isSubMenu={isSubMenu} onClick={handleClick}>
            {iconName && <StyledIcon alt={title} src={require(`../../../../assets/images/${iconName}`)} />} {title}
        </StyledButton>
    );
};

const GroupItem = ({ iconName, title, children }) => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => setOpen(!open);

    return (
        <>
            <StyledButton isGroup onClick={handleClick}>
                {iconName && <StyledIcon alt={title} src={require(`../../../../assets/images/${iconName}`)} />}
            
                {title}
            
                <StyledArrow alt={title} src={require(`../../../../assets/images/${open ? 'arrow_drop_up-24px.svg' : 'arrow_drop_down-24px.svg'}`)} />
            </StyledButton>
            <StyledGroup>
                {open && children}
            </StyledGroup>
        </>
    );
};


export default Item;

export {
    Item,
    GroupItem
};
