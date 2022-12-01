import React from "react";

function Button(props) {
  const { title } = props;
  return (
    <button
      className={`${props.className} bg-[] #6efafb
    padding: 8px 15px;
    line-height: inherit;
    border-radius: 5px;
    text-shadow: none;
    margin-left: 15px
px
;`}
      onClick={props.onClick}
    >
      {title}
    </button>
  );
}

export default Button;
