import React, { memo } from "react";
import HeaderSubMenu from "./HeaderSubMenu";

function HeaderDropDownMenu() {

  return (
    <>
      <li className="relative z-10 text-base overflow-hidden hover:overflow-visible max-md:w-full cursor-pointer ease-linear duration-[200ms] text-center h-full text-white flex items-center px-[0.5rem] hover:text-primary]">
        <div className="flex justify-center items-center">
          <span className="text-[1.125rem] font-bold">مشاهده دمو ها</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <ul className="absolute md:right-[5%] max-md:pr-28 max-md:w-[150%] max-md:right-[-6.4375rem] max-md:top-[130%] md:top-[100%] drop-down-menu flex justify-start items-start flex-row max-md:flex-col max-md:overflow-auto">
          <div>
            <HeaderSubMenu title="فیلتر کردن پستها" data={["پوشاک زنانه", "مثال های سئو", "کامپیوتر", "لپتاپ", "مثال های جستجوی محصول"]} />
            <HeaderSubMenu title="مثال فیلترها" data={["قیمت", "حراج", "وزن", "لپتاپ", "قابل دانلود", "امتیاز محصول", "تعداد فروش", "نویسنده"]} />
          </div>
          <div>
            <HeaderSubMenu title="شخصی سازی" data={["پوشش تاریک و لودر AJAX", "AJAX غیرفعال است", "طرح رنگی"]} />
          </div>
        </ul>
      </li>
    </>
  );
}
export default memo(HeaderDropDownMenu);
