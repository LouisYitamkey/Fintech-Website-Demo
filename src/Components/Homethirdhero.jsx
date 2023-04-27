import React from 'react'
import styles from '../style'

import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
import Secondvideo from '../video/secondvideo.mp4'



const Homethirdhero = () => {
  return (
    <div className='w-full h-full bg-[#11243e]  '>
    <section id="home" className={`flex md:px-28  md:flex-row  flex-col ${styles.paddingY}`}>
     <div className='md:pl-28 hidden md:block md:mt-16'>
     <video  className='w-80 border-8    rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />
     </div>

    

      <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:pt-16 my-5 relative`}>
        <div className=' pb-5 '>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-3`}>
        <div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
     <div>
    <span className='md:text-xl text-xl    md:pl-1 text-[#7991a2]  md:font-bold '> Financial Data</span> 
       <h1 className='md:text-5xl hidden md:block text-white md:py-6 tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] '> Connect your app <br/> to any bank account </h1>
       <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl  md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Connect your app  to <br/> any bank account </h1>
       <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-80 border-8  rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />

    </div>
       <span className='font-normal  text-white  text-lg'>Onboard customers in seconds and securely access account information. <br className='hidden md:block'/> Say goodbye to manual form-filling and accelerate your AML and KYC    <br className='hidden md:block'/> processes.</span>

       <div className='md:mt-10 mt-10 mb-5 '> 
       <div className='hover:cursor-pointer mb-5 '> 

{/* First */}
      <div className='flex '>
        <div className='md:mr-4 mt-1 md:mt-1'>
          <span className='text-white '> 
          <i class="fa-solid fa-2xl fa-money-check"></i>

          </span>
       

        </div>
    <div>
      
    </div>
      <p className=' md:pl-1 pl-3 text-white  hover:text-blue-300  '> Data </p>
   
      <  BiChevronRight className='text-white' size={20} /> 
        </div>
        <span className='font-normal  text-[#849aa9] pl-12 md:pl-14 '> Account Information</span>
       
       </div>

       <div className='hover:cursor-pointer '> 

{/* Second */}
<div className='flex md:mt-5  '>
  <div className='md:mr-4 mt-1'>
  <span className='text-white'> 
          <i class="fa-solid fa-2xl fa-money-check"></i>

          </span>

  </div>

<p className='text-white hover:text-blue-400 pl-3  md:pl-1  '> Verification API </p>

<  BiChevronRight className='text-blue-400' size={20} /> 
  </div>
  <span className='font-normal text-[#849aa9] pl-12  md:pl-14 '> Account Holder Verification</span>
 
 </div>

 
       <div className='hover:cursor-pointer'> 

{/* third */}
<div className='flex  md:mt-5 mt-5   '>
  <div className='md:mr-4 mt-1'>
  <span className='text-white'> 
          <i class="fa-solid fa-2xl fa-money-check"></i>

          </span>

  </div>

<p className='text-white hover:text-blue-400 pl-3 md:pl-1  '> Disbursement API </p>

<  BiChevronRight className='text-blue-400' size={20} /> 
  </div>
  <span className='font-normal text-[#849aa9] pl-12  md:pl-14 '> Ad-hoc and subcription payments</span>
 
 </div>
 

      
<div className=' hidden md:block mt-10 md:mt-10 space-x-5 '>
<Button className="  bg-sky-600 text-base   hover:bg-sky-500  text-white px-6 py-2 " variant="outlined"> Contact Us <BiChevronRight size={30} /> </Button>
<Button className=" text-white border-sky-600 text-base hover:text-white  hover:bg-sky-600   px-6 py-3 " variant="outlined"> Documentation  </Button>
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

export default Homethirdhero