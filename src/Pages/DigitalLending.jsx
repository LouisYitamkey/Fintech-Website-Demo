import React from 'react'
import Navbar from '../components/Navbar'

import Nextgen from '../Components/Nextgen';
import Consumerloans from '../Components/Consumerloans';
import Consumerlending from '../Components/Consumerlending';
import Globalloans from '../Components/Globalloans';
import Footer from '../Components/Footer';

  export function DigitalLending() {

    return (
   <>
   <iv>
   <Navbar />
   </iv>
   <div>
   <Nextgen />
   </div>

   <div>
   <Consumerloans />
   </div>
 
   <div>
   <Consumerlending />
   </div>
   <div>
   <Consumerloans />
   </div>


   <div>
   <Globalloans />
   </div>

   <div>
     <Footer />
   </div>


   </>

    );
  }