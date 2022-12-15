import React, { useMemo } from "react";
import FilterEverythingAlsoCards from "../Utils/Button/FilterEverythingAlsoCards/FilterEverythingAlsoCards";
import puzzleIcon from "../../assets/images/FilterEverythingAlsoCards-icons/puzzle.svg";
import ajaxIcon from "../../assets/images/FilterEverythingAlsoCards-icons/ajax.svg";

function FilterEverythingAlso() {
  const memoizedData = useMemo(() => {
    return [
      {
        icon: puzzleIcon,
        title: "سازگار با تم شما",
        description: "به طور خودکار با اکثر تم ها کار می کند.",
      },
      {
        icon: ajaxIcon,
        title: "پشتیبانی از AJAX",
        description: (
          <p>
            پلاگین از بارگیری پست های فیلتر شده با <a className="text-blue-500" target="_blank" rel="noreferrer" href="https://filtereverything.pro/resources/plugin-settings/#ajax">AJAX</a> پشتیبانی می کند که بسیار سریعتر است.
          </p>
        ),
      },
      {
        icon: ajaxIcon,
        title: "پشتیبانی از AJAX",
        description: (
          <p>
            پلاگین از بارگیری پست های فیلتر شده با <a className="text-blue-500" target="_blank" rel="noreferrer" href="https://filtereverything.pro/resources/plugin-settings/#ajax">AJAX</a> پشتیبانی می کند که بسیار سریعتر است.
          </p>
        ),
      },
    ];
  }, []);
  return (
    <section className="flex flex-col gap-4 w-full bg-white md:pt-36 max-md:pt-8 px-2 max-md:pb-4 md: pb-8">
      <div className="flex flex-col md:gap-2 max-lg:items-center lg:px-[25%] max-md:px-4 mb-6">
        <h5 className="lg:text-4xl md:text-3xl max-md:text-2xl font-bold">
          غول فیلتر <span className="text-purple">همچنین</span>
        </h5>
      </div>
      <div className="max-md:mt-8 md:mt-12 lg:mt-20 flex flex-wrap w-full lg:px-[25%] md:px-8 max-md:px-4 max-lg:gap-4 lg:gap-8">
        {memoizedData.map((item) => {
          return (
            <FilterEverythingAlsoCards key={item.title} icon={item.icon} title={item.title}>
              {item.description}
            </FilterEverythingAlsoCards>
          );
        })}
      </div>
    </section>
  );
}

export default FilterEverythingAlso;
