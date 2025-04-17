import React from 'react'
import child from '../assets/child.png'
import { useCountUp } from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



export const ClentMatter = () => {
    useCountUp({ ref: 'counter2', end: 15 , duration:'6' });
    useCountUp({ ref: 'counter2', end: 15 , duration:'10' });
    useCountUp({ ref: 'counter3', end: 150 , duration:'6'  });
    useCountUp({ ref: 'counter4', end: 15 , duration:'10' });
    useCountUp({ ref: 'counter5', end: 100 , duration:'6' });
    
  return (
    <> 
       <section className="py-5 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      
      <div>
        <h1 className="views text-[32px] font-bold text-primary"><span id="counter2" />K</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Happy Customers</p>
      </div>

      <div>
        <h1 className="views text-[32px] font-bold text-primary"><span id="counter3" />K</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Monthly Visitors</p>
      </div>

      <div>
        <h1 className="views text-[32px] font-bold text-primary"><span id="counter4" /></h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Countries Worldwide</p>
      </div>

      <div>
        <h1 className="views text-[32px] font-bold text-primary"><span id="counter5" />+</h1>
        <p className="happy text-[16px] leading-[150%] tracking-[0.01em] text-text">Top Partners</p>
      </div>
      
    </div>
  </div>
</section>


       <section className='py-5 bg-white'>
             <div className="container">
                   <div className="row justify-center align-items-center">
                       <div className="col-lg-6">
                         <h4 data-aos="zoom-in" data-aos-duration="2000" className='every'>Every Client Matters</h4>

                         <p data-aos="zoom-in" data-aos-duration="2500" className='problems py-4'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

                         <a data-aos="zoom-in" data-aos-duration="2000" className='more' href="">Learn More</a>
                       </div>
                       <div className="col-lg-6">
                          <img data-aos="zoom-in" data-aos-duration="2500" className='img-fluid' src={child} alt="child" />
                       </div>
                   </div>
             </div>
       </section>
    </>
  )
}
