import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoInformationCircle } from "react-icons/io5";
import { FiSmile } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="Chat flex flex-col text-white bg-[#191537] h-full 2xl:w-[330px] xl:w-[330px] lg:w-[330px] md:w-[330px] sm:w-[300px]">
      <div className="header-chat flex flex-row justify-center items-center 2xl:gap-5 xl:gap-2 h-[60px] 
                      2xl:w-[330px] xl:w-[260px] lg:w-[300px] md:w-[250px] sm:w-[230px] 
                      text-center shadow-lg  ">

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


      <div className="main-message-body h-full 2xl:w-[330px] xl:w-[260px] lg:w-[280px] md:w-[250px] sm:w-[330px] overflow-y-auto">
        <div className="chat flex mt-4">
          <div className="d1 ml-3 h-auto w-1/6">
            <img
              src="https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2022/10/841883b4e5eeff38a5030c7c6d2bc97e-1200x0-c-default.jpg"
              alt="user"
              className="h-[32px] w-[32px] rounded-full"
            />
          </div>
          <div className="d2 w-4/5">
            <span className="username text-[14px]">Rani</span>
            <span className="msg-time text-[#4C4B6A] mx-2 text-[12px]">
              just now
            </span>
            <div className="msg-text text-[#9996BA] w-auto mr-5 text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
        </div>    
      </div>

      <div className="texting flex w-[267px]  my-3 px-5 h-[40px] w-3/3 bg-[#23224A] justify-between justify-center items-center rounded-full ">
        <input
          type="text"
          placeholder="Type your messages"
          className="bg-[#23224A] h-[30px] text-[12px] focus:outline-none"
        />

        <div className="flex gap-3">
          <div className="emoji h-[18px] w-[18px]">
            <FiSmile />
          </div>
          <div className="send h-[18px] w-[18px]">
            <IoIosSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
