import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex justify-between flex-nowrap gap-4 w-full px-4 max-md:flex-col">
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center bg-yellow-300 md:pt-20">
        <div className="flex flex-col w-full gap-4 max-lg:px-4 lg:px-[10%]">
        <p className="font-bold max-lg:text-xl lg:text-3xl self-center break-keep">فیلترها بر اساس طبقه بندی</p>
        <p className="font-bold max-lg:text-xl lg:text-3xl max-lg:self-center lg:self-end lg:ml-[10%]">و فیلدهای سفارشی</p>
        </div>
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center md:justify-start">
        <img className="max-lg:h-full lg:h-3/4" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
