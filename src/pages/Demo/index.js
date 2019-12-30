import React, { useState } from 'react';

import { Sidebar, Header, Content } from '../../components';
import { StyledRoot, StyledMain } from './styled';


export default function Demo() {
    const [openDrawer, setOpenDrawer] = useState(true);

    // effect dimensions

    return (
        <StyledRoot>
            <Sidebar openDrawer={openDrawer}/>

            <StyledMain openDrawer={openDrawer}>
                <Header />

                {/* <Content /> */}
            </StyledMain>
        </StyledRoot>
    );
};
