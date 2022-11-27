import React from 'react'

export default function HeaderDropDownMenu() {
  return (
    <>
      <li className="relative z-10 text-base overflow-hidden hover:overflow-visible cursor-pointer ease-linear duration-[200ms] text-center h-full text-white flex items-start px-[0.5rem] hover:text-primary]">
        <div className="flex justify-center items-center">
          <span>مشاهده دمو ها</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <ul className="absolute right-[5%] top-[100%] drop-down-menu flex justify-start items-start flex-col">

          <div className="drop-down-menu__item">مثال فیلترها</div>
          <div className="drop-down-menu__item">شخصی سازی</div>
        </ul>
      </li>
    </>
  );
}
