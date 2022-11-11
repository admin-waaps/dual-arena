import React, { useEffect, useState, useRef } from "react";
import NetworkService from "../../services/network.service";
import ScrollToBottom from "react-scroll-to-bottom";

const Message = ({ chatRef, setChatRef, inputmessage, socket }) => {
  const [messages, setMessages] = useState(inputmessage);
  const [messageList, setMessageList] = useState();
  const networkService = new NetworkService();

  const MessageList = async () => {
    let join = await localStorage.getItem("join_room");
    console.log({ join });
    let msgList = await networkService.get_chat_room_list_by_id(parseInt(join));
    console.log({ msgList, room: localStorage.getItem("join_room") });
    setMessageList(msgList);
  };

  console.log({ "input message": inputmessage });
  console.log({ "input message list": inputmessage.messageList });

  useEffect(() => {
    setMessages(inputmessage);
  }, [inputmessage.messageList, socket]);



  return (
    <ScrollToBottom >
      <div className="main-message-body mx-4">
        {messages.messageList &&
          messages.messageList.map((message) => {
            return (
              <div className="chat flex flex-start mt-4 w-full " key={message}>
                <div className="h-auto w-auto pr-3 ">
                  <img
                    src="https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2022/10/841883b4e5eeff38a5030c7c6d2bc97e-1200x0-c-default.jpg"
                    alt="user"
                    className="h-[32px] w-[32px] rounded-full"
                  />
                </div>

                <div className="d2 w-4/5 text-left">
                  <span className="username text-[14px]">{message.author}</span>
                  <span className="msg-time text-[#4C4B6A] mx-2 text-[12px]">
                    {message.time}
                  </span>
                  <div className="text-left text-[#9996BA] w-[224px] h-full mr-5 text-[12px] mt-[4px]">
                    {message.message}
                    {/* this is message */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </ScrollToBottom>
  );
};

export default Message;
