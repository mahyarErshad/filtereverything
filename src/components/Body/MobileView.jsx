import React, { memo } from "react";
import mobileView from "../../assets/images/mobileView.jpg";
import VerticalContentLayout from "../Layout/VerticalContentLayout/VerticalContentLayout";

function MobileView() {
  return (
    <>
      <VerticalContentLayout>
        <p className="font-bold max-lg:text-xl lg:text-3xl whitespace-nowrap">آماده استفاده بر روی</p>
        <p className="font-bold max-lg:text-xl lg:text-3xl self-center">دستگاه های موبایل</p>
        <p className="text-base text-[#676767] font-medium mt-8">ویجت مخصوص زیرین به کاربران اجازه می دهد محصولات مورد نیازشان را تنها در چند کلیک پیدا کنند.</p>
      </VerticalContentLayout>
    </>
  );
}

export default memo(MobileView);
