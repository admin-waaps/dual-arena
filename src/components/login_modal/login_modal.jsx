import { FaTimes } from "react-icons/fa";
import { signup, showSignup, hideSignup, hideLogin, showLogin, forgotPassword } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import NetworkService from "../../services/network.service";
import { useEffect, useState } from "react";
import './login.css'
const networkService = new NetworkService()



const LoginModal = () => {

  const showSignUp = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberme, setRememberme] = useState("")
  const [err, setErr] = useState("")

  const handlelogin = async function () {
    console.log("handleLogin")
    let credentials = { email, password }
    let res = await networkService.login(credentials);
    if (res.bool == false) {
      setErr(res);
      console.log("response: " + JSON.stringify(res))
    }
    console.log(res.token.token)
    localStorage.setItem("_token", res.token.token)

  }


  useEffect(() => {

    console.log("login_modal useEffect")
    if (localStorage.getItem('_token')) {
      // dispatch(hideLogin())
    }

  }, [])


  return (
    <div className="  h-[px] w-auto  flex  justify-around text-[12px]  rounded-3xl">
      <div className="bg-[#1D1B3F] rounded-[16px]  w-[405px] h-[px]">
        <div className="bg-[#191537]  h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
          <div className="text-[#fff]">Login</div>
          <div>
            <FaTimes className="text-[#fff]" />
          </div>
        </div>


        <div className="mt-[13px] text-[#fff] flex items-center  justify-around">
          <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mt-[13px] text-[#fff] flex items-center justify-center justify-around">
          <input className="bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] focus:outline-none" type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>


        <div className="flex items-center justify-center justify-between mt-[13px] m-auto w-[351px]">
          <div><input className=" accent-[#494ef1] " type="checkbox" onChange={(e) => setRememberme(e.target.checked)} /> </div>
          <div className=" text-[#fff] ml-[-300px] w-[95%]" >Remember me</div>
        </div>

        <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          <button className=" flex items-center justify-center bg-[#575DE8] h-[38px] w-[361px] p-[20px] rounded-[31px] hover:bg-[#494ef1]" onClick={handlelogin}>Login</button>
        </div>

        <div className="mt-[13px] text-[#fff] flex items-center justify-center">
          <button className="flex items-center justify-center bg-[#23224A] h-[38px] w-[361px] p-[20px] rounded-[31px] hover:bg-[#494ef1]"
            onClick={
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


        <div className="mt-[13px] text-[#fff] flex items-center justify-center mb-5 ">
          <button className="flex items-center justify-center h-[38px] w-[361px] p-[20px] rounded-[31px] "
          // onClick={()=>dispatch(forgotPassword())}
          ><p className="hover:text-[#494ef1]"> Forgot Password</p></button>
        </div>

        {err.bool ? "" : <div className="text-red-500 m-10px" key={err.message}>{err.message}{console.log({ err })}</div>}
        {/* <div className="login absolute w-full h-full" ></div> */}
      </div>
    </div>
  )
}

export default LoginModal;