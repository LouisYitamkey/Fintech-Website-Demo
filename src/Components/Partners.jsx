import React from "react";
import { Partnersdata } from "../constants";

function Partners() {
  return (
    <div className=" columns-4 md:columns-4  bg-slate-100  pt-14 md:pt-0 md:py-12  px-10 md:pl-28   md:justify-between justify-center space-x-4 md:space-x-2 space-y-16 md:space-y-10  md:px-16   ">
      {Partnersdata.map((partner) => (

  <div className="flex md:pl-28 " key={partner.id}>
    
 <img id="colored" className="w-24 md:w-32 md:pt-5 object-contain  " src={partner.image}/>
  
  
  </div>
            
      
      ))}
    </div>
  );
}

export default Partners;
