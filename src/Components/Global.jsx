
import React from 'react'
import styles from '../style'
import Secondvideo from '../video/connect.webm'

const Global = () => {
  return (

    <div className='w-full mt-12 md:mt-0  '>
    <section id="home" className={`flex md:px-28  md:flex-row  flex-col ${styles.paddingY}`}>
<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
  <div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
<div>
<span className='md:text-xl text-2xl pl-3   md:pl-1 text-[#7991a2]  md:font-bold '> Global Connectivity</span> 
 <h1 className=' hidden md:block md:text-5xl md:pt-5 text-[#093554] md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[50px] font-extrabold '> Grow with us</h1>
 <h1 className='md:text-7xl md:hidden pb-10 pt-2 text-[#093554] text-4xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> Grow with us </h1>
 <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-full px-4 ' autoPlay muted loop src={Secondvideo} />

</div>

 <p className='font-normal pl-3 md:pl-0 text-[#849aa9]    text-lg'>Use our global open banking platform and local expertise to connect to the largest banks, neobanks, and digital  world.
  </p>
  <div>

  <p className=' pl-3 md:pl-0 md:pt-6 pt-6 md:pb-  text-lg'> <span> <i class="fa-solid text-sky-600 fa-square-check"></i> </span>  &nbsp;  Live across the UK, Europe, and Australia</p>
  </div>
  <div>
  <p className=' pl-3 md:pl-0 md:pt-4  pt-4  text-lg'> <span> <i class="fa-solid text-sky-600  fa-square-check"></i> </span>  &nbsp;   Live across the UK, Europe, and Australia</p>
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

export default Global
