import React from "react";
import ComparisonTableData from "../../lib/ComparisonTableData";

function ComparisonTable() {
  return (
    <section className="flex flex-col gap-4 w-full bg-white md:pt-36 max-md:pt-8 px-2 max-md:pb-4 md: pb-8">
      <div className="flex flex-col md:gap-2 items-center lg:px-[25%] max-md:px-4 mb-6">
        <h2 className=" max-md:text-2xl md:text-lg lg:text-3xl font-bold mb-4">غول فیلتر</h2>
        <h2 className=" max-md:text-2xl md:text-lg lg:text-3xl font-bold max-lg:mb-4 lg:mb-8">تفاوت نسخه رایگان با نسخه حرفه ای</h2>
        <table>
          <thead>
            <th>{"  "}</th>
            <th>حرفه ای</th>
            <th>رایگان</th>
          </thead>
          <tbody>
            {
                ComparisonTableData
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ComparisonTable;
