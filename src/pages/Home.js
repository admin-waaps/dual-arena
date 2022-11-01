import React from "react";
import { Outlet } from "react-router-dom";
import Chat from "../components/Chat";
import Header from "../components/Header";
import Footer from "../components/Home_Components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className=" flex h-[100vh] w-[100vw] bg-[#1D1B3F]">
      <div className="HSC">
        <div className=" flex-row lg:h-[100vh] md:h-[100vh] sm:h-[100vh] lg:w-[80vw] md:w-[80vw] sm:w-[100vw]">
          <div className="flex justify-center items-center header  lg:h-[6vh] md:h-[6vh] sm:h-[6vh]  lg:w-[80vw] md:w-[80vw] sm:w-full ">
            <Header />
          </div>
          <div className="flex lg:h-[90vh] md:h-[90vh] sm:h-[90vh] lg:w-[80vw] md:w-[80vw] sm:w-[80vw]">
            <div className="flex justify-center items-center  lg:h-[90vh] md:h-[90vh] sm:h-[90vh] lg:w-[10vw] md:w-[15vw] sm:w-[20vw]">
              <Sidebar />
            </div>
            <div className="2xl:w-[1100px] xl:w-[1100px] lg:w-[1000px] md:w-[650px] sm:w-[300px] text-white border-[1px] ">
                <Outlet/>
            </div>
          </div>
        </div>
        <center className='ml-20 py-10'>


        </center>
      </div>
      <div className="chat h-full 2xl:w-[330px] xl:w-[330px] lg:w-[330px] text-black bg-pink-400">
        <Chat />
        </div>
    </div>
  );
};

export default Home;
