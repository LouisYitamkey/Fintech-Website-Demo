import React from 'react'
import Crypto from '../images/crypto.svg'
import Ecommerce from '../images/e-commerce.svg'
import Finance from '../images/finance.svg'


const Usecases = () => {
  return (
    <div className='py-20 md:pt-32 md:px-52 md:pb-36 bg-blue-500 w-full'>

        <div className='pl-3 md:pl-0'>
        <h1> <span className='md:text-2xl text-xl   md:pl-1 text-[#093554]  font-bold '> Powerful Use Cases</span> </h1>
        <h1 className='md:text-5xl hidden md:block text-white md:py-6  text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] '> Smarter financial services for every industry </h1>
        <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-white text-4xl  md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Build better payments <br/> experiences </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 pl-3 md:pl-0  md:space-x-40 '>
        
            <div className=''>
                   
            <img  className='w-16 bg-white px-2 py-2 mb-4 mt-5 rounded-lg' src={Crypto}/>
            <p className='font-bold text-xl text-white '> Crypto </p>
            <p className='pt-3 tracking-wide text-lg text-white'>Elevate the entire trading experience <br className=' md:block'/> with instant deposits and withdrawals.</p>
            <h1 className='text-xl font-bold text-decoration hover:no-underline decoration-1  underline underline-offset-8  pb-16 md:pb-0 pt-5  hover:cursor-pointer md:pt-8'> Explore Crypto  <i class="fa-solid fa-chevron-right"></i></h1>


            <img  className='w-16 md:mt-16 bg-white mb-4 rounded-lg' src={Finance}/>
            <p className='font-bold text-xl text-white '> Financial Services</p>
            <p className='pt-3 text-lg tracking-wide text-white'>Elevate the entire trading experience <br/> with instant deposits and withdrawals.</p>
            <h1 className='text-xl font-bold text-decoration hover:no-underline  decoration-1  underline underline-offset-8 pb-16 md:pb-0 pt-5  hover:cursor-pointer   md:pt-8'> Explore Finance <i class="fa-solid fa-chevron-right"></i></h1>
       
            </div>
             
             
              
            <div>
            <div className=''>
                   
                   <img  className='w-16 bg-white mt-5  mb-4 rounded-lg' src={Ecommerce}/>
                   <p className='font-bold text-xl text-white '> E-commerce</p>
                   <p className='pt-3 tracking-wide text-lg text-white'>Elevate the entire trading experience <br className=' md:block'/> with instant deposits and withdrawals.</p>
                   <h1 className='text-xl font-bold text-decoration hover:no-underline  decoration-1  underline underline-offset-8 pb-16 md:pb-0 pt-5 hover:cursor-pointer  md:pt-8'> Explore Ecommerce <i class="fa-solid fa-chevron-right"></i></h1>
       
       
                   <img  className='w-16 md:mt-16 bg-white mb-4 rounded-lg' src={Crypto}/>
                   <p className='font-bold text-xl text-white '> Investment Services</p>
                   <p className='pt-3 text-lg tracking-wide text-white'>Elevate the entire trading experience <br className=' md:block'/> with instant deposits and withdrawals.</p>
                   <h1 className='text-xl font-bold text-decoration hover:no-underline  decoration-1 underline underline-offset-8  md:pb-0 pt-5  hover:cursor-pointer   md:pt-8'> Explore Crypto <i class="fa-solid fa-chevron-right"></i></h1>
              
                   </div>
              
            </div>

        </div>

    </div>
  )
}

export default Usecases