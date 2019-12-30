import React from 'react';

import Button from '../../Button';
import { StyledRoot } from './styled';


export default function Header(props) {
    return (
        <StyledRoot>
            <Button
                label={props.openDrawer ? "Close" : 'Open'}
                onClick={() => props.setOpenDrawer(!props.openDrawer)}
            />
        </StyledRoot>
    );
};
