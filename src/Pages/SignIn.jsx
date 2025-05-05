import React, { useState } from 'react'
import {RiAccountCircleLine, RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMail} from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Feuature/Slice/LoginSlice';
import { toast, ToastContainer } from 'react-toastify';
import { BeatLoader } from 'react-spinners';


export const SignIn = ({handleSignInClose}) => {
  const auth = getAuth();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  
  const handleLogin = ()=>{
    setLoader(true)

   signInWithEmailAndPassword(auth, email, password)
   .then((user) => {
    setLoader(false)
    if(user.user.emailVerified == true){
      dispatch(loggedInUser(user))
      localStorage.setItem("user",JSON.stringify(user))
      // navigate('/')

      setEmail("");
      setPassword("");

       toast.success('welcome🥰', {
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
    }else{
      setLoader(false)
       toast.error('Your email is not verified', {
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
    }
    
    
   })
   .catch((error) => {
    console.log(error);
    setLoader(false)
    toast.error('invalid-credential', {
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
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="peer border border-border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
      />
    </div>

    {/* Login Button */}
    <button onClick={handleLogin} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 h-12 text-white font-semibold rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
      {
        loader ? <BeatLoader color='white' size={5} /> : "Login"
      }
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

              <ToastContainer/>
    </>
  )
}
