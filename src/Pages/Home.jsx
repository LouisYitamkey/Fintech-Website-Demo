import React from 'react'
import Homehero from '../Components/HomeHero'
import Homesecondhero from '../Components/Homesecondhero'
import Homethirdhero from '../Components/Homethirdhero'
import Partners from '../Components/Partners'
import Usecases from '../Components/Usecases'
import Experts from '../Components/Experts'



const Home = () => {
  return (
    <div>
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
      <Homethirdhero />

      </div>
      <div>
      <Usecases />
      </div>

      <div>
      <Experts />

      </div>
       
    
        
      
    </div>
  )
}

export default Home
