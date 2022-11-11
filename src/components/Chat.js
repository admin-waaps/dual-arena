import React from "react";
import MessageHeader from "./message/message-header";
import MessageBody from "./message/message-body";
import MessageInput from "./message/message-input";
import { useState, useEffect } from "react";

import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

const Chat = ({ toggleChat }) => {

  const [chatRef, setChatRef] = useState(false);
  const [inputmessage, setInputMessage] = useState({})

  useEffect(() => {
     socket.emit("join_room", localStorage.getItem("join_room"));
  }, [socket])
  

  return (
    <div className="Chat relative flex flex-col text-white bg-[#191537] h-[100vh] w-[300px]  justify-between">
      <div>
        <MessageHeader toggleChat={toggleChat} />
      </div>

      <div>
        <MessageBody chatRef={chatRef} setChatRef={setChatRef} inputmessage={inputmessage} socket={socket}/>
      </div>
 
      <div>
        <MessageInput setChatRef={setChatRef} setInputMessage={setInputMessage} socket={socket}/>
        {console.log({"Chat.js": {socket, inputmessage}})}
      </div>
    </div>
  );
};

export default Chat;
