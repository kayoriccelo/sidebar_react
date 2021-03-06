import React from 'react';

import Drawer from './Drawer';
import List from './List';
import Head from './Head';
import Item, { GroupItem } from './Item';
import ButtonMenu from './ButtonMenu';
import menus from '../../../routes/menus';


const Sidebar = props => {
    const renderItem = item => {
        return (
            !item.menus ?
                <Item {...item} isInicio={item.path === '/'} /> :
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

            <ButtonMenu
                open={props.openDrawer}
                onClick={() => props.setOpenDrawer(!props.openDrawer)}
            />
        </Drawer>
    );
};

export default Sidebar;
