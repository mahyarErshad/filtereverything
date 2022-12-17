import React from "react";
import ComparisonTableData from "../../lib/ComparisonTableData";
import { ReactComponent as TickIcon } from "../../assets/images/tick.svg";
import { ReactComponent as CrossIcon } from "../../assets/images/cross.svg";

function ComparisonTable() {
  return (
    <section className="flex flex-col gap-4 w-full bg-white md:pt-36 max-md:pt-8 max-md:pb-4 md: pb-8 border-t-2 border-[#e5e5e5]">
      <div className="flex flex-col md:gap-2 items-center lg:px-[25%] max-lg:px-4 mb-6">
        <h2 className=" max-md:text-2xl md:text-lg lg:text-3xl font-bold mb-4">غول فیلتر</h2>
        <h2 className=" max-md:text-2xl md:text-lg lg:text-3xl font-bold max-lg:mb-4 lg:mb-8">تفاوت نسخه رایگان با نسخه حرفه ای</h2>
        <table>
          <thead>
            <tr>
              <th>{"  "}</th>
              <th>حرفه ای</th>
              <th>رایگان</th>
            </tr>
          </thead>
          <tbody>
            {ComparisonTableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>
                    <TickIcon className="w-9 h-9 mx-auto" />
                  </td>
                  <td>{item.free ? <TickIcon className="w-9 h-9 mx-auto" /> : <CrossIcon className="w-9 h-9 mx-auto" />}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ComparisonTable;
