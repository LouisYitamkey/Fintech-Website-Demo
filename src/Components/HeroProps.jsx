import React from 'react'

const HeroProps = (props) => {
  return (
 <div className='flex justify-center items-center'>

    <h1 className='bg-red-300 text-7xl'> {props.title}</h1>
    
 </div>
  )
}

export default HeroProps