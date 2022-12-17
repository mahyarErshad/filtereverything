import puzzleIcon from "../assets/images/FilterEverythingAlsoCards-icons/puzzle.svg";
import ajaxIcon from "../assets/images/FilterEverythingAlsoCards-icons/ajax.svg";
import developersFriendlyIcon from "../assets/images/FilterEverythingAlsoCards-icons/developersFriendly.svg";
import wordpressIcon from "../assets/images/FilterEverythingAlsoCards-icons/wordpress.svg";
import airplaneIcon from "../assets/images/FilterEverythingAlsoCards-icons/airplane.svg";
import radioButtonIcon from "../assets/images/FilterEverythingAlsoCards-icons/radioButton.svg";

const FilterEverythingAlsoData = [
  {
    id: 1,
    icon: puzzleIcon,
    title: "سازگار با تم شما",
    description: "به طور خودکار با اکثر تم ها کار می کند.",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    icon: wordpressIcon,
    title: "از رابط کاربری بومی وردپرس استفاده کنید",
    description: "برای دانستن نحوه کار با افزونه نیازی به حدس زدن یا یادگیری اسناد نیست. دارای رابط کاربری آشنا و بصری است.",
  },
  {
    id: 5,
    icon: airplaneIcon,
    title: "سبک و سریع",
    description: "به لطف کدهای خوبی که نوشته شده، مانند یک جت جنگنده پرواز می کند.",
  },
  {
    id: 6,
    icon: radioButtonIcon,
    title: "با بهترین شیوه های فیلتر مطابقت دارد",
    description: "الهام گرفته شده از محبوب ترین فروشگاه های اینترنتی در جهان.",
  },
];

export default FilterEverythingAlsoData;
