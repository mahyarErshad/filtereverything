import React, { memo } from "react";
import clean_URLs from "../../assets/images/Clean_URLs.jpg";
import SEO_Rules from "../../assets/images/SEO_Rules.jpg";
import graph from "../../assets/images/graph.svg";
import VerticalContentLayout from "../Layout/VerticalContentLayout/VerticalContentLayout";

function CleanURLs() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#F4F9FA] md:pt-36 max-md:pt-8 px-2 max-md:pb-4 md: pb-8">
      <div className="flex flex-col md:gap-2 max-lg:items-center lg:px-[25%] max-md:px-4 mb-6">
        <p className="flex max-sm:flex-col items-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222] gap-3">
          URL های تمیز برای <span className="text-purple">/فیلتر/نتایج/صفحات</span>
        </p>
        <p className="md:text-lg max-md:text-base font-medium text-[#222] mt-4">این باعث می شود که آنها برای ایندکس شدن توسط موتورهای جستجو در دسترس باشند.</p>
      </div>
      <img className="max-lg:w-full lg:w-3/4 self-center mb-4" src={clean_URLs} alt="Clean_URLs" />
      <VerticalContentLayout image={SEO_Rules} alt="SEO rules">
        <p className="flex items-center max-lg:justify-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222] gap-3 md:mb-10 max-md:mb-2 whitespace-nowrap">
          ایجاد قوانین سئو برای<span className="text-purple">/آنها</span>
        </p>
        <p className="text-base text-[#676767] font-medium max-md:mb-4">باعث می شود که فیلترها برای ایندکس شدن توسط موتورهای جستجو در دسترس باشند.</p>
      </VerticalContentLayout>
      <img className="self-center max-w-[6rem] mt-4 md:mb-8 max-md:mb-4" src={graph} alt="graph" />
      <h5 className="self-center lg:text-4xl md:text-3xl max-md:text-2xl font-bold">
        بازدیدکنندگان <span className="text-purple">بیشتری</span> را از موتورهای جستجو دریافت کنید!
      </h5>
      <p className="md:text-lg max-md:text-base self-center font-medium text-[#222] mt-4">با کلمات کلیدی "کوتاه" و "دم بلند".</p>
    </section>
  );
}

export default memo(CleanURLs);
