import React from "react";
import { Link, Outlet } from "react-router-dom";
import Chat from "../components/Chat";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../css/home.css";
import Logo from "../assets/icons/logo.png";

const Home = () => {
  return (
    // <div className=" flex h-[100vh] w-[100vw] bg-[#1D1B3F]">
    //   <div className="HSC ">
    //     <div className=" flex-row h-[100vh] w-[80vw]">
    //       <div className=" header h-[6vh] w-[80vw] bg-[#1D1B3F] fixed flex">
    //         {/* <Header /> */}
    //       </div>
    //       <div className="flex ">
    //         <div className="flex justify-center items-center h-[100vh] w-[130px] fixed ">
    //           <Sidebar />
    //         </div>

    //         <div className="2xl:w-[1100px] xl:w-[1100px] lg:w-[1000px] md:w-[650px] sm:w-[300px] text-white ml-[150px] mt-[60px] ">
    //             <Outlet/>
    //         </div>

    //       </div>

    //     </div>

    //   </div>

    //   <div className="chat h-full text-black bg-pink-400 ">
    //     <Chat />
    //     </div>
    // </div>
    <center>
      <div className="flex justify-between h-[auto] w-[auto] text-white ">
        {/* sidebar */}

        <div className="siderbar h-auto w-auto  px-5">
          <div className="h-[50px] w-[50px] mt-3 mb-3 ">
            <Link to='/'><img src={Logo} className="logo" alt="dual-arena-logo" /></Link>
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

          <div className="h-[600px]">
          <Outlet/>
          </div>
          
          <div className="h-[25px] mt-[186px] mb-[30px] ">
          <Footer />
          </div>
          
         
        </div>
        <div className="gap w-[80px] "></div>
 
        {/* chat */}
        <div className="h-auto w-auto float-right">
          <Chat />
        </div>
      </div>
    </center>
  );
};

export default Home;
