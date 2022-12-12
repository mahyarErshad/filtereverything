import React, { memo } from "react";
import filterRelevant from "../../assets/images/filterRelevant.jpg";

function FilterRelevant() {
  return (
    <section className="flex flex-col md:gap-14 max-md:gap-6 w-full bg-[#445DC4] md:py-8 max-md:py-4 px-2 items-center">
      <p className="md:text-4xl max-md:text-2xl font-bold text-white mt-4">فیلتر محصولات، پست ها فقط بر اساس پارامترهای مرتبط!</p>
      <img src={filterRelevant} alt="card filter" />
    </section>
  );
}

export default memo(FilterRelevant);
