import React from 'react'
import BasicTabs from './Tabs'


const Developers = () => {
  return (
    <div className='md:pt-10 px-3  bg-blue-200'>

         <h1 className='text-center pt-20 md:pt-0'> <span className='md:text-2xl text-xl  text-[#7991a2]   font-bold '> Made for Humans</span> </h1>
         <h1 className='md:text-5xl md:pb-8 hidden md:block text-center text-[#093554] md:pt-4  tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px]' > Developer-first </h1>
         <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl text-center md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Developer First </h1>
         <h1 className=' md:text-lg text-lg text-[#093554] md:pb-10 text-center'>  We turn complex infrastructure into simple code so you can focus <br className='hidden md:block'/> on building market-defining products.  <span className='font-bold'> Plus it’s free to get started.  </span> </h1>

         <div className=' hidden md:flex justify-center items-center'>
        <BasicTabs/>

        </div>
         

   
      
    </div>
  )
}

export default Developers
