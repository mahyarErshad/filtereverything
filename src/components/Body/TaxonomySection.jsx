import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";
import VerticalContentLayout from "../Layout/VerticalContentLayout/VerticalContentLayout";

function TaxonomySection() {
  return (
    <>
      <VerticalContentLayout image={taxonomyImage} alt="taxonomy" >
        <p className="font-bold max-lg:text-xl lg:text-3xl break-keep self-center">فیلترهای بر اساس طبقه بندی</p>
        <p className="font-bold max-lg:text-xl lg:text-3xl">و فیلدهای سفارشی</p>
        <p className="text-base text-[#676767] font-medium mt-8">این ویژگی 99 درصد نیازهای فیلترینگ احتمالی را پوشش می دهد.</p>
      </VerticalContentLayout>
    </>
  );
}

export default memo(TaxonomySection);
