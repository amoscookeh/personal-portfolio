import React, { useState } from "react";

const NavItem = ({ index, closeSideMenu, item, showMenu }) => {

    return (<div key={index} onClick={closeSideMenu} className={`mx-4 text-white hover:text-theme ${index == 0 ? "text-theme" : "text-white"} ${showMenu ? "" : "text-transparent"} py-3 md:py-0`}>
        <a href={item.itemRef} >
            {item.itemName}
        </a>
    </div>);
}

export default NavItem;