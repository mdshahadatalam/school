import React from 'react'
import card1 from '../assets/product-cover-124 sec-.png'
import card2 from '../assets/product-cover-125 sec-.png'
import card3 from '../assets/product-cover-126 sec-.png'
import { CiSaveDown2 } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { GiSelfLove } from 'react-icons/gi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FaRegEye } from 'react-icons/fa'

export const Teacher = () => {
  return (
    <>
       <section id='product' className='py-5 bg-[#FFF2F3]'>
           <div className="container">

              <div>
                   <small className='font-custom font-bold text-sm leading-[171%] tracking-[0.01em] text-[#96BB7C]'>Practice Advice</small>
                   <p className='font-bold text-[40px] leading-[125%] tracking-[0.01em]'>Our Experts Teacher</p>
                   <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[#737373]'>Problems trying to resolve the conflict between <br />
                   the two major realms of Classical physics: Newtonian mechanics </p>
              </div>

                <div className="row pt-3">
                     <div className="col-lg-4 col-md-4 col-sm-6 mt-3">

                          <div className=' bg-white p-2 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-x-105 cursor-pointer'>

                               <div className='d-flex justify-center position-relative'>
                               <img className='img-fluid shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-y-105 ' src={card1} alt="image" />
                                  
                                <p className='position-absolute left-3 top-2 rounded-[3px] px-[10px] w-[51px] h-[24px shadow-[0_2px_4px_0_rgba(0,_0,_0,_0.1)] bg-danger font-bold text-[14px] leading-[171%] tracking-[0.01em] text-white'>Sale</p>

                                <div className='d-flex position-absolute bottom-7'>
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center bg-white align-items-center mx-1 hover:bg-black hover:text-[#96BB7C]'><GiSelfLove /></span>  
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center bg-white align-items-center mx-1 hover:bg-black hover:text-[#96BB7C]'><MdProductionQuantityLimits /></span>
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center  bg-white align-items-center mx-1 hover:text-[#96BB7C]'><FaRegEye /></span>
                                </div>

                               </div>

                               <div className='pt-2'>
                               <small className='font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#96BB7C]'>Training Courses</small>
                               <p className='font-bold text-base leading-[150%] tracking-[0.01em]'>Get Quality Education</p>
                               <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[#737373]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                                <div className='d-flex align-items-center gap-x-2'>
                                      <span className='text-[#737373]'><CiSaveDown2/> </span>
                                      <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373]'>15 Sales</p>
                                </div>


                                 <p className='font-bold text-base leading-[150%] tracking-[0.01em] text-[#BDBDBD]'>$16.48  <span className='text-[#FFAB71]'>$6.48</span> </p>

                                  <button className='d-flex align-items-center learnMore transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-105 cursor-pointer '>Learn More <span className='text-xl'><IoIosArrowForward /></span></button>

                               </div>
                                 
                          </div>

                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                         
                          <div className=' bg-white p-2 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-x-105 cursor-pointer'>

                               <div className='d-flex justify-center position-relative '>
                               <img className='img-fluid shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-y-105 ' src={card2} alt="image" />
                                
                               <p className='position-absolute left-3 top-2 rounded-[3px] px-[10px] w-[51px] h-[24px shadow-[0_2px_4px_0_rgba(0,_0,_0,_0.1)] bg-danger font-bold text-[14px] leading-[171%] tracking-[0.01em] text-white'>Sale</p>


                               <div className='d-flex position-absolute bottom-7'>
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center bg-white align-items-center mx-1 hover:bg-black hover:text-[#96BB7C]'><GiSelfLove /></span>  
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center bg-white align-items-center mx-1 hover:bg-black hover:text-[#96BB7C]'><MdProductionQuantityLimits /></span>
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center  bg-white align-items-center mx-1 hover:text-[#96BB7C]'><FaRegEye /></span>
                                </div>

                               </div>

                               <div className='pt-2'>
                               <small className='font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#96BB7C]'>2,769 online courses</small>
                               <p className='font-bold text-base leading-[150%] tracking-[0.01em]'>Our Popular Courses</p>
                               <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[#737373]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                                <div className='d-flex align-items-center gap-x-2'>
                                      <span className='text-[#737373]'><CiSaveDown2/> </span>
                                      <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373]'>15 Sales</p>
                                </div>


                                 <p className='font-bold text-base leading-[150%] tracking-[0.01em] text-[#BDBDBD]'>$16.48  <span className='text-[#FFAB71]'>$6.48</span> </p>

                                 <button className='d-flex align-items-center learnMore transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-105 cursor-pointer '>Learn More <span className='text-xl'><IoIosArrowForward /></span></button>

                               </div>
                                 
                          </div>
                     </div>

                     <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                           
                     <div className=' bg-white p-2 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-x-105 cursor-pointer'>

                   <div className='d-flex justify-center position-relative'>
                    <img className='img-fluid shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-y-105 ' src={card1} alt="image" />

                    <p className='position-absolute left-3 top-2 rounded-[3px] px-[10px] w-[51px] h-[24px shadow-[0_2px_4px_0_rgba(0,_0,_0,_0.1)] bg-danger font-bold text-[14px] leading-[171%] tracking-[0.01em] text-white'>Sale</p>


                    <div className='d-flex position-absolute bottom-7'>
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center bg-white align-items-center mx-1 hover:bg-black hover:text-[#96BB7C]'><GiSelfLove /></span>  
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center bg-white align-items-center mx-1 hover:bg-black hover:text-[#96BB7C]'><MdProductionQuantityLimits /></span>
                                      <span className='w-[40px] h-[40px] rounded-full d-flex justify-center  bg-white align-items-center mx-1 hover:text-[#96BB7C]'><FaRegEye /></span>
                                </div>

                   </div>

                 <div className='pt-2'>
                   <small className='font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#96BB7C]'>Expert instruction</small>
                     <p className='font-bold text-base leading-[150%] tracking-[0.01em]'>Most Popular Courses</p>
                     <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[#737373]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                    <div className='d-flex align-items-center gap-x-2'>
                      <span className='text-[#737373]'><CiSaveDown2/> </span>
                    <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373]'>15 Sales</p>
                    </div>


                         <p className='font-bold text-base leading-[150%] tracking-[0.01em] text-[#BDBDBD]'>$16.48  <span className='text-[#FFAB71]'>$6.48</span> </p>

                         <button className='d-flex align-items-center learnMore transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-105 cursor-pointer '>Learn More <span className='text-xl'><IoIosArrowForward /></span></button>



                       </div>
  
                     </div>
                     </div>
                </div> 
           </div>
       </section>
    </>
  )
}
