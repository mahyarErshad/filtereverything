import React, { memo } from "react";
import clean_URLs from "../../assets/images/Clean_URLs.jpg";
import SEO_Rules from "../../assets/images/SEO_Rules.jpg";

function CleanURLs() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#F4F9FA] md:py-36 max-md:py-8 px-2">
      <div className="flex flex-col md:gap-2 max-lg:items-center lg:px-[25%] max-md:px-4 mb-6">
        <p className="flex max-sm:flex-col items-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222] gap-3">
          URL های تمیز برای <span className="text-purple">/فیلتر/نتایج/صفحات</span>
        </p>
        <p className="md:text-lg max-md:text-base font-medium text-[#222] mt-4">
          <p>این باعث می شود که آنها برای ایندکس شدن توسط موتورهای جستجو در دسترس باشند.</p>
        </p>
      </div>
      <img className="max-lg:w-full lg:w-3/4 self-center lg:mb-32 max-lg:mb-8" src={clean_URLs} alt="Clean_URLs" />
      <p className="flex items-center max-lg:justify-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222] gap-3 md:mb-10 max-md:mb-2 lg:pr-[25%] max-md:pr-4">
        ایجاد قوانین سئو برای<span className="text-purple">/آنها</span>
      </p>
      <div className="flex flex-col md:gap-4 max-lg:items-center max-md:px-4 mb-6">
        <div className="flex flex-wrap justify-center w-full md:pl-[15%]">
          <div className="flex flex-col max-md:w-full md:w-2/4 gap-4 max-md:justify-center max-md:items-center md:items-end md:justify-between pl-4">
            <p className="text-base text-[#676767] font-medium max-md:mb-4 lg:pt-12">باعث می شود که فیلترها برای ایندکس شدن توسط موتورهای جستجو در دسترس باشند.</p>
            <span className="max-md:hidden bg-purple rounded-sm p-3 w-fit text-white max-md:mt-4">همچنین</span>
          </div>
          <div className="flex max-md:w-full md:w-2/4">
            <img src={SEO_Rules} alt="SEO_Rules" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CleanURLs);
