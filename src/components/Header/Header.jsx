import React, { memo } from "react";

function Header() {
  return <header className="header-container">
    <ul className="header-menu">
        <li>پشتیبانی</li>
        <li>مستندات</li>
        <li>مشاهده دمو ها</li>
    </ul>
  </header>;
}

export default memo(Header);
