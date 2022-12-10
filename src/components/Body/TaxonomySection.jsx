import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex flex-nowrap w-full px-4 lg:px-[10%] max-md:flex-col max-sm:mt-4">
      <div className="md:w-2/4 max-md:w-full flex flex-col max-lg:px-4 lg:pr-[8%] md:items-end justify-between md:pb-[7%] md:pt-[8%]">
        <div className="flex flex-col w-full gap-4 max-md:justify-center max-md:items-center md:items-end">
          <p className="font-bold max-lg:text-xl lg:text-3xl break-keep">فیلترهای بر اساس طبقه بندی</p>
          <p className="font-bold max-lg:text-xl lg:text-3xl">و فیلدهای سفارشی</p>
          <p className="text-base text-[#676767] font-medium mt-8">این ویژگی 99 درصد نیازهای فیلترینگ احتمالی را پوشش می دهد.</p>
        </div>
        <span className="max-sm:hidden bg-purple rounded-sm p-3 w-fit text-white max-md:mt-4">پس شما میتوانید</span>
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center p-[5%]">
        <img className="h-auto max-w-full" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
