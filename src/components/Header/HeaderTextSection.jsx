import React, { memo } from "react";
import woocommerceLogoPng from "../../assets/images/woocommerce_logo-png.png";
import Button from "../Utils/Button/Button";

function HeaderTextSection() {
  return (
    <div className="md:pr-[5%] max-sm:flex max-sm:flex-col max-sm:items-center sm:pr-10 max-lg:bg-[#435ec3b9] pb-12 max-sm:rounded-bl-none max-lg:rounded-bl-[50%]">
      <div className="pt-16 max-md:w-[21rem] md:w-[28rem] flex flex-col">
        <span className="text-center text-black py-2 px-4 rounded-[35px] bg-[#ffd000] sm:text-lg md:text-xl lg:text-3xl font-bold self-end w-fit">+سئو</span>
        <h1 className="md:text-[6.7rem] max-md:text-[5rem] text-white font-bold max-md:mt-2">غول فیلتر</h1>
      </div>
      <div className="flex flex-col md:gap-3 max-md:gap-2">
        <p className="max-md:text-[3.4rem] md:text-[4.5rem] font-bold text-white">
          <span className="font-light">برای</span> وردپرس <span className="font-light">و</span>
        </p>
        <div className="max-md:text-3xl md:text-4xl font-bold text-white">
          <img src={woocommerceLogoPng} className="max-md:w-[22rem] md:w-[29rem]" alt="woocommerce" />
        </div>
      </div>
      <div className="max-sm:w-[21.5rem] max-md:w-[16.5rem] max-md:text-justify md:w-[22rem]">
        <p className="text-white mt-4 max-md:text-justify max-md:w-[21rem] md:w-[29rem]">غول فیلتر - افزونه فیلتر محصولات وردپرس و ووکامرس که به شما اجازه پیاده سازی هر نوع فیلتری را می دهد.</p>
      </div>
      <div className="flex max-sm:flex-col max-sm:w-full items-center flex-wrap mt-6 max-md:w-[16.5rem] md:w-[29rem] max-md:gap-4 md:gap-6">
        <Button href="https://www.zhaket.com/web/filter-everything-filter-plugin/demo" title="مشاهده پیش نمایش" className="download-for-free-button py-[0.85rem] max-sm:w-[21rem] max-md:px-[1.8rem] md:px-[1rem]" backgroundColor="bg-transparent" textColor="text-white" />
        <Button href="https://www.zhaket.com/web/filter-everything-filter-plugin" title="خرید نسخه حرفه ای" className="hover:bg-[#18caca] font-bold py-[1.05rem] max-md:px-[3.2rem] md:px-[2rem] custom-border max-sm:w-[21rem]" />
      </div>
    </div>
  );
}

export default memo(HeaderTextSection);
