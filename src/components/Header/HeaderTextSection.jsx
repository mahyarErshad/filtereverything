import React, { memo } from "react";

function HeaderTextSection() {
  return (
    <div className="md:pr-[20%] sm:pr-10 max-sm:pr-4 pt-16">
      <h1 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold">غول</h1>
      <h2 className="md:text-[4.5rem] sm:text-[3.5rem] max-sm:text-[3rem] text-white font-bold mr-3">فیلتر</h2>
    </div>
  );
}

export default memo(HeaderTextSection);
