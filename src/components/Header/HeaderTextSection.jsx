import React, { memo } from "react";
import { ReactComponent as WoocommerceLogo } from "../../assets/images/woocommerce_logo.svg";

function HeaderTextSection() {
  return (
    <div className="md:pr-[10%] sm:pr-10 max-sm:pr-8 ">
      <div className="pt-16">
        <h1 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold">
          غول
          <sup className="text-center text-black py-0 px-4 rounded-[35px] bg-[#ffd000] text-3xl mr-4">+سئو</sup>
        </h1>
        <h2 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold mr-3">فیلتر</h2>
      </div>
      <div className="flex flex-col md:gap-3 max-md:gap-2 md:mt-8 max-md:mt-6">
        <p className="max-md:text-3xl md:text-4xl font-bold text-white">برای WordPress</p>
        <span className="md:-translate-y-3 max-md:-translate-y-2 text-white max-md:text-4xl md:text-5xl max-md:pr-20 md:pr-28">و</span>
        <div className="max-md:text-3xl md:text-4xl font-bold text-white">
          <WoocommerceLogo className="max-md:w-56 md:w-[18rem]" />
        </div>
      </div>
      <div className="max-md:w-56 md:w-[18rem]">
        <p className="text-white mt-6">غول فیلتر - افزونه فیلتر محصولات وردپرس و ووکامرس که به شما اجازه پیاده سازی هر نوع فیلتری را می دهد.</p>
      </div>
    </div>
  );
}

export default memo(HeaderTextSection);
