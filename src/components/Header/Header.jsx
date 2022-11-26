import React, { memo } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  return (
    <header className="header-container">
      <ul className="header-menu">
        <li>پشتیبانی</li>
        <li>مستندات</li>
        <HeaderDropDownMenu />
      </ul>
    </header>
  );
}

export default memo(Header);
