import React from 'react'
import cercle1 from '../assets/circle2.png'
import cercle2 from '../assets/circle.png'
import cercle3 from '../assets/circle1.png'

export const MyClient = () => {
  return (
    <>
        <section className='py-5'>
               <div className="container">
               <div>
                   <small className='font-custom font-bold text-sm leading-[171%] tracking-[0.01em] text-[#96BB7C]'>Practice Advice</small>
                   <p className='font-bold text-[40px] leading-[125%] tracking-[0.01em]'>Every Client Matters</p>
                   <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[#737373]'>Problems trying to resolve the conflict between <br />
                   the two major realms of Classical physics: Newtonian mechanics </p>
              </div>
                    <div className="row pt-5">
                         <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                             <div className='shadow-lg cursor-pointer p-4 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-y-105 font-serif hover:text-white rounded-md'>
                                  <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-center '>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>


                                   <div className='d-flex justify-center'>
                                      <img src={cercle1} alt="image" />

                                       <div className='ps-2'>
                                         <p className='font-bold text-[14px] leading-[171%] tracking-[0.01em] text-black m-0'>Regina Miles</p>
                                         <small className='font-normal text-[12px] leading-[133%] tracking-[0.02em]'>Designer</small>
                                       </div>
                                   </div>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                         <div className='shadow-lg cursor-pointer p-4 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-y-105 font-serif hover:text-white rounded-md'>
                                  <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-center '>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>


                                   <div className='d-flex justify-center'>
                                      <img src={cercle2} alt="image" />

                                       <div className='ps-2'>
                                         <p className='font-bold text-[14px] leading-[171%] tracking-[0.01em] text-black m-0'>Regina Miles</p>
                                         <small className='font-normal text-[12px] leading-[133%] tracking-[0.02em]'>Designer</small>
                                       </div>
                                   </div>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-6 mt-3">

                         <div className='shadow-lg cursor-pointer p-4 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-y-105 font-serif hover:text-white rounded-md'>
                                  <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-center '>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>


                                   <div className='d-flex justify-center'>
                                      <img src={cercle3} alt="image" />

                                       <div className='ps-2'>
                                         <p className='font-bold text-[14px] leading-[171%] tracking-[0.01em] text-black m-0'>Regina Miles</p>
                                         <small className='font-normal text-[12px] leading-[133%] tracking-[0.02em]'>Designer</small>
                                       </div>
                                   </div>
                             </div>
                         </div>
                    </div>
               </div>
        </section>
    </>
  )
}
