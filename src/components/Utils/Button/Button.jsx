import React from "react";

function Button(props) {
  const { title } = props;
  return (
    <button className={`bg-primary text-white py-2 px-4 rounded-md ${props.className}`} onClick={props.onClick}>
      {title}
    </button>
  );
}

export default Button;
