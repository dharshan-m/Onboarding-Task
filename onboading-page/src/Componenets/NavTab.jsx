import React from 'react'

export default function NavTab() {
  return (
    <div className='border-1 flex gap-20 justify-center items-center h-[50px] mt-4 sticky top-0 bg-white z-10'>
        <text className='text-md sm:text-2xl  text-[#1E1E1E]'>Jobs</text>
        <text className='text-md sm:text-2xl  text-[#1E1E1E]'>Companies</text>
        <text className='text-lg sm:text-1xl  text-[#1E1E1E]'>Create CV</text>
    </div>
  )
}
