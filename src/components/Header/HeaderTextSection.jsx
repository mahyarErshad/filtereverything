import React, { memo } from "react";
import woocommerceLogo from "../../assets/images/woocommerce_logo.svg";

function HeaderTextSection() {
  return (
    <>
      <div className="md:pr-[20%] sm:pr-10 max-sm:pr-4 pt-16">
        <h1 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold">
          غول
          <sup className="text-center text-black py-0 px-4 rounded-[35px] bg-[#ffd000] text-4xl mr-4">+سئو</sup>
        </h1>
        <h2 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold mr-3">فیلتر</h2>
      </div>
      <div>
        <p>برای WordPress</p>
        <p>و WordPress</p>
      </div>
    </>
  );
}

export default memo(HeaderTextSection);
