import styles from "../style";

import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";
import Logo from '../images/pavelonlogo.png'
import { Link } from 'react-router-dom';



import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  md:px-36 bg-[#11243e] flex-col`}>
    <div className={`${styles.flexStart} px-6 md:px-20 md:flex-row flex-col mb-8  w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
      <Link to='/'> <img className='w-[124px] h-[32px] ' style={{filter: 'invert(100%)'}} src={Logo}/></Link>  

        

        <p className={`${styles.paragraph} text-slate-300 mt-4 max-w-[312px]`}>
        Introducing loan terms that offer easy, reliable, and secure payment options.
        </p>
      </div>

      <div className="flex-[1.5] w-full text-white flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none text-slate-300  mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full md:px-16 flex justify-between items-center md:flex-row flex-col pt-6 md:border-t-[1px]  md:border-t-slate-400">
      <p className="font-poppins md:pl-3 font-normal text-center text-[10px] md:text-[14px] leading-[27px] text-white">
        Copyright &#169;. 2023 Casper All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        <div className="bg-white  hover:bg-slate-200 px-3 mx-2 py-3 rounded-md">  
        <ImFacebook  className="text-blue-500" size={20}/> 

        </div>
        <div className="bg-white hover:bg-slate-200 px-3 py-3  mx-2 rounded-md">
        <ImTwitter className="text-blue-500" size={20}/>

        </div>
        <div className="bg-white hover:bg-slate-200 px-3 py-3 mx-2 rounded-md">

        <ImWhatsapp color="green" size={20}/>

        </div>
        
      </div>
      
    </div>
  </section>
);

export default Footer;