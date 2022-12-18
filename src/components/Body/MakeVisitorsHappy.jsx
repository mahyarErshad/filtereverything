import React from "react";
import Button from "../Utils/Button/Button";

function MakeVisitorsHappy() {
  return (
    <section className="flex justify-center items-center py-28 bg-purple">
      <h3 className="text-white font-bold max-md:text-xl md:text-3xl lg:text-4xl">بازدید کنندگان خود را راضی کنید با</h3>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Button title="نسخه رایگان" className="make-visitors-happy__free-version py-2" backgroundColor="bg-transparent" textColor="text-white" />
        <Button title="نسخه حرفه ای" className="hover:bg-[#18caca] font-bold py-[1.05rem] max-md:px-11 md:px-14" />
      </div>
    </section>
  );
}

export default MakeVisitorsHappy;
