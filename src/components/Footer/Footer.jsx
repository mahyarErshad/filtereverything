import React from "react";
import FooterNavLink from "./FooterNavLink";

function Footer() {
  return (
    <footer className="py-14 bg-[#302f33] text-[#d4d4d4] flex flex-wrap justify-center px-[15%]">
      <FooterNavLink data={["نسخه حرفه ایی غول فیلتر", "درباره ما"]} />
      <FooterNavLink data={["مستندات", "پشتیبانی", "تماس با ما"]} />
      <FooterNavLink data={["شرایط استفاده", "تغییرات"]} />
      <FooterNavLink data={["نسخه رایگان", "نسخه حرفه ایی"]} />
    </footer>
  );
}

export default Footer;
