import React from 'react'
import BasicTabs from './Tabs'

import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
import Testimonials from './Testimonials';


const Developers = () => {
  return (
    <div className='md:pt-10 pt-5 pb-20 md:pb-0   px-3 bg-slate-100 '>

         <h1 className='text-center pt-20 md:pt-20'> <span className='md:text-2xl text-xl text-[#7991a2]     font-bold '> Made for Humans</span> </h1>
         <h1 className='md:text-5xl md:pb-8 hidden md:block text-[#093554] text-center  md:pt-4  tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px]' > Developer-first </h1>
         <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl text-center md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Developer First </h1>
         <h1 className=' md:text-lg text-lg text-[#093554] md:pb-10 text-center'>  We turn complex infrastructure into simple code so you can focus <br className='hidden md:block'/> on building market-defining products.  <span className='font-bold'> Plus it’s free to get started.  </span> </h1>

         <div className=' hidden md:flex justify-center items-center'>
        <BasicTabs/>
        </div>

        <div className='md:px-48  pt-20'>
        <Testimonials/>
        </div>
         <div>
         
         </div>


         <div>

         <div className='hidden  md:block'>

  
<div className='flex justify-center items-center  space-x-5'>
     <div className='pt-20 pb-20'>
     <Button className="  bg-sky-600 text-base   hover:bg-sky-500  text-white px-6 py-2 " variant="outlined"> Get in Touch <BiChevronRight size={30} /> </Button>
     </div>
     <div className='pt-20 pb-20'>
     <Button className="  border-sky-600 text-base hover:text-white  hover:bg-sky-600   px-6 py-3 " variant="outlined"> Start Building  </Button>

     </div>

    </div>

</div>

           
 </div>

    </div>
  )
}

export default Developers
