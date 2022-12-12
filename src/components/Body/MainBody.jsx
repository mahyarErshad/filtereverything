import React from "react";
import FilterCards from "./FilterCards";
import TaxonomySection from "./TaxonomySection";
import FilterSets from "./FilterSets";
import FilterRelevant from "./FilterRelevant";

function MainBody() {
  return (
    <>
      <TaxonomySection />
      <FilterCards />
      <FilterSets />
      <FilterRelevant />
    </>
  );
}

export default MainBody;
