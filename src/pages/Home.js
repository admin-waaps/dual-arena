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

  const [isSignOut, setisSignOut] = useState(false)
  const [isChat, setIsChat] = useState()
  const ref = useRef()

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

        <div className="gap w-[80px] "></div>
        <div className="h-[100vh] w-full px-10 mt-2">
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
        <div className="gap w-[80px] "></div>

        {/* chat */}

        {""}
        <div className="h-auto w-auto float-right">
          <Chat />
        </div>
      </div>
    </center>
  );
};

export default Home;
