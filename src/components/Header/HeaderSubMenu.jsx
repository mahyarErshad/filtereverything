import React from 'react'

function HeaderSubMenu() {
  return (
    <div className="flex justify-start items-start flex-col p-4 w-max">
    <span className="drop-down-menu__item mb-2">فیلتر کردن پست ها</span>
    <li className="header-submenu">پوشاک زنانه</li>
    <li className="header-submenu">مثال های سئو</li>
    <li className="header-submenu">لپتاپ</li>
    <li className="header-submenu">تلویزیون</li>
    <li className="header-submenu">مثال های جستجوی محصول</li>
  </div>
  )
}

export default HeaderSubMenu