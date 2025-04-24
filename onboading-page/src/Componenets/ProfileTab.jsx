import React from 'react'
import ProfileImg from '../assets/profile-user.png';
import Question from '../assets/question.png';
import Email from '../assets/email.png';
import "tailwindcss";

export default function ProfileTab() {
  return (
    <div className='flex flex-row justify-end gap-10 pr-30 pt-5 ' >
        <img className='questionImg w-[25px]' src={Question} alt='Question'/>
        <img className='questionImg w-[25px]' src={Email} alt='email'/>
        <img className='questionImg w-[25px]' src={ProfileImg} alt="Profile" />
    </div>
  )
}
