import React from "react";
import FooterNavLink from "./FooterNavLink";

function Footer() {
  return (
    <footer className="py-14 bg-[#302f33] text-[#d4d4d4] flex flex-wrap justify-center">
      <FooterNavLink data={["نسخه حرفه ایی غول فیلتر", "درباره ما"]} />
    </footer>
  );
}

export default Footer;
