import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";
import VerticalContentLayout from "../Layout/VerticalContentLayout/VerticalContentLayout";

function TaxonomySection() {
  return (
    <>
      <VerticalContentLayout image={taxonomyImage} alt="taxonomy">
        <p className="font-bold max-lg:text-xl lg:text-3xl whitespace-nowrap">
          فیلترهای بر اساس <span className="text-purple">طبقه بندی</span>
        </p>
        <p className="font-bold max-lg:text-xl lg:text-3xl">و <span className="text-purple">فیلدهای سفارشی</span></p>
        <p className="text-base text-[#676767] font-medium mt-8">این ویژگی 99 درصد نیازهای فیلترینگ احتمالی را پوشش می دهد.</p>
      </VerticalContentLayout>
    </>
  );
}

export default memo(TaxonomySection);
