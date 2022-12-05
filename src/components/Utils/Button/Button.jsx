import React from "react";

function Button(props) {
  const { title } = props;
  const backgroundColor = props.backgroundColor || "bg-primary"
  const textColor = props.textColor || "text-[#323232]"
  return (
    <button className={`${backgroundColor} ${textColor} px-4 rounded-md text-ellipsis whitespace-nowrap transition-all ${props.className}`} onClick={props.onClick}>
      {title}
    </button>
  );
}

export default Button;
