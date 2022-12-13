import React, { memo } from "react";
import cardFilterImage from "../../assets/images/filterCards.jpg";

function CleanURLs() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#F4F9FA] md:py-10 max-md:py-4 px-2">
      <div className="flex flex-col md:gap-2 max-md:items-center md:px-[15%] max-md:px-4 ">
        <p className=" font-thin max-md:text-2xl md:text-3xl text-[#222]">
          <span className="text-purple">هر</span> فیلتری ایجاد کنید
        </p>
        <p className="font-bold text-[2.2rem]">
          با <span className="text-purple">هر</span> پارامتری!
        </p>
        <p className="md:text-lg max-md:text-base font-medium text-[#222] mt-4">
          برای <span className="text-purple">هر</span> نوع پست که دارای آرشیو است.
        </p>
      </div>
      <img src={cardFilterImage} alt="card filter" />
    </section>
  );
}

export default memo(CleanURLs);
