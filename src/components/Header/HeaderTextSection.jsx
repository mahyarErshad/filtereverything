import React, { memo } from "react";
import {ReactComponent as WoocommerceLogo} from "../../assets/images/woocommerce_logo.svg";

function HeaderTextSection() {
  return (
    <>
      <div className="md:pr-[20%] sm:pr-10 max-sm:pr-4 pt-16">
        <h1 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold">
          غول
          <sup className="text-center text-black py-0 px-4 rounded-[35px] bg-[#ffd000] text-3xl mr-4">+سئو</sup>
        </h1>
        <h2 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold mr-3">فیلتر</h2>
      </div>
      <div>
        <p className="max-md:text-3xl md:text-4xl font-bold text-white">برای WordPress</p>
        <div className="max-md:text-3xl md:text-4xl font-bold text-white flex items-center"><span>و</span> <WoocommerceLogo className="max-md:w-7 md:w-9" /></div>
      </div>
    </>
  );
}

export default memo(HeaderTextSection);
