import React, { memo } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  return (
    <header className="header-container">
      <ul className="header-menu flex justify-between max-sm:px-4 sm:px-[10%] md:px-[20%] text-prima">
        <div className="flex justify-center gap-6 h-full items-center max-sm:hidden sm:hidden md:flex">
          <li className="h-full flex items-center">پشتیبانی</li>
          <li className="h-full flex items-center">مستندات</li>
          <HeaderDropDownMenu />
        </div>
        <div className="sm:visible md:hidden flex items-center justify-center cursor-pointer">
          <button class="material-symbols-outlined text-white hover:text-slate-300">menu</button>
        </div>
      </ul>
    </header>
  );
}

export default memo(Header);
