import React, { useState } from "react";
import "./tickets.css";
const Tickets = ({tickets}) => {

  const [ticket, setticket] = useState(tickets);
    console.log("tickets:"+tickets)
  return (
    <table className="table-auto border-spacing-x-[51px] border-spacing-y-[41px] border-slate-500 text-left">
      <thead>
        <tr className=" text-[#BEBEDC] font-normal text-[14px] opacity-[0.5]">
          <th>ID</th>
          <th>Title</th>
          <th>Topic</th>
          <th>Created</th>
          <th>Update</th>
          <th className="float-right">Status</th>
        </tr>
      </thead>
      <tbody>
        {ticket.map((t) => {
            return(
          <tr className="border-bottom text-[#BEBEDC] font-normal text-[14px] border border-b-2" key={t.id}>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td>{t.topic}</td>
            <td>{t.created}</td>
            <td>{t.update}</td>
            {t.status == "Solved" ? <td className="float-right text-[#4BD078]">{t.status}</td> : <td className="float-right text-[#CDD04B]">{t.status}</td> }
            
          </tr>)
        })}
      </tbody>
    </table>
  );
};

export default Tickets;
