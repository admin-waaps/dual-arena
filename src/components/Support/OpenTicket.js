import React, { useState, useContext } from "react";
import "./tickets.css";

import { openTicket, closeTicket } from "../../redux/actions/support";
import { SupportToggleContext } from "../../ContextApi/supportToogleContext";
import TogglerReducer from "../../redux/reducers/support/supportToggler";
import {useSelector, useDispatch} from "react-redux"


const OpenTicket = (props) => {

  const dispatch = useDispatch();
  const Toggle = useSelector(state => state.TogglerReducer)

  console.log("toggle: "+Toggle)
  return (
    <div className="w-[603px] h-[555px] rounded-3xl  font-normal bg-[#191537] overflow-hidden text-white">
      <div className="ticketHeader w-full h-[56px] bg-[#191537] text-white flex justify-between items-center px-[16px]">
        <p>Open Ticket</p>
        <button
          onClick={() => {
            console.log(Toggle)
            dispatch(closeTicket());
          }}
        >
          &nbsp;X&nbsp;
        </button>
      </div>
      <div className="ticketBody w-full h-[auto] bg-[#1D1B3F] flex flex-col justify-center items-center space-y-[16px] text-[14px] font-normal pt-[23px] px-[22px]">
        <select className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px] border-r-[17px] border-r-[#23224A]">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
        </select>
        <input
          type="text"
          placeholder="Enter Ticket name"
          className="bg-[#23224A] w-full h-[38px] rounded-full pl-[12px]"
        />
        <textarea
          placeholder="Provide as much information as possible"
          className="bg-[#23224A] w-full h-[176px] rounded-2xl p-[14px]"
        />
        <div className="drag&drop bg-[#23224A] text-center w-full h-[60px] flex flex-col justify-center border-[1px] border-opacity-5 border-dashed rounded-2xl">
          <p className="text-[#BEBEDC] text-[12px]">
            Drop an image here or click to browse files
          </p>
          <p className="text-[#BEBEDC] text-[12px] opacity-40">
            PNG or JPG, up to 3MB
          </p>
        </div>
        <div className="flex w-full gap-[10px]">
          <button className="bg-[#23224A] h-[38px] w-full rounded-3xl"  onClick={() => {
            console.log(Toggle)
            dispatch(closeTicket());
          }}>
            cancel
          </button>
          <button className="bg-[#575DE8] h-[38px] w-full rounded-3xl mb-[10px]">
            Open Ticket
          </button>
        </div>
      </div>
      <div className="ticketFooter openTicket w-full h-[63px] flex justify-center items-center text-[12px]  text-[#BEBEDC] font-normal bg-[#1D1B3F] ">
        By submitting you agree to Privacy Policy and Terms of Service.
      </div>
    </div>
  );
};

export default OpenTicket;
