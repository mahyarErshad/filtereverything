import React from "react";

function FooterNavLink({ data }) {
  return (
    <div className="flex flex-col gap-2 max-md:w-full md:w-2/4 lg:w-1/4">
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
