import React, { useState } from 'react'
import { CoursePart } from './CoursePart'
import { useCountUp } from 'react-countup';
import { Rejistration } from '../Pages/Rejistration';

export const Banner = () => {
  useCountUp({ ref: 'counter', end: 30, duration:'8' });
  const [show, setShow] = useState(false)
  const handleShow =()=>{
    setShow(true)
  }

  const handleClose =()=>{
    setShow(false)
  }
  return (

    
    <>
         <section id='home' className='banner py-5 bg-[#FAFAFA]'>
               <div className="container">
                     <div className="row">

                            {/* banner start */}
                          <div className="col-lg-6 pt-10">
                               <small onClick={handleShow} className='font-bold text-base leading-[150%] tracking-[0.01em] text-primary cursor-pointer hover:underline'>Join Us</small>
                               <p  className='font-bold text-5xl leading-[138%] tracking-[0em] py-4'><span id="counter" /> K+ STUDENTS TRUST US</p>

                               <p  className='font-normal text-[20px] leading-[150%] tracking-[0.01em] text-second-text pb-3 font-serif'>Every day brings with it a fresh set of learning possibilities.</p>

                                 <div>
                                      <button className='rounded-[5px] w-[193px] h-[52px] bg-[#7eb556]  font-custom font-bold text-[14px] leading-[157%] tracking-[0.01em] text-white text-center shadow-md     transition-all duration-300 hover:bg-[#56b556] hover:scale-105'>Get Quote Now</button>
                                       <button className='border border-[#7eb556]  rounded-[5px]  w-[162px] h-[52px] font-custom font-bold text-[14px] leading-[157%] tracking-[0.01em] text-[#96bb7c] text-center mx-2 transition-all duration-300 hover:bg-[#7eb556]   hover:scale-105 hover:text-white'>Learn More</button>
                                 </div>
                          </div>
                          <div className="col-lg-6"></div>
                            {/* banner end */}
                     </div>
               </div>
         </section>
         <CoursePart/>

         {
             show? <Rejistration handleClose={handleClose}/> : null
         }
    </>
  )
}
