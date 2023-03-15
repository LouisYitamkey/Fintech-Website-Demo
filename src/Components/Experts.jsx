import React from 'react'

import Bankingvideo from '../video/bankingvideo.webm'
import Button from '@mui/material/Button';
import CountUp from "react-countup";
import { BiChevronRight } from "react-icons/bi";



const Experts = () => {
  return (
    <div>
        <div className='flex justify-center items-center  pt-24 md:pt-28'>
        <h1> <span className='md:text-2xl text-xl  text-[#7991a2]   font-bold '> Why Truecaller?</span> </h1>
        </div>

        <h1 className='md:text-5xl md:pb-14 hidden md:block text-center text-[#093554] md:py-6 tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px]' > We're open banking experts </h1>
        <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl text-center md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> We're open <br/> banking  experts </h1>
     <div>

     </div>
        <div className='md:flex     md:justify-around md:px-20'>
            {/* 1st */}
            <div className='flex-row justify-center items-center'>
            <div className='flex justify-center items-center'>

                <CountUp className='text-5xl  md:pl-12 text-blue-400 text-center font-bold ' start={10} delay={2} end={69}/> <span className='text-5xl text-blue-400 text-center font-bold'>
                %</span>
            </div>
            <div className='flex justify-center items-center '>
                <p className=' md:pt-6 pt-6 pb-24 md:pb-0 text-[#093554]   '> of open banking traffic in <br/> the UK, Ireland, and Spain</p>
            </div>
            </div>
         
             {/* 2nd */}
            <div className='flex-row justify-center items-center'>
            <div className='flex justify-center items-center'>
              
                <CountUp className='text-5xl  md:pl-12 text-blue-400 text-center font-bold ' start={20} delay={2} end={60}/> <span className='text-5xl text-blue-400 text-center font-bold'>
                %</span>
            </div>
            <div className='flex justify-center items-center '>
                <p className=' md:pt-6  pt-6 pb-24 md:pb-0   py-6 md:py-0 text-[#093554] text-center '> of open banking traffic in <br/> the UK, Ireland, and Spain</p>
            </div>
            </div>

                 {/* 3rd */}

            <div className='flex-row justify-center items-center'>
            <div className='flex justify-center items-center'>
            <CountUp className='text-5xl  md:pl-12 text-blue-400 text-center font-bold ' start={30} delay={2} end={90}/> <span className='text-5xl text-blue-400 text-center font-bold'>
                %</span>
            </div>
            <div className='flex justify-center items-center '>
                <p className='  py-6 md:py-0 md:pt-6  pt-6 pb-24 md:pb-0  text-[#093554] text-center '> of open banking traffic in <br/> the UK, Ireland, and Spain</p>
            </div>
            </div>

        </div>

        <div>
            

                {/* Video Section  */}
        <div className=' px-10  md:px-48  md:pt-10'>
        <video className=' w-full h-full ' src={Bankingvideo} autoPlay muted loop  />
        </div>

            {/* Button  */}

            <div className=' hidden md:flex justify-center   mx-5 md:mx-0 items-center space-x-5'>
            <div className='pt-10 md:pb-24'>
     <Button className=" bg-[#f7ab1b] border-[#f7ab1b] text-base  hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined">Get In Touch <BiChevronRight size={30} />  </Button>
     </div>
     <div className='pt-10  md:pb-24'>
     <Button className=" border border-[#f7ab1b] text-base hover:border-white hover:text-white hover:bg-blue-300  text-[#f7ab1b] px-6 py-3 " variant="outlined"> Start Building  </Button>

     </div>
      </div>

      {/* For Mobile */}
      <div className=' pt-10 mb-20 md:mb-0 px-3 md:hidden'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button orange ">  Start Building </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button blue "> Get in touch </button>
    </div>

</div>
            
 </div>
    </div>
  )
}

export default Experts
