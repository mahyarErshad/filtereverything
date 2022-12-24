import React from "react";

function Button(props) {
  const { title, href } = props;
  const backgroundColor = props.backgroundColor || "bg-primary";
  const textColor = props.textColor || "text-[#323232]";
  return (
    <a href={href} target="_blank" without rel="noreferrer" >
      <button className={`${backgroundColor} ${textColor} px-4 rounded-md text-ellipsis whitespace-nowrap transition-all ${props.className}`} onClick={props.onClick}>
        {title}
      </button>
    </a>
  );
}

export default Button;
