import React from "react";

const NavItem = ({ index, closeSideMenu, item, showMenu, navbarState }) => {
  return (
    <div
      key={index}
      onClick={closeSideMenu}
      className={`md:text-base text-sm mx-4 text-white hover:text-theme my-auto ${
        navbarState === item.itemId ? "text-theme" : "text-white"
      } py-3 md:py-0`}
    >
      <a href={item.itemRef}>{item.itemName}</a>
    </div>
  );
};

export default NavItem;
