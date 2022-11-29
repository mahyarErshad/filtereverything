import React, { memo, useState } from "react";

function HeaderSubMenu({ title, data = [] }) {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuClass = showMenu ? "visible" : "hidden";
  const textColor = showMenu ? "text-[#6efafb]" : "text-white";
  return (
    <div className="flex justify-start items-start flex-col p-4 w-max">
      <span onClick={() => setShowMenu((prev) => !prev)} className={`drop-down-menu__item mb-2 flex items-center cursor-pointer ${textColor}`}>
        {title}
        <span className="material-symbols-outlined max-md:visible md:hidden">expand_more</span>
      </span>
      {data.map((item) => {
        return (
          <li key={item} className={`header-submenu max-md:${showMenuClass}`}>
            {item}
          </li>
        );
      })}
    </div>
  );
}

export default memo(HeaderSubMenu);
