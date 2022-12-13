import React, { memo } from "react";
import clean_URLs from "../../assets/images/Clean_URLs.jpg";
import SEO_Rules from "../../assets/images/SEO_Rules.jpg";

function CleanURLs() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#F4F9FA] md:py-36 max-md:py-4 px-2">
      <div className="flex flex-col md:gap-2 max-lg:items-center lg:px-[25%] max-md:px-4 mb-6">
        <p className="flex items-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222] gap-3">
          URL های تمیز برای <span className="text-purple">/فیلتر/نتایج/صفحات</span>
        </p>
        <p className="md:text-lg max-md:text-base font-medium text-[#222] mt-4">
          <p>این باعث می شود که آنها برای ایندکس شدن توسط موتورهای جستجو در دسترس باشند.</p>
        </p>
      </div>
      <img className="max-lg:w-full lg:w-3/4 self-center md:mb-32 max-md:mb-6" src={clean_URLs} alt="Clean_URLs" />
      <div className="flex flex-col md:gap-4 max-lg:items-center lg:pr-[25%] lg:pl-[10%] max-md:px-4 mb-6">
        <p className="flex items-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222] gap-3 mb-10">
          ایجاد قوانین سئو برای<span className="text-purple">/آنها</span>
        </p>
        <div className="flex flex-wrap justify-center w-full">
          <div className="flex max-md:w-full md:w-2/4"></div>
          <div className="flex max-md:w-full md:w-2/4">
            <img src={SEO_Rules} alt="SEO_Rules" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CleanURLs);
