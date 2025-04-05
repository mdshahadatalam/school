import React, { useState } from 'react'
import {IoIosSearch} from "react-icons/io";
import logo from '../assets/navbar-brand sec-.png'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
   <>
     <section className='py-3'>
     <div className="container">
     <nav className="flex items-center justify-between w-full relative">

{/* logo */}
<img src={logo} alt="logo"/>

{/* nav menus */}
<ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden pt-2">
    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">home</li>
    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">product
        us
    </li>
    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">pricing</li>

    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-bold text-[16px] leading-[171%] tracking-[0.01em] text-center text-[var(--second-text-color)]">contact</li>
</ul>

{/* search bar and community links */}
<div className="flex items-center gap-[10px]">
    

    <div>
          <button className='font-bold text-[14px] leading-[157%] tracking-[0.01em] text-right text-[var(--primary-color)] mx-3'>login</button>
    </div>

      <div>
      <button className='rounded-[5px] px-[25px] py-[15px] w-[137px] h-[52px] bg-[var(--primary-color)] font-bold text-[14px] leading-[157%] tracking-[0.01em] text-[var(--light-background-color)] shadow-md'>JOIN US</button>
      </div>
</div>

{/* mobile sidebar */}
<aside
    className={` ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

    <div className="w-full relative mb-5">
        <input
            className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."/>
        <IoIosSearch
            className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
    </div>

    <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
            us
        </li>
        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
    </ul>

</aside>

</nav>
     </div>
     </section>
   </>
  )
}
