import React from "react";
import MessageHeader from "./message/message-header";
import MessageBody from "./message/message-body";

import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import MessageInput from "./message/message-input";

const Chat = ({ toggleChat }) => {
  return (
    <div className="Chat relative flex flex-col text-white bg-[#191537] h-[100vh] w-[300px] ">
      <MessageHeader toggleChat={toggleChat} />

      <MessageBody />

      <div>
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;
