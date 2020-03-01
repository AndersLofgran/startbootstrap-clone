import React from 'react'
import './Intro.css'

const Intro = props => {
  return (
    <div className='Intro' >
      <div className='IntroText' >
        <h3 className='WhiteText' >welcome</h3>
        <h1 className='WhiteText' >buy my watches</h1>
        <button className='WhiteText IntroButton' >
          <h2>tell me more</h2>
        </button>
      </div>
    </div>
  )
}

export default Intro