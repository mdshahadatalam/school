import React from 'react'

export const Subcripe = () => {
  return (
    <>
       <section className='py-5'>
           <div className="container">
           <div className='text-center'>
                   <small className='font-custom font-bold text-sm leading-[171%] tracking-[0.01em] text-[#96BB7C]'>Newsletter</small>
                   <p className='font-bold text-[40px] leading-[125%] tracking-[0.01em]'>Watch our Courses</p>
                   <p className='font-normal text-[14px] leading-[143%] tracking-[0.01em] text-[#737373]'>Problems trying to resolve the conflict between <br />
                   the two major realms of Classical physics: Newtonian mechanics </p>
              </div>


              <form action="" className="flex justify-center px-4">
                <div className="flex flex-col sm:flex-row sm:items-center btn-group w-full max-w-[640px] py-5">
                    <input
                       className="border border-[#e6e6e6] rounded-[5px] sm:rounded-r-none w-full h-[50px] bg-[#f9f9f9]                  outline-none px-4"
                       type="email"
                       name="email"
                       id="email"
                       placeholder="Your Email"
                     />
             <button
               className="border border-[#e6e6e6] sm:border-l-0 rounded-[5px] sm:rounded-l-none w-full sm:w-[117px] h-[50px] bg-[#96BB7C] font-normal text-sm leading-[200%] tracking-[0.01em] font-sans text-white">
                    Subscribe
              </button>
            </div>
          </form>

           </div>
       </section>
    </>
  )
}
