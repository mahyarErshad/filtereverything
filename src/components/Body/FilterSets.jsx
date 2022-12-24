import React, { memo } from "react";
import filterSetsImage from "../../assets/images/filter-sets.jpg";
import VerticalContentLayout from "../Layout/VerticalContentLayout/VerticalContentLayout";

function FilterSets() {
  return (
    <>
      <VerticalContentLayout>
        <p className="font-bold max-lg:text-xl lg:text-3xl break-keep">
          مجموعه فیلترهای <span className="text-purple">شخصی</span> ایجاد کنید
        </p>
        <p className="text-base text-[#676767] font-medium mt-8">برای هر صفحه سایت وردپرس شما.</p>
      </VerticalContentLayout>
    </>
  );
}

export default memo(FilterSets);
