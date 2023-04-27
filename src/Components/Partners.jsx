import React from "react";
import { Partnersdata } from "../constants";

function Partners() {
  return (
    <div className=" columns-2 md:flex  py-14 md:py-16  pl-28  md:justify-between justify-center space-y-20 md:space-y-0 px-16 md:px-60  ">
      {Partnersdata.map((partner) => (

  <div className="flex " key={partner.id}>
    
 <img className="w-24 md:pt-5  " src={partner.image}/>
  
  
  </div>
            
      
      ))}
    </div>
  );
}

export default Partners;
