import React, { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

function GoToTopButton() {
  const [scrollHeight, setScrollHeight] = useState(false);
  const nodeRef = useRef(null);
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
      <Transition nodeRef={nodeRef} timeout={2000} in={scrollHeight} classNames="GoToTopButton" unmountOnExit>
        <button onClick={handleScroll} className="cursor-pointer rounded-[50%] p-2 flex justify-center items-center border border-white fixed bottom-[5%] left-[5%] bg-purple transition-all hover:bg-[#1f3fca] text-white">
          <span className="material-symbols-outlined text-inherit">arrow_upward</span>
        </button>
      </Transition>
    </>
  );
}

export default GoToTopButton;
