import React, { memo } from "react";
import taxonomyImage from "../../assets/images/taxonomy.jpg";

function TaxonomySection() {
  return (
    <section className="flex gap-6 flex-wrap w-full">
      <div className="md:w-2/4 max-md:w-full">
        <img src={taxonomyImage} alt="taxonomy" />
      </div>
      <div className="md:w-2/4 max-md:w-full"></div>
    </section>
  );
}

export default memo(TaxonomySection);
