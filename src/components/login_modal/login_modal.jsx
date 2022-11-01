import { FaTimes } from "react-icons/fa";


const LoginModal = () => {
  return (
    <div className="bg-[#0c0a12f2]  h-[600px] w-[100%]  flex items-center justify-center">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[502px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Login</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
 

      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Email"/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Password"/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Confirm Password"/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Referral code (optional)"/>
      </div>

      <div className="flex items-center justify-center justify-between mt-[13px] m-auto w-[351px]">
        <div><input className="bg-[#575DE8] text-[#fff]" type="checkbox"/> </div>
        <div className=" text-[#fff] ml-[-300px] w-[95%]">Remember me</div>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px]">Login</button>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className="flex items-center justify-center bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px]">I don't have an account</button>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className="flex items-center justify-center h-[38px] w-[361px] p-[20px] rounded-[31px]">Forgot Password</button>
      </div>


    </div>
    </div>
  )
}

export default LoginModal;