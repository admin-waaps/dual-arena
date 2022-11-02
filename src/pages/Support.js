import React from 'react'
import SupportBreadCrum from '../components/SupportBreadCrum'

const Support = () => {
  return (
    <div className='relative mt-11 h-full'>

        <div className=''>
        <SupportBreadCrum/>
        </div>
        <div className=' h-full translate-x-[0%] translate-y-[50%] justify-center items-center'>
            <p className='text-[#BEBEDC] text-[14px]'>Ticket not found</p>
        </div>
    </div>
  )
}

export default Support