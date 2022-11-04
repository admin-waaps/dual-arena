import { FaTimes } from "react-icons/fa";


const SignOutModal = () => {
  return (
    <div className="absolute bg-[#0c0a12f2]  h-[100vh] w-[100vw] flex items-center justify-center border-2">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[196px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Sign Out</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
      <div className="mt-[20px] text-[#fff] flex items-center justify-center">
        Are You Sure You want to Sign Out ?
      </div>

      <div className="mt-[20px] text-[#fff] flex items-center justify-center justify-around">
        <button className="bg-[#23224A] h-[38px] w-[174px] rounded-[31px]">Cancel</button>
        <button  className="bg-[#575DE8] h-[38px] w-[174px] rounded-[31px]">SignOut</button>
      </div>


    </div>
    </div>
  )
}

export default SignOutModal;