import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex justify-between flex-nowrap gap-4 w-full px-4 max-md:flex-col-reverse">
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center md:justify-end">
        <img className="h-3/4" src={taxonomyImage} alt="taxonomy" />
      </div>
      <div className="md:w-2/4 max-md:w-full flex max-md:justify-center bg-yellow-300">
      <img className="h-3/4" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
