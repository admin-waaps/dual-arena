import React from "react";
import { RiSettings4Fill } from "react-icons/ri";
import Logo from "../assets/icons/logo.png";
import coin from "../assets/icons/coin.png";
import { useState } from "react";
import user from "../assets/icons/user11.png";
import Group from "../assets/icons/Group.png";
import exchange from "../assets/icons/exchange11.png";
import ring from "../assets/icons/ring.png";
import { CgEnter } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

      <div className="header flex justify-between w-auto mt-2 items-center">
       
          <div className="nothing div"></div>

          <div className="header-gradient flex justify-center items-center gap-6 text-[12px] h-[38px] w-[152px] rounded-full font-normal ">
            <p className="flex gap-2 text-white">
              <img src={coin} alt="cashier-coins" />
              0.00
            </p>
            <p className="text-[#FD9F28] text-[12px]">cashier</p>
          </div>
       
        <div className="setting flex h-10 w-auto space-x-3 ">
          <select className="bg-[#1D1B3F] pr-3 border-none text-white text-[12px] focus:outline-none">
            <option>absolute</option>
            <option>bar</option>
            <option>center</option>
            <option>d1</option>
            <option>element</option>
          </select>

          <div className="relative">
            <span
              className=" flex justify-center items-center h-[38px] w-[38px] bg-[#575DE8] rounded-full"
              onClick={toggleMenu}
            >
              <RiSettings4Fill className="text-white text-[19px]" />
            </span>

            {/* onclick settings */}
            {isMenuOpen ? (
              <div className="flex h-[164px] w-[128px] bg-[#191537] text-[14px] text-[#6E6D90] font-normal rounded-[16px] -left-10 top-[50px] px-[13px] py-[10px] flex-col z-10 justify-evenly items-start absolute">
                {/* <div className="flex h-[164px] w-[128px] bg-[#191537] text-[14px] text-[#6E6D90] font-normal rounded-[16px] relative top-[84px] px-[13px] py-[10px] right-[460px] flex-col z-10 justify-start justify-evenly items-start"> */}
                <Link to='/profile'>
                <div className="flex justify-center items-center cursor-pointer">
                  <span className="mr-3">
                    <img src={user} alt="" className="" />
                  </span>
                  <span>Profile</span>
                </div>
                </Link>

                <Link to='/exchange'>
                <div className=" flex justify-center items-center  cursor-pointer">
                  <span className="mr-3">
                    <img src={exchange} alt="" className="ml-[2px]" />
                  </span>
                  <span>Exchange</span>
                </div>
                </Link>

                <Link to='/support'>
                <div className=" flex justify-center items-center cursor-pointer">
                  <span className="mr-3">
                    <img src={ring} alt="" className="" />
                  </span>
                  <span>Support</span>
                </div>
                </Link>

                <Link to='/signout'>
                <div className=" flex justify-center items-center cursor-pointer">
                  <span className="mr-3">
                    <img src={Group} alt="" className="" />
                  </span>
                  <span>Sign Out</span>
                </div>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>

  );
};

export default Header;
