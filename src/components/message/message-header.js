import React from 'react'
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoInformationCircle } from "react-icons/io5";

const MessageHeader = () => {
  return (
    <div className="header-chat flex justify-around items-center h-[60px] w-[300px] shadow-lg">

    <span className="msg-span flex justify-center items-center  w-[38px] h-[38px]">
      <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#23224A] text-black  ">
        <BiMessageSquareDetail className="text-white w-[19px] h-[19px]" />
      </div>
    </span>

    <span className="seacrh flex justify-center items-center  md:w-[180px]">
      <div className="">
        <input
          type="text"
          placeholder="General Chat"
          className=" rounded-full w-[190px] h-[38px] bg-[#23224A] text-black text-sm text-[#BEBEDC] px-4 focus:outline-none"
        />
      </div>
    </span>

    <span className="flex justify-center items-center  w-[38px] h-[38px]">
      <div className="rounded-full w-[40px] h-[38px] bg-[#23224A] text-white flex justify-center items-center ">
        <IoInformationCircle className="w-[19px] h-[19px]" />
      </div>
    </span>
  </div>
  )
}

export default MessageHeader