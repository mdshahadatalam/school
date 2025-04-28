import React from 'react'
import { BsFillTrainFrontFill } from 'react-icons/bs'
import { FaBook, FaGraduationCap } from 'react-icons/fa'

export const CoursePart = () => {
  return (
    <>
                      <section className='pt-5 bg-[#FAFAFA] py-5'>
                             <div className="container">
                                                 <div className="row">
                                            {/* 1s part  */}
                                             <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
         
                                               <div  className=' bg-white shadow-lg px-4 py-3 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-105 cursor-pointer'>
                                               <div className='w-[72px] h-[72px] bg-[#E74040] rounded-full           d-flex justify-center align-items-center my-3'>
                                                 <span className='text-white text-3xl'><FaGraduationCap /></span>
                                               </div>
         
                                               <h4 className='font-bold text-[24px] leading-[133%] tracking-normal text-[color:var(--text-color)]" style="font-family: var(--font-family);'>Expert instruction</h4>
         
                                               <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[color:var(--second-text-color)]" style="font-family: var(--font-family); '>The gradual accumulation of  information about atomic and small-scale behaviour...</p>
                                               </div>
                                               
                                             </div>
         
                                             {/* 1st part end  */}
         
         
                                             {/* 2nd part  */}
                                             <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                                               
                                                <div className=' bg-white shadow-lg px-4 py-3 transition-all    duration-300 hover:bg-[var(--primary-color)] hover:scale-105 cursor-pointer'>
                                                      
                                               <div className='w-[72px] h-[72px] bg-[#E74040] rounded-full   d-flex justify-center align-items-center my-3'>
                                                 <span className='text-white text-3xl'><BsFillTrainFrontFill /></span>
                                               </div>
         
                                               <h4 className='font-bold text-[24px] leading-[133%] tracking-normal text-[color:var(--text-color)]" style="font-family: var(--font-family);'>Training Courses</h4>
         
                                               <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[color:var(--second-text-color)]" style="font-family: var(--font-family); '>The gradual accumulation of  information about atomic and small-scale behaviour...</p>
                                                </div>

                                            </div>
                                             {/* 2nd part end  */}


                                             {/* 3rd part  */}

                                             <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                                               
                                               <div  className=' bg-white shadow-lg px-4 py-3 transition-all    duration-300 hover:bg-[var(--primary-color)] hover:scale-105 cursor-pointer'>
                                                     
                                              <div className='w-[72px] h-[72px] bg-[#E74040] rounded-full   d-flex justify-center align-items-center my-3'>
                                                <span className='text-white text-3xl'><FaBook /></span>
                                              </div>
        
                                              <h4 className='font-bold text-[24px] leading-[133%] tracking-normal text-[color:var(--text-color)]" style="font-family: var(--font-family);'>Expert instruction</h4>
        
                                              <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[color:var(--second-text-color)]" style="font-family: var(--font-family); '>The gradual accumulation of  information about atomic and small-scale behaviour...</p>
                                               </div>

                                           </div>
                                             {/* 3rd part end */}

                                             
                                               </div>
                                             </div>
                                         </section>
                                          
                                     {/* course-end  */}
         
    </>
  )
}
