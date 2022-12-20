import React from "react";

function GoToTopButton() {
  return (
    <button className="cursor-pointer rounded-[50%] p-2 flex justify-center items-center border border-white fixed bottom-[5%] left-[5%] bg-purple">
      <span class="material-symbols-outlined text-white">arrow_upward</span>
    </button>
  );
}

export default GoToTopButton;
