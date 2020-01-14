import React, { useState } from 'react';

import { Sidebar, Content } from '../../components';
import { StyledRoot } from './style/styled';


export default function Demo() {
    const [openDrawer, setOpenDrawer] = useState(true);

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
