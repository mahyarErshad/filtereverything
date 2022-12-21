import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function GoToTopButton() {
  const [scrollHeight, setScrollHeight] = useState(false);
  const root = document.getElementById("root");
  function handleScroll() {
    root.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    root.addEventListener("scroll", () => {
      if (root.scrollTop > 1000) {
        setScrollHeight(true);
      } else {
        setScrollHeight(false);
      }
    }); // eslint-disable-next-line
  }, [scrollHeight]);

  return (
    <>
      {scrollHeight && (
        <button onClick={handleScroll} className="cursor-pointer rounded-[50%] p-2 flex justify-center items-center border border-white fixed bottom-[5%] left-[5%] bg-purple transition-all hover:bg-[#1f3fca] text-white">
          <span className="material-symbols-outlined text-inherit">arrow_upward</span>
        </button>
      )}
    </>
  );
}

export default GoToTopButton;
