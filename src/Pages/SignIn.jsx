import React, { useState } from 'react'
import {RiAccountCircleLine, RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineMail} from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Feuature/Slice/LoginSlice';
import { toast, ToastContainer } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { PasswordReset } from '../Reset/PasswordReset';
import { GoogleSignIn } from '../Google/GoogleSignIn';


export const SignIn = ({handleSignInClose}) => {
  const auth = getAuth();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  

  const handleLogin = () => {
    setLoader(true);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoader(false);
        const user = userCredential.user;
  
        if (user.emailVerified) {
          dispatch(loggedInUser(user));
          localStorage.setItem("user", JSON.stringify(user));
  
          setEmail("");
          setPassword("");
  
          toast.success('Welcome 🥰', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
  
          // Optionally: navigate('/')
        } else {
          toast.error('Your email is not verified', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
        toast.error('Invalid credentials', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
  };
  
  return (
    <>
       <div className='w-full h-screen d-flex justify-content-center align-items-center bg-black position-fixed top-0 position-relative'>
                           
                        <div>
                            <span onClick={handleSignInClose} className='w-[42px] h-[42px] d-inline-block rounded-full justify-content-center align-items-center d-flex text-2xl border-1 border-danger text-white position-absolute top-6 right-10 hover:cursor-pointer rotate-180 transition duration-300 hover:rotate-360 '><RxCross2 /></span>
                        </div>
       
                  
<div className="text-black w-full max-w-md mx-auto bg-white shadow-lg rounded-md">
  <div className="p-3 md:p-8 flex flex-col gap-5 items-center justify-center">
    <p className="text-gray-600 font-bold font-serif tracking-wide text-center text-sm md:text-base m-0">
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

    <div>
    <p className="text-gray-600 font-bold font-serif tracking-wide text-center text-sm md:text-base m-0 ">
      Don’t have a registration?{" "}
      <span
        onClick={handleSignInClose}
        className="cursor-pointer inline-block hover:underline text-blue-500"
      >
        Register
      </span>
    </p>

       <PasswordReset/>
       <GoogleSignIn/>
    </div>

  </div>
</div>

</div>

  <ToastContainer/>
    </>
  )
}
