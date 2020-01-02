import React from 'react';

import { StyledButtonMenu, StyledMenuClose, StyledMenuOpen } from './styled';


export default function ButtonMenu(props) {
    return (
        <StyledButtonMenu onClick={props.onClick}>
            {props.open ?
                <StyledMenuClose src={require('../../../../assets/images/menu_open-24px.svg')}/> :
                <StyledMenuOpen  src={require('../../../../assets/images/menu-24px.svg')}/>
            }
        </StyledButtonMenu>
    );
};
