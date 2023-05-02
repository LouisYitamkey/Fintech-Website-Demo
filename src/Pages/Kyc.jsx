import React from 'react'
import styles from '../style'
import Kycsecondhero from '../Components/Kycsecondhero';
import Kycvideo from '../video/kyc.webm'
import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
import Bankauth from '../Components/Bankauth';
import Automation from '../Components/Automation';
import Intuitive from '../Components/Intuitive';
import { FeaturesCards } from '../Components/Featurescards';
import { GrowthCards } from '../Components/Growthcards';
import Footer from '../Components/Footer';
import Explorecards from '../Components/Explorecards';



const Kyc = () => {
  return (
    <div className='w-full h-full  md:mt-0    '>
      <section id="home" className={`flex md:px-28 bg-[#11243e] text-white   md:flex-row  flex-col ${styles.paddingY}`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
    <div className="flex flex-row items-center py-[6px]  md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
 <div>


   <h1 className=' hidden md:block md:text-6xl   md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[55px] font-extrabold '> Effortless <br/> onboarding for everything </h1>

   <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className=' ' autoPlay muted loop src={Kycvideo} />

</div>
<h1 className='md:text-7xl md:hidden pb-10 pt-2  text-4xl pl-3 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[60px] '> Effortless onboarding <br/> for everything.  </h1>
<p className='font-normal pl-3 md:hidden text-slate-200   text-lg'>Utilize Pavelon’s channel partners like payment apps,  payroll services, financial comparison websites, CRM  solutions, or tax apps for effective distribution at lower  costs. Get pre-verified leads and offers. </p>
<span className='font-normal hidden md:block text-slate-200     text-lg'>Verify your customer’s account details and ownership in  <br/> seconds using their bank app. </span>

   <div className='md:mt-10 mt-10 mb-5 '> 


  
<div className=' hidden md:block mt-10 md:mt-10 space-x-5 '>

     <Button className=" bg-sky-600 hover:bg-sky-500 text-base     text-white px-6 py-3 " > Start Building <BiChevronRight size={25} /> </Button>
     <Button className="   text-base hover:text-white text-white  hover:bg-sky-600  px-6 py-3.5 " variant="outlined"> Contact Us  </Button>
</div>

{/* For Mobile */}
{/* For Mobile */}
<div className=' pt-10 mb-6 md:mb-0 px-3 md:hidden'>
<div className='w-full h-full mb-5 '>
<button  class="fluid ui button blue ">  Start Building </button>
</div>
<div className='w-full h-full '>
<button  class="fluid ui button  "> Get in touch </button>
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

  <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:mb-12  my-5 relative`}>
    
  <div className='hidden md:block  pt-8  '>

<video  className='w-full' autoPlay muted loop src={Kycvideo} />

</div>

  </div>

</section>

 {/* KYC second hero */}

<div>
    <Kycsecondhero/>

</div>
<div>
<Bankauth />
</div>

<div>
  <Automation/>
</div>

<div>
<Intuitive />
</div>

<div>
<FeaturesCards />
</div>

<div className='bg-slate-100'>
<GrowthCards />
</div>

<div>
<Explorecards />
</div>

<div>
<Footer />
</div>

    
</div>

  )
}

export default Kyc