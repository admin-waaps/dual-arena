import React, { useEffect, useState } from "react";
import { FiSmile } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import NetworkService from "../../services/network.service";


const MessageInput = () => {

  const networkService = new NetworkService();
  const room_id = localStorage.getItem("r_id");
  console.log("room id: "+room_id)
  const [chat, setchat] = useState();
  const [message, setMessage] = useState();
  const [r_id, set_rid] = useState(room_id);
  

  const handleSend = async () =>{

    const res = await networkService.getRoomChat({"chat_room_id": parseInt(r_id),
    "message": message});
    console.log(res)
  }

  useEffect(() => {
    console.log({message, room_id})
    set_rid(localStorage.getItem('r_id'))
  }, [message])
  console.log(parseInt(room_id))
  

  return (
    <div className="  absolute bottom-0 h-[41px] w-[100%] mb-3">
      <center>
        <div className="texting flex justify-center items-center w-[267px] h-[40px] bg-[#23224A] rounded-full ">
          <input
            type="text"
            placeholder="Type your messages"
            className="bg-[#23224A] h-[30px] text-[12px] focus:outline-none"
            onChange={(e)=>setMessage(e.target.value)}
          />

          <div className="flex gap-3">
            <div className="emoji h-[18px] w-[18px]">
              <FiSmile />
            </div>
            <div className="send h-[18px] w-[18px] border-2" onClick={handleSend}>
              <IoIosSend />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default MessageInput;
