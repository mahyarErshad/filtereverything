import React from "react";
import FilterCards from "./FilterCards";
import TaxonomySection from "./TaxonomySection";
import FilterSets from "./FilterSets";

function MainBody() {
  return (
    <>
      <TaxonomySection />
      <FilterCards />
      <FilterSets />
    </>
  );
}

export default MainBody;
