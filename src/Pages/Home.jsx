import React from 'react'
import Navbarmenu from '../components/Navbar'
import Homehero from '../Components/HomeHero'
import Homesecondhero from '../Components/Homesecondhero'
import Homethirdhero from '../Components/Homethirdhero'
import Partners from '../Components/Partners'
import Usecases from '../Components/Usecases'
import Experts from '../Components/Experts'
import Developers from '../Components/Developers'
import Global from '../Components/Global'

import Footer from '../Components/Footer'







const Home = () => {
  return (
    <div>
      <div>
      <Navbarmenu />
      </div>
        <div>
        <Homehero/>

        </div>

      <div>
      <Homesecondhero />
      </div>

      <div>
      <Partners />
      </div>

      <div>
      <Partners />
      </div>

      <div>
      <Homethirdhero />

      </div>
      <div>
      <Usecases />
      </div>

      <div>
      <Experts />

      </div>

      <div>
        <Developers/>
      </div>

    

   
       <div>
        <Global/>
       </div>
      
       
       <div>
        <Footer/>
    
       </div>

      

      
    </div>
  )
}

export default Home
