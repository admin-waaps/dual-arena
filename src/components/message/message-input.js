import React, { useEffect, useState } from "react";
import { FiSmile } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import NetworkService from "../../services/network.service";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { SendMessage } from "../../redux/actions/chat";



const MessageInput = ({ setChatRef, setInputMessage, socket }) => {
  const room_id = localStorage.getItem("r_id");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    if (message == undefined) {
      setCurrentMessage(() => "" + emojiObject.emoji);
    } else {
      setCurrentMessage((prevInput) => prevInput + emojiObject.emoji);
    }
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: localStorage.getItem("join_room"),
        author: "ss",
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setInputMessage({messageList});
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    console.log({ useEffect_data: "data", messageList, socket });
    socket.on("receive_message", (data) => {
      console.log("msg recieve "+data)
      setMessageList((list) => [...list, data]);
    });
  }, [socket, sendMessage]);

  return (
    <div className="  pt-[0px] w-[100%] mb-3 bg-[#191537] mt-3 overflow-x-hidden overflow-y-hidden flex justify-center items-center ">
      <center>
        <div className="texting flex justify-center items-center w-[267px] h-[40px] bg-[#23224A] rounded-full ">
          <input
            type="text"
            placeholder="Type your messages"
            className="bg-[#23224A] h-[30px] text-[12px] focus:outline-none "
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
            value={currentMessage}
          />

          {showPicker && (
            <div className="absolute h-auto w-auto transfrom -translate-y-[60%] p-5 bg-white">
              <div
                className="text-black float-right font-black mr-2"
                onClick={() => {
                  setShowPicker(!showPicker);
                }}
              >
                X
              </div>
              <EmojiPicker
                height={"500px"}
                width={"100%"}
                onEmojiClick={onEmojiClick}
                pickerStyle={{
                  backgroundColor: "",
                  border: "none",
                  color: "white",
                  boxShadow: "none",
                }}
              />
            </div>
          )}

          <div className="flex gap-3  p-2">
            <div
              className="emoji h-[18px] w-[18px] cursor-pointer "
              onClick={() => {
                setShowPicker(!showPicker);
              }}
            >
              <FiSmile />
            </div>
            <div
              className=" h-[18px] w-[18px] cursor-pointer  z-10"
              onClick={() => {
                console.log("send message");
                sendMessage();
              }}
            >
              <IoIosSend />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default MessageInput;
