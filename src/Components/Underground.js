import React from 'react'
import underGroundCont from '../assets/foreground-underground-continuation.png'
import '../index.css'
import CPIntro from './CPIntro'
import Mint from './Mint'

function Underground() {
  return (
    <div className='relative top-20'>
        <div className="undergroundBG absolute top-40">
        <img className='' src={underGroundCont} alt="" />

       <div className="underContainer absolute top-0 w-full text-center">
       <div className="underTitle  text-white ">
        MINT YOUR COIN PLANT!
        </div>
        <div className="mintWrapper w-full flex justify-center mt-10">
        <Mint/>
        </div>

        <CPIntro/>
       </div>

        </div>
    </div>
  )
}

export default Underground