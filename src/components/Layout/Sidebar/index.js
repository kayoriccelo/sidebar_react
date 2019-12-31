import React from 'react';

import Button from '../../Button';
import Drawer from './Drawer';
import List from './List';
import Item, { GroupItem } from './Item';
import menus from '../../../routes/menus';


const Sidebar = props => {
    const renderItem = item => {
        return (
            !item.menus ?
                <Item {...item} /> :
                <>
                    <GroupItem {...item} />
                    {item.menus.map(subMenuItem => <Item isSubMenu {...subMenuItem} />)}
                </>
        )
    }

    return (
        <Drawer {...props}>
            <List>
                {menus.map(menuItem => renderItem(menuItem))}
            </List>
            <Button
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

export {
    Sidebar,
    SidebarMobile
};
