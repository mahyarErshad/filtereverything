import React, { memo } from "react";
import filterRelevant from "../../assets/images/filterRelevant.jpg";

function FilterRelevant() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#445DC4] md:py-8 max-md:py-4 px-2">
      <div className="flex flex-col md:gap-2 max-md:items-center md:px-[15%] max-md:px-4 ">
        <p className=" font-thin max-md:text-2xl md:text-3xl text-white">هر فیلتری ایجاد کنید</p>
        <p className="font-bold text-[2.2rem] text-white">با هر پارامتری!</p>
        <p className="md:text-lg max-md:text-base font-medium text-white mt-4">برای هر نوع پست که دارای آرشیو است.</p>
      </div>
      <img src={filterRelevant} alt="card filter" />
    </section>
  );
}

export default memo(FilterRelevant);
