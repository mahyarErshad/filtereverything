import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex justify-between flex-nowrap gap-4 w-full px-4 max-md:flex-col">
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center bg-yellow-300">
        <p className="font-bold text-4xl">فیلترها بر اساس طبقه بندی</p>
        <p className="font-bold text-4xl">و فیلدهای سفارشی</p>
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center md:justify-start">
        <img className="max-lg:h-full lg:h-3/4" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
