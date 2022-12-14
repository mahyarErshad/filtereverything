import React from "react";
import FilterEverythingAlsoCards from "../Utils/Button/FilterEverythingAlsoCards/FilterEverythingAlsoCards";
import puzzleIcon from "../../assets/images/FilterEverythingAlsoCards-icons/puzzle.svg"

function FilterEverythingAlso() {
  return (
    <section className="flex flex-col gap-4 w-full bg-white md:pt-36 max-md:pt-8 px-2 max-md:pb-4 md: pb-8">
      <div className="flex flex-col md:gap-2 max-lg:items-center lg:px-[25%] max-md:px-4 mb-6">
        <h5 className="lg:text-4xl md:text-3xl max-md:text-2xl font-bold">
          غول فیلتر <span className="text-purple">همچنین</span>
        </h5>
        <div>
            <FilterEverythingAlsoCards icon={puzzleIcon} />
        </div>
      </div>
    </section>
  );
}

export default FilterEverythingAlso;
