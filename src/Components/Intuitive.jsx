
import React from 'react'
import styles from '../style'
import Secondvideo from '../video/connect.webm'
import { BiChevronRight } from "react-icons/bi"
import Button from '@mui/material/Button'

const Intuitive = () => {
  return (

    <div className='w-full mt-12 md:mt-0 bg-violet-500 text-white  '>
    <section id="home" className={`flex md:px-28  md:flex-row  flex-col sm:py-32 py-6`}>
<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
  <div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
<div>

 <h1 className=' hidden md:block md:text-5xl md:pt-5  md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[50px] font-extrabold '> Make onboarding <br/> intuitive </h1>
 <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-4xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Make onboarding intuitive </h1>
 <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-full px-4 ' autoPlay muted loop src={Secondvideo} />

</div>

 <p className='font-normal pl-3 md:pl-0    text-lg'>Bank statements uploads and micro-deposits are <br/> prone to errors and take forever. Combining open <br/> banking with machine learning, <span className='font-semibold'>  Verification  </span><br/> delivers a faster onboarding experience, with 90%+ <br/>
  good actors successfully verified in three clicks.
  </p>
  <div>

  <p className='font-normal pl-3 md:pl-0 md:pt-6 pt-6 md:pb-  text-lg'> <span> <i class="fa-solid fa-square-check"></i> </span>  &nbsp;  Live across the UK, Europe, and Australia</p>
  </div>
  <div>
  <p className='font-normal pl-3 md:pl-0 md:pt-4  pt-4  text-lg'> <span> <i class="fa-solid fa-square-check"></i> </span>  &nbsp;   Live across the UK, Europe, and Australia</p>
  </div>

  <div className='pt-10 hidden md:block'>
  <Button className=" bg-[#f7ab1b] border-[#f7ab1b]  text-base hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined"> Contact Sales <BiChevronRight size={30} /> </Button>
  </div>
  {/* For Mobile */}
<div className=' pt-10 md:hidden px-2'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button orange ">  Contact Us </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button blue "> Documentation </button>
    </div>

</div>



</div>
<div>

</div>

  </div>

</div>

<div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:pt-16 my-5 relative`}>
  <div className='hidden md:block pb-5 '>

<video  className='w-full    rounded-3xl  ' autoPlay muted loop src={Secondvideo} />

</div>

</div>

</section>
  
</div>
 
  )
}

export default Intuitive