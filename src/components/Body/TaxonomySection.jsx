import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex flex-nowrap gap-4 w-full px-4 max-md:flex-col max-sm:mt-4">
      <div className="md:w-2/4 max-md:w-full flex bg-yellow-300 flex-col max-lg:px-4 lg:px-[8%] justify-between md:pb-[6%] md:pt-[8%]">
        <div className="flex flex-col w-full gap-4 max-md:justify-center">
          <p className="font-bold max-lg:text-xl lg:text-3xl self-center break-keep">فیلترها بر اساس طبقه بندی</p>
          <p className="font-bold max-lg:text-xl lg:text-3xl max-lg:self-center lg:self-end">و فیلدهای سفارشی</p>
          <p className="self-center text-base text-[#676767] font-medium mt-8">این ویژگی 99 درصد نیازهای فیلترینگ احتمالی را پوشش می دهد.</p>
        </div>
          <p className="max-sm:hidden">پس شما میتوانید</p>
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center p-[5%]">
        <img className="h-auto max-w-full" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
