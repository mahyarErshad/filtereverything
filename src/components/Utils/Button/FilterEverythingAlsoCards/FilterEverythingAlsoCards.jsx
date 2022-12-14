import React from "react";

function FilterEverythingAlsoCards(props) {
  return (
    <div className="flex flex-col lg:gap-8 max-lg:gap-4">
      <div className="flex items-end gap-3">
        <img className="max-w-[2.25rem]" src={props.icon} alt={props.title} />
        <h5>{props.title}</h5>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default FilterEverythingAlsoCards;
