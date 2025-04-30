import React from 'react'
import {RiAccountCircleLine, RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMail} from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
export const SignIn = ({handleSignInClose}) => {
  return (
    <>
       <div className='w-full h-screen d-flex justify-content-center align-items-center bg-black position-fixed top-0 position-relative'>
                           
                        <div>
                            <span onClick={handleSignInClose} className='w-[42px] h-[42px] d-inline-block rounded-full justify-content-center align-items-center d-flex text-2xl border-1 border-danger text-white position-absolute top-6 right-10 hover:cursor-pointer rotate-180 transition duration-300 hover:rotate-360 '><RxCross2 /></span>
                        </div>
       
                  
                        <div className="text-black w-full max-w-md mx-auto bg-white shadow-lg rounded-md">
  <div className="p-6 md:p-8 mb-4 flex flex-col gap-5 items-center justify-center">
    <p className="text-gray-600 font-bold font-serif tracking-wide text-center text-sm md:text-base">
      Please fill out this form to Login
    </p>

    {/* Email input with icon */}
    <div className="w-full relative">
      <MdOutlineMail className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        className="peer border border-border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
      />
    </div>

    {/* Password input with icon */}
    <div className="w-full relative">
      <RiLockPasswordLine className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="peer border border-border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
      />
    </div>

    {/* Login Button */}
    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 h-12 text-white font-semibold rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
      Login
    </button>

    {/* Switch to Registration */}
    <p className="text-gray-600 font-bold font-serif tracking-wide text-center text-sm md:text-base">
      Don’t have a registration?{" "}
      <span
        onClick={handleSignInClose}
        className="cursor-pointer inline-block hover:underline text-blue-500"
      >
        Register
      </span>
    </p>
  </div>
</div>


              </div>
    </>
  )
}
