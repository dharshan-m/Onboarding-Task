import React, {useState} from 'react'
import BackImg from '../assets/back.png';

export default function OnboardForm() {

    const [next, setNext] = useState(1);

    const handleNext = () => setNext((prev) => prev + 1);
    const handleBack = () => setNext((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className='grid place-items-center mt-20'>
        <div className='flex flex-row gap-130'>
            <button className='cursor-pointer' onClick={handleBack} disabled={next === 1}><img className='w-[20px]' src={BackImg} alt='Back Image'/></button>
            <button className='cursor-pointer font-semibold'>Save And Exit</button>
        </div>
        {/* container 1 */}
        {next == 1 &&(
            <div>
                <div className='p-10 pl-0'>
                    <text className='font-semibold text-3xl '>Give Us Your Primary Information</text>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row gap-10' >
                        <div className='flex flex-col'>
                            <label className='text-md text-[#1E1E1E] font-semibold'>Name</label>
                            <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' placeholder='Write your Name'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-md text-[#1E1E1E] font-semibold'>Last Name</label>
                            <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' placeholder='Write your Last Name'/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-10'>
                        <div className='flex flex-col'>
                            <label className='text-md text-[#1E1E1E] font-semibold'>Email Address</label>
                            <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' placeholder='Email Address'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-md text-[#1E1E1E] font-semibold'>Phone Number</label>
                            <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' placeholder='Phone Number'/>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <button className='bg-[#2986CE] text-white rounded-3xl w-[123px] h-[50px] mt-5 cursor-pointer ' onClick={handleNext}>
                        Continue
                    </button>
                </div>
            </div>
        )}
        {/* container -2 */}
        {next == 2 &&(
            <div>
                <div className='p-10 pl-0'>
                    <div className='flex flex-col justify-start '>
                        <text className='font-semibold text-3xl'>We will make sure your preferences </text>
                        <text className='font-semibold text-3xl'>Up to date</text>
                        <text className='font-semibold text-3xl'>What is Your Location?</text>
                    </div>
                    <div className='mt-3'>
                        <text className='font-medium text-lg text-[#767977]'>We use this to match you nearby offers.</text>
                    </div>
                </div>
                <div className='flex flex-row gap-10 mt-1'>
                    <div className='flex flex-col'>
                        <label className='text-md text-[#1E1E1E] font-semibold'>City</label>
                        <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md text-[#1E1E1E] font-semibold'>Postal Code</label>
                        <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' />
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center mt-5'>
                    <input type='checkbox'></input>
                    <text className='text-md text-[#1E1E1E] font-semibold'>I am Interested In Teleworking.</text>
                </div>
                <div className='mt-10'>
                    <button className='bg-[#2986CE] text-white rounded-3xl w-[123px] h-[50px] mt-5 cursor-pointer' onClick={handleNext}>
                        Continue
                    </button>
                </div>
            </div>
        )}

        {/* container-3 */}
        {next == 3&&(
            <div>
                <div className='p-10 pl-0'>
                    <text className='font-semibold text-3xl'>What is Minimum salary You want?</text>
                </div>
                <div className='flex flex-col'>
                    <text className='font-medium text-lg text-[#767977]'>We use this to match you nearby offers that approximately</text>
                    <text className='font-medium text-lg text-[#767977]'>pay this amount or more </text>
                </div>
                <div className='flex flex-row gap-10 mt-5'>
                    <div className='flex flex-col mt-5 gap-1'>
                        <label className='text-md text-[#1E1E1E] font-semibold'>Minimum Salary amount</label>
                        <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' />
                        <text className='font-medium text-xs text-[#767977]'>Amount is by Euro</text>
                    </div>
                    <div className='flex flex-col mt-5 gap-1'>
                        <label className='text-md text-[#1E1E1E] font-semibold'>Payment Period</label>
                        <input className='border-2 border-[#CFD4D1] rounded-sm w-[300px] h-[50px] pl-2' type='text' />
                    </div>
                </div>
                <div className='mt-10'>
                    <button className='bg-[#2986CE] text-white rounded-3xl w-[123px] h-[50px] mt-5 cursor-pointer' onClick={handleNext}>
                        Continue
                    </button>
                </div>
            </div>
        )}

        {/* container-4 */}
        {next == 4&&(
            <div className='pr-40'>
                <div className='p-10 pl-0'>
                    <text className='font-semibold text-3xl'>What Offer Are you looking for?</text>
                </div>
                <div>
                    <text className='font-medium text-lg text-[#767977]'>This Helps us match you to relevant offers.</text>
                </div>
                <div className='flex flex-col mt-5 gap-1'>
                    <label className='text-md text-[#1E1E1E] font-semibold'>Desired Offer title</label>
                    <input className='border-2 border-[#CFD4D1] rounded-sm w-[440px] h-[50px] pl-2' type='text' />
                    <text className='font-medium text-xs text-[#767977]'>Add Up to ten offer titles</text>
                </div>
                <div className='mt-10'>
                    <button className='bg-[#2986CE] text-white rounded-3xl w-[123px] h-[50px] mt-5 cursor-pointer' onClick={handleNext}>
                        Continue
                    </button>
                </div>
            </div>
        )}

    </div>
  )
}
