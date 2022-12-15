import React from "react";

function FilterEverythingAlsoCards(props) {
  return (
    <div className="flex flex-col lg:gap-8 max-lg:gap-4 max-md:w-full md:w-[45%] lg:w-[30%]">
      <div className="flex items-end gap-3">
        <img className="max-w-[2.25rem]" src={props.icon} alt={props.title} />
        <h5 className="font-bold max-md:text-xl md:text-2xl">{props.title}</h5>
      </div>
      <p className="text-base">{props.children}</p>
    </div>
  );
}

export default FilterEverythingAlsoCards;
