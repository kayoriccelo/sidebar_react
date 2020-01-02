import React from 'react';

import Drawer from './Drawer';
import List from './List';
import Head from './Head';
import Item, { GroupItem } from './Item';
import Arrow from './Arrow';
import menus from '../../../routes/menus';


const Sidebar = props => {
    const renderItem = item => {
        return (
            !item.menus ?
                <Item {...item} /> :
                <>
                    <GroupItem {...item}>
                        {item.menus.map(subMenuItem => <Item isSubMenu {...subMenuItem} />)}
                    </GroupItem>
                </>
        );
    };

    return (
        <Drawer {...props}>
            <Head />

            <List>
                {menus.map(menuItem => renderItem(menuItem))}
            </List>

            <Arrow
                label={props.openDrawer ? "<" : '>'}
                onClick={() => props.setOpenDrawer(!props.openDrawer)}
            />
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

export default Sidebar;

export {
    Sidebar,
    SidebarMobile
};
