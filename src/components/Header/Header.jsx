import React, { memo, useState } from "react";
import Button from "../Utils/Button/Button";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuClass = openMenu ? "visible" : "hidden";
  return (
    <header className="header-container">
      <div className="header-menu flex justify-between max-sm:px-4 sm:px-[10%] md:px-[20%] text-prima relative h-16 ">
        <div className="flex justify-between w-full">
          <div className="sm:visible md:hidden flex items-center justify-center cursor-pointer">
            <button onClick={() => setOpenMenu((prev) => !prev)} className="material-symbols-outlined text-white hover:text-[#6efafb]">
              {openMenu ? "close" : "menu"}
            </button>
          </div>
          <div className={`flex justify-center max-sm:items-start max-md:pb-2 max-md:w-full max-md:bg-[#333333] max-md:opacity-[0.8] sm:pr-[6.5rem] max-sm:pr-12 sm:items-start gap-6 md:h-full sm:h-auto max-sm:h-auto items-center max-md:${openMenuClass} md:flex max-sm:flex-col sm:flex-col md:flex-row sm:absolute max-sm:absolute max-sm:top-[100%] max-sm:right-[0%] sm:top-[100%] sm:right-[0] md:top-[0%] `}>
            <li className="h-full text-[1.125rem] animation-fade font-bold flex items-center">پشتیبانی</li>
            <li className="h-full text-[1.125rem] animation-fade font-bold flex items-center">مستندات</li>
            <HeaderDropDownMenu />
          </div>
        </div>
        <Button title="خرید نسخه pro" />
      </div>
    </header>
  );
}

export default memo(Header);
