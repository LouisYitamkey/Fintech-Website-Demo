import React from 'react'

import styles from '../style'

import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
import Secondvideo from '../video/secondvideo.mp4'



const Kycsecondhero = () => {
  return (

    <div className='w-full h-full '>
    <section id="home" className={`flex md:px-28  md:flex-row  flex-col ${styles.paddingY}`}>
     <div className='md:pl-28 hidden md:block md:mt-16'>
     <video  className='w-80 border-8    rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />
     </div>

    

      <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:pt-16 my-5 relative`}>
        <div className=' pb-5 '>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-3`}>
        <div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
     <div>
    <span className='md:text-xl text-xl    md:pl-1 text-[#7991a2]  md:font-bold '> Instant Verification </span> 
       <h1 className='md:text-5xl hidden md:block text-[#093554] md:py-6 tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] '> From 3 days to 3 clicks </h1>
       <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl  md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '>From 3 days to 3 clicks </h1>
       <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-80 border-8  rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />

    </div>
       <span className='font-normal   text-lg'>Send your conversion rate into the stratosphere by enabling your users <br className='hidden md:block'/> to confirm account ownership using a simple fingerprint or faceID. <br/> Automate checks through a single API call so <br className='md:hidden'/> your compliance team can <br className='hidden md:block'/> focus on the more important things. <br/> </span>

       <div className='md:mt-10 mt-2 mb-5 '> 
       {/* Features section */}

       <div>
<p className='font-normal pl-3 md:pl-0 md:pt-6 pt-6 md:pb-  text-lg'> <span className='text-blue-400'> <i class="fa-solid fa-square-check"></i> </span>  &nbsp; 90% of good actors verified in 3 clicks </p>
</div>
<div>
<p className='font-normal pl-3 md:pl-0 md:pt-4  pt-4  text-lg'> <span className='text-blue-400'> <i class="fa-solid fa-square-check"></i> </span>  &nbsp; Accelerate KYC and AML checks</p>
</div>

 


      
<div className=' hidden md:block mt-10 md:mt-10 space-x-5 '>
<Button className=" bg-[#f7ab1b] border-[#f7ab1b]  text-base hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined"> Contact Us <BiChevronRight size={30} /> </Button>
<Button className=" text-[#f7ab1b] border-[#f7ab1b] hover:text-white hover:border-[#f7ab1b] hover:bg-[#f38d00] text-base  px-6 py-3 " variant="outlined"> Documentation  </Button>
</div>

{/* For Mobile */}
<div className=' pt-10 md:hidden'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button orange ">  Contact Us </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button blue "> Documentation </button>
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

export default Kycsecondhero