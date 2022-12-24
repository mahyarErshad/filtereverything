import React from "react";

function VerticalContentLayout(props) {
  return (
    <section className="flex flex-nowrap w-full px-4 lg:px-[10%] max-md:flex-col max-sm:mt-4">
      <div className="md:w-2/4 max-md:w-full flex flex-col max-lg:px-4 lg:pr-[8%] md:items-end justify-between max-md:py-4 md:pb-[7%] md:pt-[8%]">
        <div className="flex flex-col w-full gap-4 max-md:justify-center max-md:items-center md:items-end">
        {props.children}
        </div>
      </div>
    </section>
  );
}

export default VerticalContentLayout;
