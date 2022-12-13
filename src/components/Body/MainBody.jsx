import React from "react";
import FilterCards from "./FilterCards";
import TaxonomySection from "./TaxonomySection";
import FilterSets from "./FilterSets";
import FilterRelevant from "./FilterRelevant";
import MobileView from "./MobileView";
import CleanURLs from "./CleanURLs";

function MainBody() {
  return (
    <>
      <TaxonomySection />
      <FilterCards />
      <FilterSets />
      <FilterRelevant />
      <MobileView />
      <CleanURLs />
    </>
  );
}

export default MainBody;
