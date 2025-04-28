import React from 'react'
import {RiAccountCircleLine, RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMail} from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
export const Rejistration = ({handleClose}) => {
  return (
    <>
       <div className='w-full h-screen d-flex justify-content-center align-items-center bg-black position-fixed top-0 position-relative'>
                    
                 <div>
                     <span onClick={handleClose} className='w-[42px] h-[42px] d-inline-block rounded-full justify-content-center align-items-center d-flex text-2xl border-1 border-danger text-white position-absolute top-8 right-10 hover:cursor-pointer rotate-180 transition duration-300 hover:rotate-360 '><RxCross2 /></span>
                 </div>

             <div className='text-black w-[50%]  bg-white shadow-lg rounded-md'>
             <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

{/* username input with icon */}
<div className="w-full md:w-[80%] relative">
    <RiAccountCircleLine
        className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]"/>
    <input
        type="text"
        name="text"
        id="text"
        placeholder="Username"
        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
    />
</div>

{/* password input with icon */}
<div className="w-full md:w-[80%] relative">
    <RiLockPasswordLine
        className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]"/>

    <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
    />
</div>

{/* email input with icon */}
<div className="w-full md:w-[80%] relative">
    <MdOutlineMail
        className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]"/>
    <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
    />
</div>

        <button className='w-[25%] bg-black h-[40px] text-white shadow-md'>Sign Up</button>
</div>


    
      </div>
       </div>
    </>
  )
}
