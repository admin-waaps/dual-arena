import React from "react";
import { Link, Outlet } from "react-router-dom";
import Comp1 from "../components/Home_Components/comp 1";
import Comp2 from "../components/Home_Components/comp 2";
import Comp3 from "../components/Home_Components/comp 3";
import Comp4 from "../components/Home_Components/comp4";
import Comp5 from "../components/Home_Components/comp5";
import Comp6 from "../components/Home_Components/comp6";
import Footer from "../components/Home_Components/Footer";
import '../css/component.css'
// md:space-y-0 md:space-x-3 md:justify-center md:items-center

// md:flex md:justify-center md:items-center md:mt-3 md:ml-[35px]
const Component = () => {
  return (

    <div className="overflow-hidden gap-3 mt-10 space-x-3 space-y-3">

      <div className={`lg-res flex justify-center items-center space-y-3`} >
        <div className="comp1comp2 space-x-3">
          <Comp1 />
          <Comp2 />
        </div>
        <div>
          <Comp3 />
        </div>
      </div>

        {/*second  */}
      <div className="lg-res comp4comp5 flex justify-center items-center space-y-3">
      <Comp4/>
      <Comp5/>
      </div>

    </div>
  )
};

export default Component;
