
import React from 'react'
import styles from '../style'
import Secondvideo from '../video/connect.webm'
import Button from '@mui/material/Button'
import { BiChevronRight } from "react-icons/bi"

const Bankauth = () => {
  return (

    <div className='w-full pt-20 md:pt-0 pb-10 md:pb-0 md:mt-0  bg-[#11243e]  '>
    <section id="home" className={`flex md:px-28  md:flex-row  flex-col sm:py-16 `}>
<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
  <div className="flex flex-row items-center   md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
<div>
<span className='md:text-xl text-base ml-3  bg-sky-500 px-5    rounded-full text-white  md:font-bold '> Bank Authentication</span> 
 <h1 className=' hidden md:block md:text-5xl md:pt-5 text-white md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[50px] font-extrabold '> Slash your fraud risk </h1>
 <h1 className='md:text-7xl md:hidden pb-10 pt-5 text-white text-4xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Slash your fraud risk</h1>
 <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-full px-4 ' autoPlay muted loop src={Secondvideo} />

</div>

 <p className='font-normal pl-3 md:pl-0 text-slate-200   text-lg'>  Guarantee source and destination of funds. Verification introduces Strong Customer Authentication checks from the bank into your verification flow to combat identity theft.
  </p>
  <div>

  <p className='font-normal pl-3 md:pl-0 md:pt-6 pt-6 text-white  text-lg'> <span className='text-white'>  <i class="fa-solid fa-square-check"></i> </span>  &nbsp;  Verify payment setup </p>
  </div>
  <div>
  <p className='font-normal pl-3 md:pl-0 md:pt-4 text-white  pt-4  text-lg'> <span className='text-white'> <i class="fa-solid fa-square-check"></i> </span>  &nbsp;  Eliminate chargebacks  </p>
  </div>

  <div className=' hidden md:block mt-10 md:mt-10 space-x-5  '>
  <Button className=" bg-sky-600 hover:bg-sky-500 text-base     text-white px-6 py-3 " > See How It Works <BiChevronRight size={25} /> </Button>
  <Button className=" text-white  text-base hover:text-white  hover:bg-sky-600  px-6 py-3.5 " variant="outlined"> Contact Us  </Button>
</div>

{/* For Mobile */}
<div className=' pt-10 px-2 md:hidden'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button blue ">  Contact Us </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button  "> Documentation </button>
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

export default Bankauth
