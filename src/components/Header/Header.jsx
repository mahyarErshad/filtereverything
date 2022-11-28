import React, { memo, useState } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-container">
      <ul className="header-menu flex justify-between max-sm:px-4 sm:px-[10%] md:px-[20%] text-prima">
        <div className={`flex justify-center gap-6 h-full items-center max-sm:${openMenu ? "flex" : "hidden"} sm:${openMenu ? "flex" : "hidden"} md:flex max-sm:flex-col sm:flex-col md:flex-row`}>
          <li className="h-full flex items-center">پشتیبانی</li>
          <li className="h-full flex items-center">مستندات</li>
          <HeaderDropDownMenu />
        </div>
        <div className="sm:visible md:hidden flex items-center justify-center cursor-pointer">
          <button onClick={() => setOpenMenu((prev) => !prev)} class="material-symbols-outlined text-white hover:text-slate-300">
            menu
          </button>
        </div>
      </ul>
    </header>
  );
}

export default memo(Header);
