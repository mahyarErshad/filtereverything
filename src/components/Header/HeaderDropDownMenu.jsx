export default function HeaderDropDownMenu() {
  return (
    <>
      <li className="relative z-10 text-base overflow-hidden hover:overflow-visible cursor-pointer ease-linear duration-[200ms] text-center h-full text-white flex items-start px-[0.5rem] hover:text-primary]">
        <div className="flex justify-center items-center">
          <span className="material-symbols-outlined">expand_more</span>
          <span>مشاهده دمو ها</span>
        </div>
        <ul className="absolute right-[0] top-[100%] drop-down-menu flex justify-start items-start flex-col">
          <div className="drop-down-menu__item">
            فیلتر کردن پست ها
            <li className="header-submenu">پوشاک زنانه</li>
            <li className="header-submenu">مثال های سئو</li>
            <li className="header-submenu">لپتاپ</li>
            <li className="header-submenu">تلویزیون</li>
            <li className="header-submenu">مثال های جستجوی محصول</li>
          </div>
          <div className="drop-down-menu__item">مثال فیلترها</div>
          <div className="drop-down-menu__item">شخصی سازی</div>
        </ul>
      </li>
    </>
  );
}
