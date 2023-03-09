import React from "react";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";


import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
import Productsnavbar from "./Productsnavbar";
import Industriesnavbar from "./Industriesnavbar";
import Developersnavbar from "./Developersnavbar";
import Companynavbar from "./Companynavbar";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };



  return (
    <nav className=" bg-white md:bg-blue-500    flex py-4 md:py-6 px-10 md:px-52  justify-between  ">
        <div className="flex items-center">
        <h1 className="font-bold md:pb-3  text-3xl"> Logo</h1>
    

        </div>

<div className="flex items-center">
<ul className="list-none  text-lg font-normal sm:flex hidden space-x-12 justify-end items-center flex-1">
 

<Productsnavbar />
<Industriesnavbar/>
<Developersnavbar/>
<Companynavbar/>


</ul>


</div>



    
<div className="hidden md:flex items-center">
<Button className="font-bold md:font-normal border border-white hover:bg-[#f38d00] hover:border-[#f38d00]  text-white md:text-lg  py-2 " variant="outlined">Book a Demo <BiChevronRight size={20} /> </Button>

</div>
     

      <div className="sm:hidden flex flex-1  justify-end items-center">
        <div onClick={handleToggle}>
          {toggle ? <GrClose size={25} /> : <VscMenu size={25} />}

          <div
            className={`${
              toggle ? "flex" : "hidden"
            }   absolute top-14 right-0   px-5 py-5  min-w-[160px] rounded-sm sidebar`}
          >
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
