import React, { memo } from "react";

function Header() {
  return (
    <header className="header-container">
      <ul className="header-menu">
        <li>پشتیبانی</li>
        <li>مستندات</li>
        <li className="flex items-center justify-center">
          <span class="material-symbols-outlined">expand_more</span>
          مشاهده دمو ها
        </li>
      </ul>
    </header>
  );
}

export default memo(Header);
