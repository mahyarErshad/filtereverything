import React from "react";
import cardFilterImage from "../../assets/images/filterCards.jpg";

function FilterCards() {
  return (
    <section className="flex flex-col gap-4 w-full bg-[#F5F4F0] md:py-8 max-md:py-4 px-2">
      <div className="flex flex-col gap-4 max-md:items-center md:px-[15%] max-md:px-4 ">
        <p className=" font-bold max-md:text-2xl md:text-3xl">هر فیلتری ایجاد کنید</p>
        <p className="md:mr-36 font-bold max-md:text-2xl md:text-3xl">با هر پارامتری!</p>
        <p className="md:text-lg max-md:text-base font-medium text-[#222]">برای هر نوع پست که دارای آرشیو است.</p>
      </div>
      <img src={cardFilterImage} alt="card filter" />
    </section>
  );
}

export default FilterCards;
