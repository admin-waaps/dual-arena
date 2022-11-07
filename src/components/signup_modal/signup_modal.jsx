import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { hideSignup, showLogin, showSignup } from "../../redux/actions/auth";

const SignUpModal = () => {

  const ShowSignIn = useSelector(state => state.AuthReducer)
  const dispatch = useDispatch();

  return (
    <div className="h-[600px] w-[100%] flex items-center justify-center">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[562px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Sign Up</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Display name"/>
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
        <div className=" text-[#fff] ml-[-300px] w-[95%]">I agree to the Provacy Policy and Terms</div>
      </div> 

      <div className="flex items-center justify-center justify-between mt-[13px] m-auto w-[351px]">
        <div><input className="bg-[#575DE8] text-[#fff]" type="checkbox"/> </div>
        <div className=" text-[#fff] ml-[-300px] w-[95%]">Remember me</div>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px]">Sign Up</button>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className="flex items-center justify-center bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px]" 
        
        onClick={()=>{
          dispatch(showSignup());
          console.log("hideSignup")
        }}
        >I have and Account</button>
      </div>


    </div>
    </div>
  )
}

export default SignUpModal;