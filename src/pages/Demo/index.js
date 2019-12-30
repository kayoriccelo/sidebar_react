import React, { useState } from 'react';

import { Sidebar, Header, Content } from '../../components';
import { StyledRoot, StyledMain } from './styled';


export default function Demo() {
    const [openDrawer, setOpenDrawer] = useState(true);

    // effect dimensions

    return (
        <StyledRoot>
            <Sidebar openDrawer={openDrawer} />

            <StyledMain openDrawer={openDrawer}>
                <Header
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                />

                {/* <Content /> */}
            </StyledMain>
        </StyledRoot>
    );
};
