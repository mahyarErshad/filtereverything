import React from "react";
import FilterCards from "./FilterCards";
import TaxonomySection from "./TaxonomySection";
import FilterSets from "./FilterSets";
import FilterRelevant from "./FilterRelevant";
import MobileView from "./MobileView";
import CleanURLs from "./CleanURLs";
import FilterEverythingAlso from "./FilterEverythingAlso";
import ComparisonTable from "./ComparisonTable";
import MakeVisitorsHappy from "./MakeVisitorsHappy";
import GoToTopButton from "../Utils/Button/GoToTopButton";

function MainBody() {
  return (
    <>
      <GoToTopButton />
      <TaxonomySection />
      <FilterCards />
      <FilterSets />
      <FilterRelevant />
      <MobileView />
      <CleanURLs />
      <FilterEverythingAlso />
      <ComparisonTable />
      <MakeVisitorsHappy />
    </>
  );
}

export default MainBody;
