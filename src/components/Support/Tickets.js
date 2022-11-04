import React, { useState } from "react";
import "./tickets.css";
const Tickets = ({tickets}) => {

  const [ticket, setticket] = useState(tickets);
    console.log("tickets:"+tickets)
  return (
    <table className="table table-auto w-full mt-[50px] border-spacing-x-[51px] border-spacing-y-[41px] border-slate-500 text-left">
      <thead>
        <tr className="tr w-full text-[#BEBEDC] font-normal text-[14px] opacity-[0.5]">
          <th className="th text-left">ID</th>
          <th className="th">Title</th>
          <th className="th">Topic</th>
          <th className="th">Created</th>
          <th className="th">Update</th>
          <th className="th float-right">Status</th>
        </tr>
      </thead>
      <tbody>
        {ticket.map((t) => {
            return(
          <tr className="tr border-bottom text-[#BEBEDC] font-normal text-[14px] border border-b-2" key={t.id}>
            <td className="td">{t.id}</td>
            <td className="td">{t.title}</td>
            <td className="td">{t.topic}</td>
            <td className="td">{t.created}</td>
            <td className="td">{t.update}</td>
            {t.status == "Solved" ? <td className="td float-right text-[#4BD078]">{t.status}</td> : <td className="td float-right text-[#CDD04B]">{t.status}</td> }
            
          </tr>)
        })}
      </tbody>
    </table>
  );
};

export default Tickets;
