import React from 'react'
import { FiSmile } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className="  absolute bottom-0 h-[41px] w-[100%] mb-3">
        <center>
          <div className="texting flex justify-center items-center w-[267px] h-[40px] bg-[#23224A] rounded-full ">
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
        </center>
      </div>
  )
}

export default MessageInput