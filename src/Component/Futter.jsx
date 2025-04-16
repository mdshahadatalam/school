import React from 'react'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'

export const Futter = () => {
  return (
   <>
      <section className='py-5'>
           <div className="container">
               <div className="row">
                   <div className="col-lg-2 col-md-2 col-sm-4 mt-3">
                       <div>
                       <h4 className='font-bold text-[16px] leading-[150%] tracking-[0.01em]'>Company Info</h4>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>About Us</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Carrier</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>We are hiring</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Blog</p>
                       </div>
                   </div>
                   <div className="col-lg-2 col-md-2 col-sm-4 mt-3">
                   <div>
                       <h4 className='font-bold text-[16px] leading-[150%] tracking-[0.01em]'>Legal</h4>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>About Us</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Carrier</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>We are hiring</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Blog</p>
                       </div>
                   </div>
                   <div className="col-lg-2 col-md-2 col-sm-4 mt-3">
                   <div>
                       <h4 className='font-bold text-[16px] leading-[150%] tracking-[0.01em]'>Features</h4>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Business Marketing</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>User Analytic</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Live Chat</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Unlimited Support</p>
                       </div>
                   </div>
                   <div className="col-lg-2 col-md-2 col-sm-4 mt-3">
                   <div>
                       <h4 className='font-bold text-[16px] leading-[150%] tracking-[0.01em]'>Resources</h4>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>IOS & Android</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Watch a Demo</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>Customers</p>
                        <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>API</p>
                       </div>
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-6 mt-3">

                   <div>
                       <h4 className='font-bold text-[16px] leading-[150%] tracking-[0.01em]'>Company Info</h4>

                          <div className='d-flex align-items-center gap-x-2'>
                          <span className='text-[#96BB7C] text-2xl'><MdCall /></span>
                          <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>(480) 555-0103</p>
                          </div>

                          <div className='d-flex align-items-center gap-x-2'>
                          <span className='text-[#96BB7C] text-2xl'><CiLocationOn /></span>
                          <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>4517 Washington Ave. Manchester, 
                          Kentucky 39495</p>
                          </div>

                          <div className='d-flex align-items-center gap-x-2'>
                          <span className='text-[#96BB7C] text-2xl'><CiMail /></span>
                          <p className='m-0 font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373] py-1 cursor-pointer'>debra.holt@example.com</p>
                          </div>

                       </div>
                   </div>
               </div>
           </div>
      </section>




      {/* last-part  */}

      <section className="bg-[#ebe3e3]">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center pt-3 gap-3 text-center md:text-left">
      <p className="font-bold text-[14px] leading-[171%] tracking-[0.01em] text-[#737373]">
        Made With Love By Figmaland All Right Reserved
      </p>

      <div className="flex gap-3">
        <span className="text-[#96BB7C] text-2xl cursor-pointer">
          <FaFacebook />
        </span>
        <span className="text-[#96BB7C] text-2xl cursor-pointer">
          <FaInstagram />
        </span>
        <span className="text-[#96BB7C] text-2xl cursor-pointer">
          <FaTwitter />
        </span>
      </div>
    </div>
  </div>
</section>

   </>
  )
}
