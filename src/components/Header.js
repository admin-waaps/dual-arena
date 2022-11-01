import React from "react";
import { RiSettings4Fill } from "react-icons/ri";
import Logo from "../assets/icons/logo.png";
import coin from "../assets/icons/coin.png";
import { useState } from "react";
import user from "../assets/icons/user11.png";
import Group from "../assets/icons/Group.png";
import exchange from "../assets/icons/exchange11.png";
import ring from "../assets/icons/ring.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header flex justify-between lg:w-[80vw] md:w-[80vw] sm:w-[80vw] items-center overflow-hidden ">
      <div className="Logo flex justify-center items-center text-white  lg:h-[5vh] lg:w-[10vw] md:h-[10vw] md:w-[10vw]">
        <img src={Logo} className='logo ' alt="logo" />
      </div>
      <div className="flex justify-between text-white  w-[50vw] sm:text-xs">
        <div className="flex justify-center items-center text-[12px] ">center the cashier every page</div>
        <div className="header-gradient flex  justify-center items-center gap-6 text-[12px] h-[38px] w-[152px] rounded-full font-normal ">
          <p><img src={coin} alt="cashier-coins" /></p>
          <p className="text-[#FD9F28] text-[12px]  ">cashier</p>
        </div>
      </div>
      <div className="setting flex h-10 w-auto space-x-3 mr-[3rem] ">
        <select className="bg-[#1D1B3F] pr-3 border-none text-white text-[12px] focus:outline-none">
          <option>absolute</option>
          <option>bar</option>
          <option>center</option>
          <option>d1</option>
          <option>element</option>
        </select>
        <span
          className=" flex justify-center items-center h-[38px] w-[38px] bg-[#575DE8] rounded-full"
          onClick={toggleMenu}
        >
          <RiSettings4Fill className="text-white text-[19px]" />
        </span>

        {/* onclick settings */}
        {isMenuOpen ? (
          <div className="flex h-[164px] w-[128px] bg-[#191537] text-[14px] text-[#6E6D90] font-normal rounded-[16px] absolute top-[84px] px-[13px] py-[10px] right-[460px] flex-col z-10 justify-start justify-evenly items-start">
            <div className="flex justify-center items-center justify-around  cursor-pointer">
              <span className="mr-3">
                <img src={user} alt="" className="" />
              </span>
              <span>Profile</span>
            </div>

            <div className=" flex justify-center items-center  cursor-pointer">
              <span className="mr-3">
                <img src={exchange} alt="" className="ml-[2px]" />
              </span>
              <span>Exchange</span>
            </div>

            <div className=" flex justify-center items-center cursor-pointer">
              <span className="mr-3">
                <img src={ring} alt="" className="" />
              </span>
              <span>Support</span>
            </div>

            <div className=" flex justify-center items-center cursor-pointer">
              <span className="mr-3">
                <img src={Group} alt="" className="" />
              </span>
              <span>Sign Out</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
