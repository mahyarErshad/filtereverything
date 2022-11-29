import React, { memo, useState } from "react";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuClass = openMenu ? "flex" : "hidden";
  console.log(openMenuClass);
  return (
    <header className="header-container">
      <ul className="header-menu flex justify-between max-sm:px-4 sm:px-[10%] md:px-[20%] text-prima relative h-16 ">
        <div className="sm:visible md:hidden flex items-center justify-center cursor-pointer">
          <button onClick={() => setOpenMenu((prev) => !prev)} className="material-symbols-outlined text-white hover:text-[#6efafb]">
            {openMenu ? "close" : "menu"}
          </button>
        </div>
        <div className={`flex justify-center max-sm:items-start max-md:w-full max-md:bg-red-500 sm:pr-[6.5rem] max-sm:pr-12 sm:items-start gap-6 md:h-full sm:h-auto max-sm:h-auto items-center max-sm:${openMenuClass} sm:${openMenuClass} md:flex max-sm:flex-col sm:flex-col md:flex-row sm:absolute max-sm:absolute max-sm:top-[140%] max-sm:right-[0%] sm:top-[140%] sm:right-[0] md:top-[0%] `}>
          <li className="h-full flex items-center">پشتیبانی</li>
          <li className="h-full flex items-center">مستندات</li>
          <HeaderDropDownMenu />
        </div>
      </ul>
    </header>
  );
}

export default memo(Header);
