import React from "react";
import FilterCards from "./FilterCards";
import TaxonomySection from "./TaxonomySection";
import FilterSets from "./FilterSets";
import FilterRelevant from "./FilterRelevant";
import MobileView from "./MobileView";

function MainBody() {
  return (
    <>
      <TaxonomySection />
      <FilterCards />
      <FilterSets />
      <FilterRelevant />
      <MobileView />
    </>
  );
}

export default MainBody;
