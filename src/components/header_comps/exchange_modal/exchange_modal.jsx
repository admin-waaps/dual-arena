import { FaTimes } from "react-icons/fa";
import { TbChevronLeft } from "react-icons/tb";


const ExchangeModal = (props) => {
  return (
    <div className="bg-[#0c0a12f2] h-[100%] w-[100%] flex items-center justify-center absolute -translate-x-[16.5%] translate-y-[47%]">
      <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[254px]">
        <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
          <div className="text-[#fff]">Login</div>
          <div>
            <FaTimes className="text-[#fff]" />
          </div>
        </div>


        <div className="bg-[#1D1B3F] mt-[13px] text-[#fff] flex items-center justify-center justify-around">
          <div className="bg-[#1D1B3F] h-[38px] w-[361px] p-[20px] rounded-[31px] flex items-center">
            <TbChevronLeft className="text-[#fff]" />
            <span className="ml-[10px]">Redeem Gift Card</span>
          </div>
        </div>



        <div className="mt-[13px] text-[#fff] flex items-center justify-around">
          <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Enter Gift Card Code" />
        </div>


        <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px]" onClick={()=>props.setIsExchangeOpen(false)} >Submit</button>
        </div>





      </div>
    </div>
  )
}

export default ExchangeModal;