import React from 'react'
import BasicTabs from './Tabs'

import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";


const Developers = () => {
  return (
    <div className='md:pt-10 px-3  bg-blue-200'>

         <h1 className='text-center pt-20 md:pt-10'> <span className='md:text-2xl text-xl  text-[#7991a2]   font-bold '> Made for Humans</span> </h1>
         <h1 className='md:text-5xl md:pb-8 hidden md:block text-center text-[#093554] md:pt-4  tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px]' > Developer-first </h1>
         <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl text-center md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Developer First </h1>
         <h1 className=' md:text-lg text-lg text-[#093554] md:pb-10 text-center'>  We turn complex infrastructure into simple code so you can focus <br className='hidden md:block'/> on building market-defining products.  <span className='font-bold'> Plus it’s free to get started.  </span> </h1>

         <div className=' hidden md:flex justify-center items-center'>
        <BasicTabs/>

        </div>
         <div>
         
         </div>


         <div>

         <div className='hidden  md:block'>

  
<div className='flex justify-center items-center  space-x-5'>
     <div className='pt-20 pb-20'>
     <Button className=" bg-[#f7ab1b] border-[#f7ab1b] text-base  hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined">Get In Touch <BiChevronRight size={30} /> </Button>
     </div>
     <div className='pt-20 pb-20'>
     <Button className=" border border-white text-base hover:border-white hover:bg-blue-300  text-white px-6 py-3 " variant="outlined"> Start Building  </Button>

     </div>

    </div>

</div>

           
         </div>

         <div className='pt-10 pb-20 md:hidden'>
    <div className='w-full h-full mb-5 px-1'>
    <button  class="fluid ui button orange "> Get in Touch  </button>
    </div>
    <div className='w-full h-full px-1'>
    <button  class="fluid ui button blue "> Start Building</button>
    </div>

</div>
          
   
      
    </div>
  )
}

export default Developers
