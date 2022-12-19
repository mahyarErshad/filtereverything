import React from "react";

function FooterNavLink({ data }) {
  return (
    <div className="flex flex-col gap-2 max-lg:w-2/4 lg:w-1/4 max-md:mb-6 md:mb-8 lg:mb-0 max-sm:pr-3 md:pr-[12%] md:whitespace-nowrap">
      {data.map((item, index) => {
        return (
          <nav key={index} className="text-sm cursor-pointer hover:text-[#e6e6e6] transition-all">
            {item}
          </nav>
        );
      })}
    </div>
  );
}

export default FooterNavLink;
