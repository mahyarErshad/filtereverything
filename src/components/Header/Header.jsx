import React, { memo, useState } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-container">
      <ul className="header-menu flex justify-between max-sm:px-4 sm:px-[10%] md:px-[20%] text-prima relative ">
        <div className="sm:visible md:hidden flex items-center justify-center cursor-pointer">
          <button onClick={() => setOpenMenu((prev) => !prev)} class="material-symbols-outlined text-white hover:text-[#6efafb]">
            {openMenu ? "close" : "menu" }
          </button>
        </div>
        <div className={`flex justify-center gap-6 h-full items-center max-sm:${openMenu ? "flex" : "hidden"} sm:${openMenu ? "flex" : "hidden"} md:flex max-sm:flex-col sm:flex-col md:flex-row sm:absolute max-sm:absolute max-sm:top-[140%] max-sm:right-[0%] sm:top-[140%] sm:right-[8%] md:top-[0%] `}>
          <li className="h-full flex items-center">پشتیبانی</li>
          <li className="h-full flex items-center">مستندات</li>
          <HeaderDropDownMenu />
        </div>
      </ul>
    </header>
  );
}

export default memo(Header);
