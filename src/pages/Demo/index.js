import React from 'react';

import { Sidebar, Header, Content } from '../../components';
import { StyledRoot, StyledMain } from './styled';


export default function Demo() {

    // effect dimensions

    return (
        <StyledRoot>
            <Sidebar />

            <StyledMain>
                <Header />

                <Content />
            </StyledMain>
        </StyledRoot>
    );
};
