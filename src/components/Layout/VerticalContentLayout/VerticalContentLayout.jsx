import React from "react";

function VerticalContentLayout(props) {
  return (
    <section className="flex flex-nowrap w-full px-4 lg:pr-[10%] max-md:flex-col max-sm:mt-4">
      <div className="md:w-2/4 max-md:w-full flex flex-col max-lg:px-4 lg:pr-[8%] md:items-end justify-between max-md:py-4 md:py-8">
        <div className="flex flex-col w-full gap-4 max-md:justify-center max-md:items-center md:items-start">
        {props.children}
        </div>
      </div>
      <div className="md:w-[40%] max-md:w-full flex max-md:justify-center p-[5%]">
        <img className="h-auto max-w-full" src={props.image} alt={props.alt} />
      </div>
    </section>
  );
}

export default VerticalContentLayout;
