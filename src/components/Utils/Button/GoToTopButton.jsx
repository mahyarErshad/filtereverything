import React from "react";

function GoToTopButton() {
  const position = window.pageYOffset;
  console.log(position);
  return (
    <button className="cursor-pointer rounded-[50%] p-2 flex justify-center items-center border border-white fixed bottom-[5%] left-[5%] bg-purple transition-all hover:bg-[#1f3fca] text-white">
      <span className="material-symbols-outlined text-inherit">arrow_upward</span>
    </button>
  );
}

export default GoToTopButton;
