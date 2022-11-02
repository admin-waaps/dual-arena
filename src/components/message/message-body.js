import React from "react";

const Message = () => {
  return (

      <div className="main-message-body mx-4 shadow-lg">
        <div className="chat flex flex-start mt-4 w-full ">
          <div className="h-auto w-auto pr-3 ">
            <img
              src="https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2022/10/841883b4e5eeff38a5030c7c6d2bc97e-1200x0-c-default.jpg"
              alt="user"
              className="h-[32px] w-[32px] rounded-full"
            />
          </div>
          <div className="d2 w-4/5 text-left">
            <span className="username text-[14px]">Rani</span>
            <span className="msg-time text-[#4C4B6A] mx-2 text-[12px]">
              just now
            </span>
            <div className="text-left text-[#9996BA] w-[224px] h-full mr-5 text-[12px] mt-[4px]">
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

  );
};

export default Message;
