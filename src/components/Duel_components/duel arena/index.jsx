
import { FaCoins } from 'react-icons/fa';
import { TbSword } from 'react-icons/tb';
// import sword from './sword.png'
import './index.css'

const Comp4 = () => {
    return (
        <div className="main w-[278px] m-[10px] h-[153px] rounded-md flex items-center justify-around">

            
            <div className="w-[115px] h-[129px] m-[10px] flex-col items-">
                <span className="w-[58px] h=[12px] font-medium font-Poppins text-[#3CEE4E] mx-[8px]">Win</span>
                <img className="rounded-[100%] border-none mx-[31px] my-[-2px]" width={"53px"} height={"53px"} src={"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg"} alt="tiger"/>
                <div className="w-[58px] h=[12px] font-400 font-Poppins text-[#fff] ml-[29px] mt-[2px] flex justify-center align-center">Clutch</div>
                <div className='flex w-[80px] mt-[1px] ml-[18px] justify-center items-center'>
                    <FaCoins className='text-[#FD9F28] m-1'/>
                    <div className='text-[#3CEE4E]'>1,000.00</div>
                </div>
            </div>


            <div className='rounded-[100%] w-[39px] h-[39px] flex items-center justify-center bg-[#1D1B3F]'>
            {/* <img src={sword} alt="sword"/> */}
            <TbSword className="text-[30px] text-[#FCD24C]"/>
            </div>


            <div className="w-[115px] h-[129px] m-[10px] flex-col">
                {/* <span className="w-[58px] h=[12px] font-medium font-Poppins text-[#3CEE4E] mx-[8px]">Win</span> */}
                <img className="rounded-[100%] border-none mx-[31px] my-[23px]" width={"53px"} height={"53px"} src={"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg"} alt="tiger"/>
                <div className="w-[58px] h=[12px] font-400 font-Poppins text-[#fff] ml-[29px] mt-[-24px] flex justify-center align-center">Candy</div>
                <div className='flex w-[80px] mt-[1px] ml-[18px] justify-center items-center'>
                    <FaCoins className='text-[#FD9F28] m-1'/>
                    <div className='text-[#EE3C3C]'>1,000.00</div>
                </div>
            </div>
        

        </div>
    )
}

export default Comp4;
