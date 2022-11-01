import { TbSword } from 'react-icons/tb';



const DualBagHeader = () => {
    return (
        <div className="bg-[#1D1B3F]  w-[100%] h-[38px] flex justify-center items-center justify-between">
            

            <div className=' flex justify-between items-center h-[38px] w-[200px]'>
            <TbSword className=" w-[30px] h-[30px] text-[#fff]"/>
            <span className=' font-medium text-[28px] text-[#fff]'>Dual Arena</span>
            </div>

            <div className=' w-[590px] h-[38px] flex justify-center items-center justify-between'>


            <div className=' w-[130px] h-[38px] flex justify-center items-center justify-between'>
                <a href="/" className='text-[#BEBEDC]'>All</a>
                <a href="/" className='text-[#BEBEDC]'>High Rollers</a>
            </div>

            <div className='   w-[440px] h-[38px] flex justify-center items-center justify-between'>
                <select className='bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-[31px] p-[5px]'>
                    <option value="Whip">Whip</option>
                    <option value="Whip">Whip</option>
                    <option value="Whip">Whip</option>
                    <option value="Whip">Whip</option>
                </select>
                <select className='bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-[31px] p-[5px]'>
                <option value="Whip">Whip</option>
                    <option value="Whip">Whip</option>
                    <option value="Whip">Whip</option>
                    <option value="Whip">Whip</option>
                </select>
               <button  className='bg-[#575DE8] text-[#fff] h-[38px] w-[142px] rounded-[31px] p-[5px]'>
                Create Dual
               </button>

            </div>




            </div>


        </div>
    );
}

export default DualBagHeader;