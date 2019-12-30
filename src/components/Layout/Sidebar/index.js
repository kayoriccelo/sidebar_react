import React from 'react';

import Drawer from './Drawer';
import List from './List';


const Sidebar = props => {
    return (
        <Drawer {...props}>
            {/* <List>
                
            </List> */}
        </Drawer>
    );
};

const SidebarMobile = props => {
    return (
        <>
            Sidebar Modile!!!
        </>
    );
};

export {
    Sidebar,
    SidebarMobile
};
