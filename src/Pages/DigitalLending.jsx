import React from 'react'
import Nextgen from '../Components/Nextgen'
import Consumerloans from '../Components/Consumerloans'
import Consumerlending from '../Components/Consumerlending'
import Globalloans from '../Components/Globalloans'
import Footer from '../Components/Footer'

export function DigitalLending() {
  return (
    <>
      <div className="">
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
  )
}
