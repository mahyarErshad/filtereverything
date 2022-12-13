import React, { memo } from "react";
import cardFilterImage from "../../assets/images/filterCards.jpg";

function CleanURLs() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#F4F9FA] md:py-36 max-md:py-4 px-2">
      <div className="flex flex-col md:gap-2 max-md:items-center md:px-[25%] max-md:px-4 ">
        <p className="flex items-center font-bold max-sm:text-xl max-md:text-2xl md:text-3xl text-[#222]">
          URL های تمیز برای <span className="text-[#445dc8]">/فیلتر/نتایج/صفحات</span>
        </p>
        <p className="md:text-lg max-md:text-base font-medium text-[#222] mt-4">
          <p>این باعث می شود که آنها برای ایندکس شدن توسط موتورهای جستجو در دسترس باشند.</p>
        </p>
      </div>
      <img src={cardFilterImage} alt="card filter" />
    </section>
  );
}

export default memo(CleanURLs);
