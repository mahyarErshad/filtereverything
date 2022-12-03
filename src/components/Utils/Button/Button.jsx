import React from "react";

function Button(props) {
  const { title } = props;
  const backgroundColor = props.backgroundColor || "bg-primary"
  return (
    <button className={`${backgroundColor} text-black py-2 px-4 rounded-md text-ellipsis whitespace-nowrap ${props.className}`} onClick={props.onClick}>
      {title}
    </button>
  );
}

export default Button;
