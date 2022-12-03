import React, { memo } from "react";

function HeaderTextSection() {
  return (
    <div className="">
      <h1 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold">غول</h1>
      <h2 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold mr-3">فیلتر</h2>
    </div>
  );
}

export default memo(HeaderTextSection);
