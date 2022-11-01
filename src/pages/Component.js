import React from "react";
import { Link, Outlet } from "react-router-dom";
import Comp1 from "../components/Home_Components/comp 1";
import Comp2 from "../components/Home_Components/comp 2";
import Comp3 from "../components/Home_Components/comp 3";
import Comp4 from "../components/Home_Components/comp4";
import Comp5 from "../components/Home_Components/comp5";
import Comp6 from "../components/Home_Components/comp6";
import Footer from "../components/Footer";
import "../css/component.css";
// md:space-y-0 md:space-x-3 md:justify-center md:items-center

// md:flex md:justify-center md:items-center md:mt-3 md:ml-[35px]
const Component = () => {
  return (
    <center>
      <div className="h-full mt-10">
        <div
          className={`comp123 flex justify-center items-center`}
        >
          <div className="block1   mt-3 py-1 space-y-3">
            <div className="comp1">
              <Comp1 />
            </div>
            <div className="copmp2">
              <Comp2 />
            </div>
          </div>
          <div className="block2 comp3 mt-3 mx-2">
            <Comp3 />
          </div>
        </div>

        {/*second  */}
        <div className="relative comp45 flex justify-center items-center space-x-3 mt-6 w-[full]  overflow-">
          <div className="comp4 flex justify-center items-center mt-3 ">

            <div className="absolute mt-10 blur-xl rounded-full opacity-50">
            <Comp4/>
            </div>
            <div className="blur_box ">
            <Comp4 />
            </div>
          </div>
          <div className="comp5 flex justify-center items-center mt-3">

            <div className="absolute mt-10 blur-xl rounded-full opacity-50">
            <Comp5 />
            </div>
            <div className="blur_box ">
            <Comp5 />
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Component;
