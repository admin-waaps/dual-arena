import { FaTwitter , FaYoutube , FaDiscord } from 'react-icons/fa' 

const Footer = () => {
  return (
    <div className="bg-[#1D1B3F] 2xl:w-[1000px] xl:w-[800px] lg:w-[700px] md:w-[500px] sm:w-[300px] h-[19px] flex justify-center items-center justify-between mt-[100px] border-[1px] text-normal">
    <div className="w-[80px] h-[19px] flex justify-center items-center justify-between">
      <FaTwitter className='text-[#9996BA]'/>
      <FaYoutube className='text-[#9996BA]'/>
      <FaDiscord className='text-[#9996BA]'/>
      </div>     
    <div className='text-[#9996BA] text-[12px]'>	&#169;2020-2022 RSBITs All Rights Reserved</div>     
    </div>
  )
}

export default Footer;