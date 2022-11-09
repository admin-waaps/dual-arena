import React, { useEffect, useState } from "react";
import NetworkService from "../../services/network.service";
// import { requestForToken } from "../../firebase/firebase"; 

const Message = () => {
  const networkService = new NetworkService();
  const [messages, setMessages] = useState([]);

  const getchat = async () => {
    let id = localStorage.getItem("r_id");
    let chats = await networkService.get_chat_room_list_by_id({
      chat_room_id: id,
    });
    setMessages(chats);
  };

  // setInterval((messages)=>{
  //   console.log('get chat interval')
  //   getchat()
  // },1000)

  useEffect(() => {
    // requestForToken();
    getchat();
    setMessages(messages);
    console.log("message useeffect");
    console.log({ message_body: messages });
  }, []);

  return (
    <div className="main-message-body mx-4 mt-10 h-auto overflow-y-scroll overflow-x-hidden ">
      {messages &&
        messages.map((message) => {
          return (
            <div className="chat flex flex-start mt-4 w-full " key={message.id}>
              <div className="h-auto w-auto pr-3 ">
                <img
                  src="https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2022/10/841883b4e5eeff38a5030c7c6d2bc97e-1200x0-c-default.jpg"
                  alt="user"
                  className="h-[32px] w-[32px] rounded-full"
                />
              </div>
              <div className="d2 w-4/5 text-left">
                <span className="username text-[14px]">{message.user_id}</span>
                <span className="msg-time text-[#4C4B6A] mx-2 text-[12px]">
                  {message.created_at}
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
  );
};

export default Message;
