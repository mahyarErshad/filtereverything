import React, { memo } from "react";
import woocommerceLogoPng from "../../assets/images/woocommerce_logo-png.png";
import Button from "../Utils/Button/Button";

function HeaderTextSection() {
  return (
    <div className="md:pr-[5%] sm:pr-10 max-sm:pr-8 max-lg:bg-[#435ec3b9] pb-6 rounded-bl-[50%]">
      <div className="pt-16">
        <span className="text-center text-black max-lg:py-2 lg:py-0 px-4 rounded-[35px] bg-[#ffd000] sm:text-base md:text-xl lg:text-3xl font-bold">+سئو</span>
        <h1 className="md:text-[6.7rem] max-md:text-[3.5rem] text-white font-bold max-md:mt-2">غول فیلتر</h1>
      </div>
      <div className="flex flex-col md:gap-3 max-md:gap-2 md:mt-8 max-md:mt-6">
        <p className="max-md:text-[2.4rem] md:text-[4.5rem] font-bold text-white">
          <span className="font-light">برای</span> وردپرس <span className="font-light">و</span>
        </p>
        <div className="max-md:text-3xl md:text-4xl font-bold text-white">
          <img src={woocommerceLogoPng} className="max-md:w-[15.6rem] md:w-[29rem]" alt="woocommerce" />
        </div>
      </div>
      <div className="max-md:w-[16.5rem] max-md:text-justify md:w-[22rem]">
        <p className="text-white mt-6">غول فیلتر - افزونه فیلتر محصولات وردپرس و ووکامرس که به شما اجازه پیاده سازی هر نوع فیلتری را می دهد.</p>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-6 max-md:w-[16.5rem] md:w-[26rem] gap-4">
        <Button title="دانلود رایگان" className="download-for-free-button py-2" backgroundColor="bg-transparent" textColor="text-white" />
        <Button title="خرید نسخه حرفه ای" className="hover:bg-[#18caca] font-bold py-[1.05rem] max-md:px-[3.2rem]" />
      </div>
    </div>
  );
}

export default memo(HeaderTextSection);
