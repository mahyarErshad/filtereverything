import React from "react";

function FilterSets() {
  return (
    <section className="flex flex-wrap w-full md:py-8 max-md:py-4 px-2">
      <div className="flex flex-col md:gap-2 max-md:items-center md:items-end md:pr-[15%] pl-2 max-md:px-4 py-[5%] bg-red-500 max-md:w-full md:w-2/4">
        <h5>مجموعه فیلترهای <span className="text-purple">شخصی</span> ایجاد کنید</h5>
        <h4>برای هر صفحه سایت وردپرس خودتان</h4>
      </div>
      <div className="flex max-md:w-full md:w-2/4 bg-yellow-300"></div>
    </section>
  );
}

export default FilterSets;
