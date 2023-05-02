import React from "react";
import { testimonials } from "../constants";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonials() {
  return (
    <>
      <div className="md:flex flex-row justify-around gap-16 ">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="flex justify-center items-center"> 
            <ImQuotesLeft size={30} color="black"/>

            </div>
         

           <div className=" flex justify-center items-center">
             <p className=" text-lg py-10 text-center  font-normal">{testimonial.testimony}</p>
           </div>
           
         <div className=" flex justify-center items-center"> 
         <img className="w-20 rounded-full" src={testimonial.image}/>
         </div>

         <div className="flex justify-center items-center">
         <p className="py-5 md:font-medium text-lg "> {testimonial.name}</p>
         </div>
         <div className="flex justify-center items-center">
         <p className=" "> {testimonial.title}</p>
         </div>
         
         <div className="flex justify-center items-center">
         <p className="py-5 font-semibold   text-2xl "> {testimonial.company}</p>
         </div>
         

        
          </div>
        ))}
      </div>
    </>
  );
}
