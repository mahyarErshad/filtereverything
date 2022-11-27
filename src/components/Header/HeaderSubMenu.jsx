import React from 'react'

function HeaderSubMenu({title , data=[]}) {
  return (
    <div className="flex justify-start items-start flex-col p-4 w-max">
    <span className="drop-down-menu__item mb-2">{title}</span>
    {
        data.map((item)=>{
            return     <li key={data.text} className="header-submenu">{data.text}</li>
        })
    }

    <li className="header-submenu">مثال های سئو</li>
    <li className="header-submenu">لپتاپ</li>
    <li className="header-submenu">تلویزیون</li>
    <li className="header-submenu">مثال های جستجوی محصول</li>
  </div>
  )
}

export default HeaderSubMenu