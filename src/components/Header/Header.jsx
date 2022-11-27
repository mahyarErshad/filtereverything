import React, { memo } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  return (
    <header className="header-container">
      <ul className="header-menu py-3 max-sm:px-4 md:px-[20%]">
        <li>پشتیبانی</li>
        <li>مستندات</li>
        <HeaderDropDownMenu />
      </ul>
    </header>
  );
}

export default memo(Header);
