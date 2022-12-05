import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex flex-wrap justify-between w-full">
      <div className="md:w-[49%] max-md:w-full pr-12 bg-red-400">
        <img className="h-3/4" src={taxonomyImage} alt="taxonomy" />
      </div>
      <div className="md:w-[49%] max-md:w-full bg-yellow-300">
      <img className="h-3/4" src={taxonomyImage} alt="taxonomy" />
      </div>
    </section>
  );
}

export default memo(TaxonomySection);
