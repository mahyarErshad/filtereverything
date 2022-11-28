import React, { memo } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  return (
    <header className="header-container">
      <ul className="header-menu flex justify-between max-sm:px-4 md:px-[20%]">
        <div className="flex justify-center gap-6 h-full items-center max-sm:hidden">
          <li className="h-full flex items-center">پشتیبانی</li>
          <li className="h-full flex items-center">مستندات</li>
          <HeaderDropDownMenu />
        </div>
        <div className="sm:visible md:hidden">
          <button>Hi</button>
        </div>
      </ul>
    </header>
  );
}

export default memo(Header);
