import React from 'react'
import child from '../assets/child.png'

export const ClentMatter = () => {
  return (
    <> 
       <section className="py-5 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      
      <div>
        <h1 className="views text-[32px] font-bold text-primary">15K</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Happy Customers</p>
      </div>

      <div>
        <h1 className="views text-[32px] font-bold text-primary">150K</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Monthly Visitors</p>
      </div>

      <div>
        <h1 className="views text-[32px] font-bold text-primary">15</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Countries Worldwide</p>
      </div>

      <div>
        <h1 className="views text-[32px] font-bold text-primary">100+</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Top Partners</p>
      </div>
      
    </div>
  </div>
</section>


       <section className='py-5 bg-white'>
             <div className="container">
                   <div className="row justify-center align-items-center">
                       <div className="col-lg-6">
                         <h4 className='every'>Every Client Matters</h4>

                         <p className='problems py-4'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

                         <a className='more' href="">Learn More</a>
                       </div>
                       <div className="col-lg-6">
                          <img className='img-fluid' src={child} alt="child" />
                       </div>
                   </div>
             </div>
       </section>
    </>
  )
}
