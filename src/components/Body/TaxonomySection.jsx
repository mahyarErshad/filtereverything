import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex flex-nowrap w-full px-4 lg:px-[10%] max-md:flex-col max-sm:mt-4">
      <div className="md:w-2/4 max-md:w-full flex flex-col max-lg:px-4 lg:pr-[8%] md:items-end justify-between max-md:py-4 md:pb-[7%] md:pt-[8%]">
        <div className="flex flex-col w-full gap-4 max-md:justify-center max-md:items-center md:items-end">

        </div>
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center p-[5%]">
        <img className="h-auto max-w-full" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
