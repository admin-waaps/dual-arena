import { FaTimes } from "react-icons/fa";
import { signup, showSignup, hideSignup, hideLogin, showLogin, forgotPassword } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import NetworkService from "../../services/network.service";
import { useEffect, useState } from "react";
const networkService = new NetworkService()



const LoginModal = () => {

  const showSignUp = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlelogin = async function()
  {
    let res = await networkService.login(email);
    console.log("res: "+res)
  }


  // useEffect(() => {

  //   console.log(email);
  //   console.log(password)

  // }, [email, password])
  

  return (
    <div className="  h-[600px] w-[100%]  flex items-center justify-center text-[14px]">
    <div className="bg-[#1D1B3F] m-[10px] rounded-[16px]  w-[405px] h-[502px]">
      <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
        <div className="text-[#fff]">Login</div>
        <div> 
            <FaTimes className="text-[#fff]"/>
        </div>
      </div>
 

      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
        <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" type='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </div>

    
      <div className="flex items-center justify-center justify-between mt-[13px] m-auto w-[351px]">
        <div><input className="bg-[#575DE8] text-[#fff]" type="checkbox"/> </div>
        <div className=" text-[#fff] ml-[-300px] w-[95%]">Remember me</div>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px]" onClick={handlelogin}>Login</button>
      </div>

      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className="flex items-center justify-center bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px]" 
        onClick = {
          async () => {
            // dispatch(showLogin());
            // dispatch(hideLogin());
            // dispatch(hideSignup());
            dispatch(showSignup());

            // const res = await networkService.register(data);
            // console.log(res);

            // // if 

            console.log("showLogin: " + showSignUp);
         }} >I don't have an account</button>
      </div>


      <div className="mt-[13px] text-[#fff] flex items-center justify-center">
        <button className="flex items-center justify-center h-[38px] w-[361px] p-[20px] rounded-[31px]"
        // onClick={()=>dispatch(forgotPassword())}
        >Forgot Password</button>
      </div>


    </div>
    </div>
  )
}

export default LoginModal;