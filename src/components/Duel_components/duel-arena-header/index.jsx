import { TbSword } from "react-icons/tb";

const DualBagHeader = () => {
  return (
    <div className="bg-[#1D1B3F]  w-full h-[40px] flex items-center justify-between">
      <div className=" flex justify-between items-center h-[38px] w-[200px]">
        <TbSword className=" w-[30px] h-[30px] text-[#fff]" />
        <span className=" font-medium text-[28px] text-[#fff]">Dual Arena</span>
      </div>

      <div className=" w-[590px] h-[38px] flex justify-end items-center ">
        <div className=" w-[130px] h-[38px] flex justify-evenly items-center">
          <a href="#" className="text-[#BEBEDC] text-[12px]">
            All
          </a>
          <a href="#" className="text-[#BEBEDC] text-[12px]">
            High Rollers
          </a>
        </div>

        <div className="w-[440px] h-[38px] flex items-center justify-end gap-4">
          <select className="focus:outline-none bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-[31px] px-[15px] text-[12px] border-r-[14px] border-r-[#23224A]">
            <option value="Whip" className="">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
          </select>
          <select className="focus:outline-none bg-[#23224A] text-[#fff]  h-[38px] w-[142px] rounded-full px-[15px] text-[12px] border-r-[14px] border-r-[#23224A]">
            <option value="Any Bet Size">Any Bet Size</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
            <option value="Whip">Whip</option>
          </select>
          <button className="bg-[#575DE8] text-[#fff] h-[36px] w-[103px] rounded-[31px] p-[5px] text-[12px]">
            Create Dual
          </button>
        </div>
      </div>
    </div>
  );
};

export default DualBagHeader;
