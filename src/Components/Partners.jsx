import React from "react";
import { Partnersdata } from "../constants";

function Partners() {
  return (
    <div className=" columns-2 md:flex bg-slate-100 md:py-24 py-14  pl-28  md:justify-around justify-center space-y-20 md:space-y-0 px-16 md:px-40  ">
      {Partnersdata.map((partner) => (

  <div className="flex " key={partner.id}>
    
 <img className="w-24  " src={partner.image}/>
  
  
  </div>
            
      
      ))}
    </div>
  );
}

export default Partners;
