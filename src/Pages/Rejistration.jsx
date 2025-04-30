import React, { useState } from 'react'
import {RiAccountCircleLine, RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMail} from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import app from '../DB/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

export const Rejistration = ({handleClose}) => {
    const auth = getAuth(app);
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [loader, setLoader] = useState(false)
    

    const handleSubmit = () => {
      setLoader(true)
        createUserWithEmailAndPassword(auth, email,password)
  .then(() => {
    setLoader(false)
    console.log("sign Up successfully");
    setUserName("");
    setPassword("");
    setEmail("");

    sendEmailVerification(auth.currentUser)

    toast.success(' Email verification send', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
    
    
    // ...
  })
  .catch((error) => {
    setLoader(false)
    console.log(error);
    toast.error('Please try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
    
  });
        }
  return (
    <>
       <div className='w-full h-screen d-flex justify-content-center align-items-center bg-black position-fixed top-0 position-relative'>
                    
                 <div>
                     <span onClick={handleClose} className='w-[42px] h-[42px] d-inline-block rounded-full justify-content-center align-items-center d-flex text-2xl border-1 border-danger text-white position-absolute top-6 right-10 hover:cursor-pointer rotate-180 transition duration-300 hover:rotate-360 '><RxCross2 /></span>
                 </div>

                 <div className="text-black w-full max-w-xl mx-auto bg-white shadow-lg rounded-md">
  <div className="p-6 md:p-8 mb-4 flex flex-col gap-5 items-center justify-center">
    <p className="text-gray-600 font-bold font-serif tracking-wide m-0 text-center text-sm md:text-base">
      Please fill out this form for Registration
    </p>

    {/* username input with icon */}
    <div className="w-full relative">
      <RiAccountCircleLine className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        className="peer border border-border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
      />
    </div>

    {/* password input with icon */}
    <div className="w-full relative">
      <RiLockPasswordLine className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="peer border border-border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
      />
    </div>

    {/* email input with icon */}
    <div className="w-full relative">
      <MdOutlineMail className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        className="peer border border-border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>

    <button onClick={handleSubmit} className="w-full md:w-[50%] h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300">
  
  {
    loader ? <BeatLoader color='white' size={5} /> : "Sign Up"
  }
</button>


    <p className="text-gray-600 font-bold font-serif tracking-wide m-0 text-center text-sm md:text-base">
      Already registered?{" "}
      <span
        onClick={handleClose}
        className="hover:cursor-pointer inline-block hover:underline text-blue-500"
      >
        Login
      </span>
    </p>
  </div>
</div>



       </div>
       <ToastContainer/>
    </>
  )
}
