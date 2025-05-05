import React, { useState } from 'react'
import {MdOutlineMail} from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
export const PasswordReset = () => {
     
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [loader, setLoader] = useState(false)
     const handleShow =()=>{
        setShow(true)
     }
      
     const handleClose =()=>{
        setShow(false)
     }


     const handleSubmit =()=>{
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
  .then(() => {
     console.log("Password reset email sent successfully");
     setEmail("")
         
            toast.success('Password reset email sent successfully', {
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

       setTimeout(() => {
        setShow(false)
       }, 2500);
    //    alert("Password reset email sent successfully")
    
  })
  .catch((error) => {
     console.log(error.message);
    
  });


        
     }

  return (
    <>
    
        <p onClick={handleShow} className='m-0 text-gray-600 font-bold font-serif tracking-wide text-center text-sm md:text-base hover:text-blue-500 hover:underline hover:cursor-pointer'>forget Password?</p>



   {
    show ? <div className="w-full min-h-screen fixed top-0 right-0 bg-black flex items-center justify-center px-4">

            <div>
             <span  onClick={handleClose} className='w-[42px] h-[42px] d-inline-block rounded-full justify-content-center align-items-center d-flex text-2xl border-1 border-danger text-white position-absolute top-6 right-10 hover:cursor-pointer rotate-180 transition duration-300 hover:rotate-360 '><RxCross2 /></span>
            </div>

          
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
      <p className="text-white font-bold font-serif tracking-wide text-center text-sm md:text-base py-2">
        Enter your email address and we will send you a link to reset your password.
      </p>
  
      <div className="relative w-full sm:w-[80%] md:w-[60%] mx-auto mt-4">
        <MdOutlineMail className="absolute top-3.5 left-3 text-[1.5rem] text-white" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="peer border border-gray-600 bg-transparent rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300 text-white placeholder-white"
        />
      </div>
  
      <div className="flex justify-center items-center mt-4">
        <button onClick={handleSubmit} className="bg-white text-black w-[200px] h-[40px] rounded-md hover:bg-gray-200 transition shadow-lg">
            {
                loader ? <BeatLoader color='white' size={5} /> : "Submit"
            }
        </button>
      </div>
    </div>
  </div> : null
   }

    <ToastContainer/>

    </>
  )
}
