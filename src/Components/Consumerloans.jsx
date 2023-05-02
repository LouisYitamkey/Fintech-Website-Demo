import React from 'react'
import styles from '../style'
import Button from '@mui/material/Button'
import { BiChevronRight } from "react-icons/bi"
import Secondvideo from '../video/secondvideo.mp4'

const Consumerloans = () => {

  return (
    <div className='w-full h-full bg-slate-100 py-10 md:py-0 '>
    <section id="home" className={`flex md:px-28  md:flex-row  flex-col  md:py-20  ` }>
     <div className='md:pl-28 hidden md:block md:mt-16'>
     <video  className='w-80 border-8    rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />
     </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:pt-16 my-5 relative`}>
        <div className=' pb-5 '>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-3`}>
        <div className="flex flex-row items-center   md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
     <div>
    <span className='md:text-xl text-xl    md:pl-1 text-[#7991a2]  md:font-bold '> Consumer Loans in your own branding </span> 
       <h1 className='md:text-5xl hidden md:block text-[#093554] md:py-6 tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] '> The complete solution </h1>
       <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl  md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> The complete solution </h1>
       <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-80 border-8  rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />

    </div>
       <span className='font-normal md:pb-5 text-[#849aa9]   text-lg'>Powered by machine learning, we’ve built a name-matching engine on <br className='hidden md:block'/> top of open banking rails. This allows you to instantly and accurately <br/> verify users, without having to process streams of raw bank data yourself. </span>


       <div className=' '> 
       {/* Features section */}

       <div>
<p className='font-normal  pl-3 md:pl-0 md:pt-8 pt-6 md:pb-0  text-lg'> <span className='text-blue-400'> <i class="fa-solid fa-square-check"></i> </span>  &nbsp; Automate verification checks  </p>
</div>
<div>
<p className='font-normal pl-3 md:pl-0 md:pt-4  pt-4  text-lg'> <span className='text-blue-400'> <i class="fa-solid fa-square-check"></i> </span>  &nbsp; Instant match logic  </p>
</div>
      
<div className=' hidden md:block mt-10 md:mt-10 space-x-5 '>
<Button className="  bg-sky-600 text-base   hover:bg-sky-500  text-white px-6 py-2 " variant="outlined"> Get in Touch <BiChevronRight size={30} /> </Button>
<Button className="  border-sky-600 text-base hover:text-white  hover:bg-sky-600   px-6 py-3 " variant="outlined"> Documentation </Button>
</div>

{/* For Mobile */}
<div className=' pt-10 md:hidden'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button blue ">  Contact Us </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button  "> Documentation </button>
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

    </div>

      </div>

</section>
  
</div>
 
  )
}

export default Consumerloans


