import React, { useState } from 'react'
import {IoIosSearch} from "react-icons/io";
import logo from '../assets/navbar-brand sec-.png'
import { CiMenuFries } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router';
import { Rejistration } from '../Pages/Rejistration';
import { SignIn } from '../Pages/SignIn';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [show,setShow] = useState(false)
    const [showSign , setShowSign] = useState(false)
    const navigate = useNavigate()

     const handleShow = ()=>{
      setShow(true)
     }
     const handleClose =()=>{
      setShow(false)
     }

     const handleSignIn = ()=>{
      setShowSign(true)
     }
     const handleSignInClose =()=>{
      setShowSign(false)
     }
     
     const handleHome = ()=>{
      navigate("/")
     }

  return (
   <>
     <section className='py-3'>
     <div className="container">
     <nav className="flex items-center justify-between w-full relative">

{/* logo */}
<img src={logo} alt="logo"/>

{/* nav menus */}
<ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden pt-2">
      
      <Link className="lik" to="/">
      <li  className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">home</li>
      </Link>

   <a  className="lik" href="#product">
   <li onClick={handleHome} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]"> product us
    </li>
   </a>

    <a className="lik" href="#pricing">
    <li onClick={handleHome}  className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">pricing</li>
    </a>

   <a className="lik" href="#contact">
   <li onClick={handleHome}  className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">contact</li>
   </a>
</ul>

{/* search bar and community links */}
<div className="flex items-center gap-[10px]">

<div className="hidden sm:block">
  <button onClick={handleSignIn} className='font-bold text-[18px] leading-[157%] tracking-[0.01em] text-right text-[var(--primary-color)] mx-3'>
    login
  </button>
</div>

<div className="hidden sm:block">
  <button onClick={handleShow} className='rounded-[5px] px-[25px] py-[15px] w-[137px] h-[52px] bg-[var(--primary-color)] font-bold text-[14px] leading-[157%] tracking-[0.01em] text-[var(--light-background-color)] shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-105'>
   JOIN US 
  </button>

</div>


                 <CiMenuFries
                    className="text-[1.6rem] text-[#424242] cursor-pointer md:hidden flex"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>
</div>

{/* mobile sidebar */}
<aside
    className={` ${isMenuOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} md:hidden bg-[#a7a2a2] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

    <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
        <li  onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
        <li  onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
            us
        </li>
        <li  onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>

        <button  onClick={handleSignIn} className='font-bold text-[18px] leading-[157%] tracking-[0.01em] text-right text-white mx-3'>
           <span onClick={() => setIsMenuOpen(!isMenuOpen)}>login</span>
         </button>


  <button  onClick={handleShow} className='rounded-[5px] px-[25px] py-[15px] w-[137px] h-[52px] bg-[var(--primary-color)] font-bold text-[14px] leading-[157%] tracking-[0.01em] text-[var(--light-background-color)] shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-105'>
   <span onClick={() => setIsMenuOpen(!isMenuOpen)}> JOIN US</span>
  </button>
    </ul>

</aside>

</nav>
     </div>
     </section>

   {
     show ? <Rejistration handleClose={handleClose} setShowSign={setShowSign} /> : null
   }


  {
    showSign? <SignIn handleSignInClose={handleSignInClose} /> : null
  }


   </>
  )
}
