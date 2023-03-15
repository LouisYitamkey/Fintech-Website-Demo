import React from "react";
import { useState } from "react";



import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
import Productsnavbar from "./Productsnavbar";
import Industriesnavbar from "./Industriesnavbar";
import Developersnavbar from "./Developersnavbar";
import Companynavbar from "./Companynavbar";
import { MuiDrawer } from './Drawer';
import ResponsiveDialog from "./ResponsiveDialog";




const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };



  return (
    <nav className=" bg-white md:bg-blue-500  flex py-4 md:py-6 px-3 md:px-52  justify-between  ">
        <div className="flex items-center">
        <h1 className="font-bold md:pb-3 text-white  text-3xl"> Logo</h1>
    

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
<ResponsiveDialog />
</div>
     

      <div className="sm:hidden flex flex-1  justify-end items-center">
        <div onClick={handleToggle}>
           
        <MuiDrawer />  


        

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
