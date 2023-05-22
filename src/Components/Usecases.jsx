import React from 'react'
import Crypto from '../images/crypto.svg'
import Ecommerce from '../images/e-commerce.svg'
import Finance from '../images/finance.svg'


const Usecases = ( ) => {
  return (
    <div className=' pt-20  pb-6 md:pt-32 md:px-52 md:pb-36  w-full'>

        <div className='pl-3 md:pl-0'>
        <span className='md:text-xl text-base  ml-3 bg-sky-500 px-5    rounded-full text-white  md:font-bold '> Powerful Use Cases</span> 
        <h1 className='md:text-5xl hidden md:block text-[#093554] md:py-6  text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] '> Smarter financial services for every industry </h1>
        <h1 className='md:text-7xl text-[#093554] md:hidden pb-10 pt-6  text-4xl  md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Build better payments <br/> experiences </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 pl-3 md:pl-0  md:space-x-40 '>
        
            <div className=''>
                   
            <img  className='w-16 bg-slate-200 px-2 py-2 mb-4 mt-5 rounded-lg' src={Crypto}/>
            <p className='font-bold text-xl  '> Microfinance / Savings and Loans Companies </p>
            <p className='pt-3 pb-2 text-[#849aa9] tracking-wide text-lg '>Elevate the entire trading experience <br className=' md:block'/> with instant deposits and withdrawals . </p>
            <div>
                
            </div>
            <p className='text-xl text-decoration  decoration-1 underline md:no-underline  md:hover:underline underline-offset-8  text-sky-500  pb-16 md:pb-0 pt-5   hover:cursor-pointer md:pt-2'> Explore Microfinance  <i class="fa-solid fa-chevron-right"></i></p>

            <img  className='w-16 md:mt-16 mt-10  bg-slate-200 mb-4 rounded-lg' src={Finance}/>
            <p className='font-bold text-xl  '> Fintech </p>
            <p className='pt-3 pb-2 text-[#849aa9] md:pb-4 text-lg tracking-wide '>Elevate the entire trading experience <br/> with instant deposits and withdrawals.</p>
            <p className='text-xl text-decoration  decoration-1 underline md:no-underline  md:hover:underline underline-offset-8  text-sky-500  pb-16 md:pb-0 pt-5  hover:cursor-pointer md:pt-2'> Explore Fintech <i class="fa-solid fa-chevron-right"></i></p>
       
            </div>
             
             
              
            <div>
            <div className=''>
                   
                   <img  className='w-16 bg-slate-200 mt-10 md:mt-4  mb-4 rounded-lg' src={Ecommerce}/>
                   <p className='font-bold text-xl   '> Neobanks</p>
                   <p className='pt-3 text-[#849aa9] pb-2 md:pb-4 tracking-wide text-lg '>Elevate the entire trading experience <br className=' md:block'/> with instant deposits and withdrawals.</p>
                   <p className='text-xl text-decoration underline md:no-underline decoration-1  md:hover:underline underline-offset-8  text-sky-500  pb-16 md:pb-0 pt-5   hover:cursor-pointer md:pt-2'> Neobanks  <i class="fa-solid fa-chevron-right"></i></p>
          
       
       
                   <img  className='w-16 md:mt-16 mt-10 bg-slate-200 mb-4 rounded-lg' src={Crypto}/>
                   <p className='font-bold text-xl  '> Buy Now Pay Later</p>
                   <p className='pt-3 text-[#849aa9] pb-2 md:pb-4 text-lg tracking-wide '>Elevate the entire trading experience <br className=' md:block'/> with instant deposits and withdrawals.</p>
                   <p className='text-xl text-decoration underline md:no-underline decoration-1  md:hover:underline underline-offset-8  text-sky-500 pb-16 md:pb-0 pt-5  hover:cursor-pointer md:pt-2'> Explore Buy Now Pay Later  <i class="fa-solid fa-chevron-right"></i></p>
                   </div>
              
            </div>

        </div>

    </div>
  )
}

export default Usecases