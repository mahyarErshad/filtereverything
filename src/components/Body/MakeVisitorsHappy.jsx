import React from "react";
import Button from "../Utils/Button/Button";

function MakeVisitorsHappy() {
  return (
    <section className="flex justify-center flex-wrap items-center py-28 bg-purple max-md:gap-6 md:gap-8 lg:gap-16 max-md:flex-col px-4">
      <h3 className="text-white font-bold max-md:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">بازدید کنندگان خود را راضی کنید با</h3>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <Button href="https://www.zhaket.com/web/filter-everything-filter-plugin" title="مشاهده پیش نمایش" className="download-for-free-button py-[0.85rem] max-sm:w-[21rem] max-md:px-[1.8rem] md:px-[1rem]" backgroundColor="bg-transparent" textColor="text-white" />
        <Button href="https://www.zhaket.com/web/filter-everything-filter-plugin" title="خرید نسخه حرفه ای" className="hover:bg-[#18caca] font-bold py-[1.05rem] max-md:px-[3.2rem] md:px-[2rem] custom-border max-sm:w-[21rem]" />
      </div>
    </section>
  );
}

export default MakeVisitorsHappy;
