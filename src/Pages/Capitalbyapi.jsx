import React from 'react'
import Footer from '../Components/Footer'
import Capitalapiheropage from '../Components/Capitalapihero'
import StatsGroup from '../Components/Capitalstats'
import { CapitalCards } from '../Components/Capitalcards'
import CapitalSecondHero from '../Components/CapitalSecondHero'
import Global from '../Components/Global'

const statsData = [
  {
    title: 'Credit Products',
    stats: '20+',
    description: (
      <>
        From LOCs to equipment finance
        <br />
        and everything in between
      </>
    ),
  },
  {
    title: 'Loan Amounts',
    stats: '2k+',
    description: (
      <>
        To meet every customers needs
        <br />
        and everything in between
      </>
    ),
  },
  {
    title: 'Loan Amounts',
    stats: 'A-rated',
    description: (
      <>
        Serving a wide range of borrowers
        <br />
        and everything in between
      </>
    ),
  },
  // Add more data objects as needed
]

const Capitalbyapi = () => {
  return (
    <div>
      <Capitalapiheropage />

      <div className="mx-72 my-2">
        <StatsGroup data={statsData} />
      </div>
      <div className="bg-slate-200">
        <CapitalCards />
      </div>

      <div>
        <CapitalSecondHero />
      </div>

      <div> 
      <Global />
      </div>

      <Footer />
    </div>
  )
}

export default Capitalbyapi
