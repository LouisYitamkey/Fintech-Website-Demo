import React from "react";
import { Partnersdata } from "../constants";

function Partners() {
  return (
    <div className=" columns-2 md:columns-4   py-14 md:py-12  pl-28   md:justify-between justify-center space-x-2 space-y-20 md:space-y-10 px-16   ">
      {Partnersdata.map((partner) => (

  <div className="flex md:pl-28 " key={partner.id}>
    
 <img id="colored" className="w-24 md:w-32 md:pt-5 object-contain  " src={partner.image}/>
  
  
  </div>
            
      
      ))}
    </div>
  );
}

export default Partners;
