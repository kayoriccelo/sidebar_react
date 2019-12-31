import React, { useState } from 'react';

import { Sidebar, Content } from '../../components';
import { StyledRoot } from './styled';


export default function Demo() {
    const [openDrawer, setOpenDrawer] = useState(true);

    // effect dimensions

    return (
        <StyledRoot>
            <Sidebar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <Content openDrawer={openDrawer} />
        </StyledRoot>
    );
};
