import React, { memo, useState } from "react";

function HeaderSubMenu({ title, data = [] }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="flex justify-start items-start flex-col p-4 w-max">
      <span className="drop-down-menu__item mb-2">{title}</span>
      {data.map((item) => {
        return (
          <li key={item} className="header-submenu">
            {item}
          </li>
        );
      })}
    </div>
  );
}

export default memo(HeaderSubMenu);
