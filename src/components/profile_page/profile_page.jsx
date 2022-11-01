import Ellipse from '../../assets/icons/userImg.png';
import bar from '../../assets/icons/bar.png';
import coin from '../../assets/icons/coin.png';
import copy from '../../assets/icons/copy.png';
import { FaTimes, FaAngleUp } from "react-icons/fa";




const ProfileUsername = () => {
    return (
        <div className="border-[#23224A] border-[1px] bg-[#23224A] h-[432px] w-[218px] rounded-[16px]">
            <div className='mt-[18px] flex justify-center items-center'>
                <img src={Ellipse} alt="Profile" />
            </div>
            <div className='text-[#fff] mt-[10px] flex justify-center items-center'>
                <span className='font-medium'>Username</span>
            </div>

            <div className='mt-[10px] text-center'>
                <span className='text-[#BEBEDC] text-sm'>Joined</span>
                <div className='text-[#fff]'>07/27/2022</div>
            </div>


            <div className='text-[#fff] mt-[20px] text-center'>
                <div className='text-[#BEBEDC] text-sm'>Total Wagered</div>
                <div className=''>0.00</div>
            </div>

            <div className='text-[#fff] mt-[20px] text-center'>
                <div className='text-[#BEBEDC ] text-sm'>Total Bets</div>
                <div className=''>0</div>
            </div>

            <div className='text-[#fff] mt-[10px] text-center'>
                <div className='flex justify-between items-center p-[10px]'>
                    <span>Level 1</span>
                    <span>44/84</span>
                </div>
                <div className=''>
                    <img className="ml-[14px]" src={bar} alt="" />
                </div>
            </div>

            <div className='text-[#fff] mt-[10px] text-center'>
                <div className='ml-[-10px] text-center flex justify-center items-center'>
                    <img className="m-[5px]" src={coin} alt="" />
                    <span>0.00</span>
                </div>
                <div className=''>Cashier</div>
            </div>



        </div>
    )
}

const General = () => {
    return (
        <div className='w-[610px] rounded-[16px]'>

            <div className="bg-[#191537] h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
                <div className="text-[#fff]">General</div>
                <div>
                    <FaAngleUp className="text-[#fff]" />
                </div>
            </div>

            <div className="bg-[#23224A] h-[104px] flex">
                <div className='text-[#fff] border-white border-[1px] w-[50%]'>
                    <div className='border-white border-[1px] mt-[15px] w-[70%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Email</span>
                        <span>Verified</span>
                    </div>
                    <div className='text-[#fff] border-white border-[1px] mt-[20px] w-[95%] flex justify-around'>
                        <span>example2002@gmail.com</span>
                        <img src={copy} alt="" />
                    </div>
                </div>


                <div className='border-white border-[1px] w-[50%]'>
                    <div className='text-[#fff] border-white border-[1px] mt-[15px] w-[40%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Password</span>
                        {/* <span>Verified</span> */}
                    </div>
                    <div className='text-[#fff] border-white border-[1px] mt-[20px] w-[50%] flex justify-around'>
                        <span>.................</span>
                        <img src={copy} alt="" />
                    </div>
                </div>


            </div>
            <hr />

            <div className="bg-[#23224A] h-[104px] rounded-b-[16px] flex">
            <div className='text-[#fff] border-white border-[1px] w-[50%]'>
                    <div className='border-white border-[1px] mt-[15px] w-[70%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Game account link</span>
                        {/* <span>Verified</span> */}
                    </div>
                    <div className='text-[#fff] border-white border-[1px] mt-[20px] w-[80%] flex justify-around'>
                        <span>Not linked yet </span>
                        <img src={copy} alt="" />
                    </div>
                </div>


                <div className='border-white border-[1px] w-[50%]'>
                    <div className='text-[#fff] border-white border-[1px] mt-[15px] w-[60%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Bet Conformation</span>
                        {/* <span>Verified</span> */}
                    </div>
                    <div className='text-[#fff] border-white border-[1px] mt-[20px] w-[50%] flex justify-around'>
                        <img src={copy} alt="" />
                        <span>Enabled</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

const ProfilePage = () => {
    return (
        <div>
            <ProfileUsername />
            <General />
        </div>

    )

}
export default ProfilePage;