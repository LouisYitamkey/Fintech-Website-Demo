import React from 'react'
import Capitalapihero from '../Components/Capitalapihero'
import Footer from '../Components/Footer'
import styles from '../style'
import Secondvideo from '../video/secondvideo.mp4'
import DigitalLendingvideo from '../video/digitallendingvideo.webm'
import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";

const Capitalapiheropage = () => {
  return (
    <div>
    <div className='w-full h-full  md:mt-0 bg-slate-200'>
  <section id="home" className={`flex md:px-28  md:flex-row  flex-col md:py-32 py-6`}>
<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
<div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
<div>


<h1 className=' hidden md:block md:text-6xl   md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[55px] font-extrabold '> Specialized Lenders, faster access to capital. </h1>

<div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-80  ' autoPlay muted loop src={DigitalLendingvideo} />

</div>
<h1 className='md:text-7xl md:hidden  pb-10 pt-2  text-4xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[60px] '> Specialized Lenders, faster access to capital  </h1>
<p className='font-normal pl-3 md:hidden   text-lg'>From term loans of credit and everything in between, our marketplace of
specialized lenders across multiple industries gives your customers easier, faster access to capital </p>
<span className='font-normal hidden md:block    text-lg'>From term loans of credit and everything in between, our marketplace of
specialized lenders across multiple industries gives your customers easier, faster access to capital </span>

<div className='md:mt-10 mt-10 mb-5 '> 



<div className=' hidden md:block mt-10 md:mt-10 space-x-5 '>
<Button className="  bg-sky-600 text-base   hover:bg-sky-500  text-white px-6 py-2 " variant="outlined"> See a Demo <BiChevronRight size={30} /> </Button>
<Button className="  border-sky-600 text-base hover:text-white  hover:bg-sky-600   px-6 py-3 " variant="outlined"> Get Started  </Button>
</div>

{/* For Mobile */}
{/* For Mobile */}
<div className=' pt-10 mb-6 md:mb-0 px-3 md:hidden'>
<div className='w-full h-full mb-5 '>
<button  class="fluid ui button blue ">  See a Demo </button>
</div>
<div className='w-full h-full '>
<button  class="fluid ui button "> Get Started </button>
</div>

</div>

</div>
</div>
<div>

</div>

</div>

<div className="flex flex-row justify-between items-center w-full">
  
  
 
</div>


</div>

<div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0  my-5 relative`}>

<div className='hidden md:block   '>

<video  className='w-full' autoPlay muted loop src={DigitalLendingvideo} />

</div>

</div>

</section>

</div>
    
           
    
  </div>
  )
}

export default Capitalapiheropage