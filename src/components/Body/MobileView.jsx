import React, { memo } from "react";
import mobileView from "../../assets/images/mobileView.jpg";

function MobileView() {
  return (
    <section className="flex flex-nowrap w-full px-4 lg:px-[10%] max-md:flex-col max-sm:mt-4">
      <div className="md:w-2/4 max-md:w-full flex flex-col max-lg:px-4 lg:pr-[8%] md:items-end justify-between md:pb-[7%] md:pt-[8%]">
        <div className="flex flex-col w-full gap-4 max-md:justify-center max-md:items-center md:items-end">
          <p className="font-bold max-lg:text-xl lg:text-3xl break-keep">
            مجموعه فیلترهای <span className="text-purple">شخصی</span> ایجاد کنید
          </p>
          <p className="text-base text-[#676767] font-medium mt-8">برای هر صفحه سایت وردپرس شما.</p>
        </div>
        <span className="max-sm:hidden bg-purple rounded-sm p-3 w-fit text-white max-md:mt-4">همچنین</span>
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center p-[5%]">
        <img className="h-auto max-w-full" src={mobileView} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(MobileView);
