import React from "react";

function Button(props) {
  const { title } = props;
  return (
    <button className={`bg-primary text-black py-2 px-4 rounded-md text-ellipsis whitespace-nowrap ${props.className} hover:bg-[#1ecece]`} onClick={props.onClick}>
      {title}
    </button>
  );
}

export default Button;
