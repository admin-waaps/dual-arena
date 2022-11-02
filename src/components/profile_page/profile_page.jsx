import Ellipse from '../../assets/icons/userImg.png';
import bar from '../../assets/icons/bar.png';
import coin from '../../assets/icons/coin.png';
import copy from '../../assets/icons/copy.png';
import dorbeen from '../../assets/icons/dorbeen.png';
import { FaTimes, FaRedoAlt ,FaAngleUp, FaAngleDown, FaAngleLeft, FaAngleRight} from "react-icons/fa";





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
                <div className='text-[#fff] w-[50%]'>
                    <div className='mt-[15px] w-[70%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Email</span>
                        <span>Verified</span>
                    </div>
                    <div className='text-[#fff] mt-[20px] w-[95%] flex justify-around'>
                        <span>example2002@gmail.com</span>
                        <img src={copy} alt="" />
                    </div>
                </div>


                <div className='w-[50%]'>
                    <div className='text-[#fff] mt-[15px] w-[40%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Password</span>
                        {/* <span>Verified</span> */}
                    </div>
                    <div className='text-[#fff] mt-[20px] w-[50%] flex justify-around'>
                        <span>.................</span>
                        <img src={copy} alt="" />
                    </div>
                </div>


            </div>
            <hr />

            <div className="bg-[#23224A] h-[104px] rounded-b-[16px] flex">
                <div className='text-[#fff] w-[50%]'>
                    <div className='mt-[15px] w-[70%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Game account link</span>
                        {/* <span>Verified</span> */}
                    </div>
                    <div className='text-[#fff] mt-[20px] w-[80%] flex justify-around'>
                        <span>Not linked yet </span>
                        <img src={copy} alt="" />
                    </div>
                </div>


                <div className='w-[50%]'>
                    <div className='text-[#fff] mt-[15px] w-[60%] flex justify-around'>
                        <span className='text-[#BEBEDC]'>Bet Conformation</span>
                        {/* <span>Verified</span> */}
                    </div>
                    <div className='text-[#fff] mt-[20px] w-[50%] flex justify-around'>
                        <img src={copy} alt="" />
                        <span>Enabled</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

const Orders = () => {
    return (
        <div className='bg-[#23224A] w-[610px] h-[537px] border-[#191537] border-[1px] rounded-[16px]'>

            <div className="bg-[#191537] h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
                <div className="text-[#fff]">Orders</div>
                <div>
                    <FaAngleUp className="text-[#fff]" />
                </div>
            </div>

            <div className='bg-[#23224A] '>

                <div className='mt-[15px] flex justify-between items-center'>
                    <div className='ml-[30px] text-[#fff] flex justify-center items-center'>
                        <div className='flex p-[12px]'>
                            Any Kind
                            <FaAngleDown className='ml-[10px]' />
                        </div>
                        <div className='flex p-[12px]'>
                            Any Kind
                            <FaAngleDown className='ml-[10px]' />
                        </div>
                    </div>
                    <div className='mr-[30px] text-[#fff] p-[12px]'>
                        <FaRedoAlt />
                    </div>
                </div>
           

            <table className='bg-[#23224A] mt-[35px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='w-[150px] text-center'>
                        <p className='text-[#BEBEDC] text-xs'>2 min ago</p>
                        <p>Deposit</p>
                    </td>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p className='m-auto w-[110px] flex justify-between items-center'>

                    <img className='' src={coin} alt=""/>
                        20.00(btc)
                        </p>
                        </td>
                    <td className='w-[150px] text-center text-[#D04B4B]'>Cancel</td>
                </tr>
            </table>

            <table className='bg-[#23224A] mt-[35px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='w-[150px] text-center'>
                        <p className='text-[#BEBEDC] text-xs'>2 min ago</p>
                        <p>Deposit</p>
                    </td>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p className='m-auto w-[110px] flex justify-between items-center'>

                    <img className='' src={coin} alt=""/>
                        20.00(btc)
                        </p>
                        </td>
                    <td className='w-[150px] text-center text-[#4BD078]'>Approved</td>
                </tr>
            </table>

            <table className='bg-[#23224A] mt-[35px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='w-[150px] text-center'>
                        <p className='text-[#BEBEDC] text-xs'>2 min ago</p>
                        <p>Deposit</p>
                    </td>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p className='m-auto w-[110px] flex justify-between items-center'>

                    <img className='' src={coin} alt=""/>
                        20.00(btc)
                        </p>
                        </td>
                    <td className='w-[150px] text-center text-[#D04B4B]'>Cancel</td>
                </tr>
            </table>

            <table className='bg-[#23224A] mt-[35px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='w-[150px] text-center'>
                        <p className='text-[#BEBEDC] text-xs'>2 min ago</p>
                        <p>Deposit</p>
                    </td>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p className='m-auto w-[110px] flex justify-between items-center'>

                    <img className='' src={coin} alt=""/>
                        20.00(btc)
                        </p>
                        </td>
                    <td className='w-[150px] text-center text-[#4BD078]'>Approved</td>
                </tr>
            </table>

            <div className='bg-[#23224A] mt-[20px] flex justify-between items-center'>
                    <div className='text-[#fff] ml-[30px] p-[12px]'>
                        1-4 of 10
                    </div>
                    <div className='text-[#fff] mr-[30px] flex justify-center items-center'>
                        <div className='flex p-[12px]'>
                            <FaAngleLeft className='ml-[10px]' />
                        </div>
                        <div className='flex p-[12px]'>
                            <FaAngleRight className='ml-[10px]' />
                        </div>
                    </div>
                </div>
                </div>


        </div>

    )
}


const Transactions = () =>{
    return (
        <div className='bg-[#23224A] w-[610px] h-[272px] border-[#191537] border-[1px] rounded-[16px]'>

        <div className="bg-[#191537] h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
            <div className="text-[#fff]">Transactions</div>
            <div>
                <FaAngleUp className="text-[#fff]" />
            </div>
        </div>

        <div className='bg-[#23224A] '>

            <div className='mt-[15px] flex justify-between items-center'>
                <div className='ml-[30px] text-[#fff] flex justify-center items-center'>
                    <div className='flex p-[12px]'>
                        Any Kind
                        <FaAngleDown className='ml-[10px]' />
                    </div>
                   
                </div>
                <div className='mr-[30px] text-[#fff] p-[12px]'>
                    <FaRedoAlt />
                </div>
            </div>

            <div className=' h-[100px] flex justify-center items-center text-[#fff]'>
                    <span>No Transactions Yet</span>
            </div>
       

        <div className='bg-[#23224A] mt-[80px] flex justify-between items-center'>
                <div className='text-[#fff] ml-[30px] p-[12px]'>
                    1-4 of 10
                </div>
                <div className='text-[#fff] mr-[30px] flex justify-center items-center'>
                    <div className='flex p-[12px]'>
                        <FaAngleLeft className='ml-[10px]' />
                    </div>
                    <div className='flex p-[12px]'>
                        <FaAngleRight className='ml-[10px]' />
                    </div>
                </div>
        </div>
     </div>


    </div>

    )
}

const Promotions = () =>{
    return (
        <div className='m-[20px] bg-[#23224A] w-[610px] h-[454px] border-[#191537] border-[1px] rounded-[16px]'>

        <div className="bg-[#191537] h-[65px] rounded-t-[16px] flex items-center justify-between p-[20px]">
            <div className="text-[#fff]">Promotions</div>
            <div>
                <FaAngleUp className="text-[#fff]" />
            </div>
        </div>

        <div className='bg-[#23224A] rounded-[16px]'>

            <div className='text-[#fff] mt-[15px] flex justify-around items-center'>

                    <input placeholder='Promocode' className="text-[#BEBEDC] bg-[#2E2D58] flex items-center justify-center h-[38px] w-[412px] p-[20px] rounded-[31px] focus:outline-none"/>
                    <div className="bg-[#575DE8] flex items-center justify-center h-[38px] w-[153px] rounded-[31px]">
                       Use Promocode
                    </div>

            </div>

            <table className='bg-[#23224A] mt-[29px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p>2 min ago</p>
                        </td>
                    <td className='w-[310px]'>
                    <p className='ml-[210px] w-[80px] flex justify-between items-center'>
                    <img className='' src={coin} alt=""/>
                        20.00
                        </p>
                        </td>
                   
                </tr>
            </table>
            <table className='bg-[#23224A] mt-[29px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p>2 min ago</p>
                        </td>
                    <td className='w-[310px]'>
                    <p className='ml-[210px] w-[80px] flex justify-between items-center'>
                    <img className='' src={coin} alt=""/>
                        20.00
                        </p>
                        </td>
                   
                </tr>
            </table>
            <table className='bg-[#23224A] mt-[29px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p>2 min ago</p>
                        </td>
                    <td className='w-[310px]'>
                    <p className='ml-[210px] w-[80px] flex justify-between items-center'>
                    <img className='' src={coin} alt=""/>
                        20.00
                        </p>
                        </td>
                   
                </tr>
            </table>
            <table className='bg-[#23224A] mt-[29px] text-[#fff] w-[100%]'>
                <tr className='w-[100%]'>
                    <td className='mt-[6px] flex justify-around items-center'>
                        <img src={dorbeen} alt=""/>
                        ABCD-EFGHIJK
                        </td>
                    <td className='text-center'>
                        <p>2 min ago</p>
                        </td>
                    <td className='w-[310px]'>
                        <p className='ml-[210px] w-[80px] flex justify-between items-center'>
                    <img className='' src={coin} alt=""/>
                        20.00
                        </p>
                        </td>
                   
                </tr>
            </table>


       

        <div className='bg-[#23224A] mt-[14px] flex justify-between items-center rounded-[16px]'>
                <div className='text-[#fff] ml-[10px] p-[12px]'>
                    1-4 of 10
                </div>
                <div className='text-[#fff] mr-[10px] flex justify-center items-center'>
                    <div className='flex p-[12px]'>
                        <FaAngleLeft className='ml-[10px]' />
                    </div>
                    <div className='flex p-[12px]'>
                        <FaAngleRight className='ml-[10px]' />
                    </div>
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
            <Orders />
            <Promotions />
            <Transactions />
        </div>

    )

}
export default ProfilePage;