import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Chat from "../components/Chat";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../css/home.css";
import Logo from "../assets/icons/logo.png";
import SignOutModal from '../components/signout_modal/signout_modal'

import {BsFillChatLeftTextFill} from 'react-icons/bs'

const Home = () => {

  let transition = 'translate-x-full'
  let chatClass = 'translate-x-0'
  // let chatClass = 'translate-x-0'
  // const [isSignOut, setisSignOut] = useState(true)
  
  
  const chat = useRef()
  const toggleChat = () => {
    console.log("toggle chat")
    console.log(chat.current.classList.contains(chatClass))
    console.log(chat.current.classList.contains(chatClass))

    if (chat.current.classList.contains(chatClass)) {
      chat.current.classList.remove(chatClass)
      chat.current.classList.add(transition)
      chat.current.classList.add("hidden")
      // chat.current.classList.add("hidden")
    } else if (!chat.current.classList.contains(chatClass)) {
      chat.current.classList.remove(transition)
      chat.current.classList.remove("hidden")
      chat.current.classList.add(chatClass)
    }
  }

  return (

    <center>
      <div className="flex justify-between h-[auto] w-[auto] text-white ">
        {/* sidebar */}

        <div className="siderbar h-auto w-auto  px-5">
          <div className="h-[50px] w-[50px] mt-3 mb-3 ">
            <Link to="/">
              <img src={Logo} className="logo" alt="dual-arena-logo" />
            </Link>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>

        {/* content */}

        <div className="gap w-[20px] "></div>
        <div className="h-[100vh] w-[calc(100%-500px)] px-10 mt-2">
          <div className="h-[30px]">
            <Header />
          </div>

          <div className="h-[650px] rounded-3xl">
            <Outlet />
          </div>

          <div className="h-[25px] mt-[186px] mb-[100px] ">
            <Footer />
          </div>
        </div>
        <div className="gap w-[50px] "></div>

        {/* chat */}


        <div className="overflow-x-hidden w-auto h-auto">
          
          <div className="w-auto h-auto transform transition-transform translate-x-0" ref={chat}>
            <Chat/>
          </div>

          <div className=" flex justify-center items-center rounded-full h-[50px] w-[50px] bg-[#191537] hover:bg-[#5a4dba] mt-[10px] mr-[10px] "  onClick={toggleChat}>
              <BsFillChatLeftTextFill/>
            </div>
      
        
        </div>
      </div>
    </center>
  );
};

export default Home;
