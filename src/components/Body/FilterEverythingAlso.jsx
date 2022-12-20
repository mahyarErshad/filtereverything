import React from "react";
import FilterEverythingAlsoData from "../../lib/FilterEverythingAlsoData";
import FilterEverythingAlsoCards from "../Utils/FilterEverythingAlsoCards/FilterEverythingAlsoCards";

function FilterEverythingAlso() {
  
  return (
    <section className="flex flex-col gap-4 w-full bg-white md:pt-36 max-md:pt-8 px-2 max-md:pb-4 md: pb-52">
      <div className="flex flex-col md:gap-2 max-lg:items-center lg:px-[25%] max-md:px-4 mb-6">
        <h5 className="lg:text-4xl md:text-3xl max-md:text-2xl font-bold">
          غول فیلتر <span className="text-purple">همچنین</span>
        </h5>
      </div>
      <div className="max-md:mt-8 md:mt-12 lg:mt-20 flex flex-wrap w-full justify-center lg:px-[10%] md:px-8 max-md:px-4 gap-8">
        {FilterEverythingAlsoData.map((item) => {
          return (
            <FilterEverythingAlsoCards key={item.id} icon={item.icon} title={item.title}>
              {item.description}
            </FilterEverythingAlsoCards>
          );
        })}
      </div>
    </section>
  );
}

export default FilterEverythingAlso;
