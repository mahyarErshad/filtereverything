export default function HeaderDropDownMenu() {
  return (
    <>
      <li className="flex items-center justify-center">
        <span className="material-symbols-outlined">expand_more</span>
        مشاهده دمو ها
      </li>

      <div className="flex justify-between items-center flex-col">
        <ul>
          <li className="header-submenu">پوشاک زنانه</li>
          <li className="header-submenu">مثال های سئو</li>
          <li className="header-submenu">لپتاپ</li>
          <li className="header-submenu">تلویزیون</li>
          <li className="header-submenu">مثال های جستجوی محصول</li>
        </ul>
        <div>فیلتر کردن پست ها</div>
        <div>مثال فیلترها</div>
        <div>شخصی سازی</div>
      </div>
    </>
  );
}
