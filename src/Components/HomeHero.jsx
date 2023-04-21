import React from 'react'
import styles from '../style'
import Video from '../video/herovideo.webm'
import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";


const Homehero = () => {
  return (
    <div className='w-full h-full '>
          <section id="home" className={`flex md:px-20  md:flex-row  flex-col sm:py-1 py-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
<div className='md:mb-28 mt-5 md:mt-20'>
<video className='w-full h-full' src={Video} autoPlay muted loop />

</div>
    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
         
        </div>

     
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0  my-5 relative`}>
        <div>
        <h1 className='md:text-7xl tracking-wide text-5xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[60px] '> Instant access to <br/> open banking</h1>

     <p className=' pt-7 md:pt-10 text-lg text-[#849aa9]   px-3 md:leading-[30px]  md:px-0  md:font-medium' >
      Easily integrate next-generation payments and financial data <br className='hidden md:block'/> into any app. Build powerful products your customers love.

     </p>
  


     {/* For Desktop */}
     
<div className='hidden md:block'>

<div className='flex  space-x-5'>
     <div className='pt-10'>
     <Button className=" bg-[#f7ab1b] border-[#f7ab1b] text-base  hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined">Get In Touch <BiChevronRight size={30} /> </Button>
     </div>
     <div className='pt-10'>
     <Button className=" text-[#f7ab1b] border-[#f7ab1b] text-base hover:text-white hover:border-[#f7ab1b] hover:bg-[#f38d00]  px-6 py-3.5 " variant="outlined"> Start Building  </Button>

     </div>

    </div>

</div>


{/* For Mobile */}
<div className='pt-10 pb-10 md:hidden'>
    <div className='w-full h-full mb-5 px-3'>
    <button  class="fluid ui button orange "> Get in Touch  </button>
    </div>
    <div className='w-full h-full px-3'>
    <button  class="fluid ui button blue "> Start Building</button>
    </div>

</div>

    </div>

      </div>

    </section>
        
    </div>
  )
}

export default Homehero