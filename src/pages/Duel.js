import React from "react";
import DuelBag from "../components/Duel_components/duel arena/index";
import DuelBagHeader from "../components/Duel_components/duel-arena-header/index";
import Comp7 from "../components/Footer";

const Duel = () => {
  return (

      <div className="flex flex-col justify-center items-center h-[calc(100%+10rem)]">
        <div className="mt-[40px] shadow-sm py-2">
          <DuelBagHeader />
        </div>
        <div className=" flex justify-center items-center flex-wrap mt-[20px] overflow-y-scroll ">
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
          <DuelBag />
        </div>

      </div>


  );
};

export default Duel;
