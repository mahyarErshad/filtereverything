import React from "react";

function FilterEverythingAlsoCards(props) {
  return (
    <div className="flex flex-col lg:gap-8 max-lg:gap-4">
      <div>
        <img src={props.icon} alt={props.title} />
        <h5>{props.title}</h5>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default FilterEverythingAlsoCards;
