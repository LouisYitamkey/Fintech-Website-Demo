import React from "react";
import { Partnersdata } from "../constants";

function Partners() {
  return (
    <div className=" columns-4 md:columns-4    pt-14 md:pt-0 md:pb-10   px-10 md:pl-28   md:justify-between justify-center space-x-4 md:space-x-2 space-y-16 md:space-y-8  md:px-16   ">
      {Partnersdata.map((partner) => (

  <div className="flex md:pl-28 " key={partner.id}>
    
 <img id="colored" className="w-24 h-16 md:w-32 md:pt-5 object-contain  " src={partner.image}/>
  
  
  </div>
            
      
      ))}
    </div>
  );
}

export default Partners;
