import React, { useMemo } from "react";
import FilterEverythingAlsoCards from "../Utils/Button/FilterEverythingAlsoCards/FilterEverythingAlsoCards";
import puzzleIcon from "../../assets/images/FilterEverythingAlsoCards-icons/puzzle.svg";
import ajaxIcon from "../../assets/images/FilterEverythingAlsoCards-icons/ajax.svg";
import developersFriendlyIcon from "../../assets/images/FilterEverythingAlsoCards-icons/developersFriendly.svg";
import wordpressIcon from "../../assets/images/FilterEverythingAlsoCards-icons/wordpress.svg";
import airplaneIcon from "../../assets/images/FilterEverythingAlsoCards-icons/airplane.svg";
import radioButtonIcon from "../../assets/images/FilterEverythingAlsoCards-icons/radioButton.svg";

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
            پلاگین از بارگیری پست های فیلتر شده با{" "}
            <a className="text-blue-500" target="_blank" rel="noreferrer" href="https://filtereverything.pro/resources/plugin-settings/#ajax">
              AJAX
            </a>{" "}
            پشتیبانی می کند که بسیار سریعتر است.
          </p>
        ),
      },
      {
        icon: developersFriendlyIcon,
        title: "دوستدار توسعه دهندگان",
        description: (
          <p>
            رفتار و ظاهر افزونه را از طریق{" "}
            <a className="text-blue-500" target="_blank" rel="noreferrer" href="https://filtereverything.pro/resources/hooks/">
              هوک ها
            </a>{" "}
            و ویژگی‌های اصلی{" "}
            <a className="text-blue-500" target="_blank" rel="noreferrer" href="https://filtereverything.pro/resources/templates-overriding/">
              الگو
            </a>{" "}
            اصلاح کنید.
          </p>
        ),
      },
      {
        icon: wordpressIcon,
        title: "از رابط کاربری بومی وردپرس استفاده کنید",
        description: "برای دانستن نحوه کار با افزونه نیازی به حدس زدن یا یادگیری اسناد نیست. دارای رابط کاربری آشنا و بصری است.",
      },
      {
        icon: airplaneIcon,
        title: "سبک و سریع",
        description: "به لطف کدهای خوبی که نوشته شده، مانند یک جت جنگنده پرواز می کند.",
      },
      {
        icon: airplaneIcon,
        title: "سبک و سریع",
        description: "به لطف کدهای خوبی که نوشته شده، مانند یک جت جنگنده پرواز می کند.",
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
      <div className="max-md:mt-8 md:mt-12 lg:mt-20 flex flex-wrap w-full justify-center lg:px-[10%] md:px-8 max-md:px-4 gap-8">
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
