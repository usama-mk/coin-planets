import React from 'react'
import underGroundCont from '../assets/foreground-underground-continuation.png'
import '../index.css'
import CPIntro from './CPIntro'
import Mint from './Mint'
import MintOtherSideGems from './MintOtherSideGems'
import MintSideGems from './MintSideGems'
import eegDip1 from '../assets/eegg-dip1-dirty.png'
import Utility from './Utility'
import BottomGemsBlock from './BottomGemsBlock'
import Rarity from './Rarity'
import Team from './Team'
import End from './End'



function Underground() {
  return (
    <div className='CPIntro relative bottom-0 '>
        <div className="  undergroundBG ">
        {/* <img className='' src={underGroundCont} alt="" /> */}

       <div className="underContainer absolute top-0 w-full text-center">
       <div className="underTitle  text-white font-title text-[40px] ">
        MINT YOUR COIN PLANT!
        </div>
        <div className="mintWrapper w-full flex justify-center mt-10">
        <MintSideGems/>
        <Mint/>
        <MintOtherSideGems/>
        </div>

        <CPIntro/>
        {/* mid image wrapper */}
        <div className="wrapperImgCenter CPIntroBelow flex justify-center ">
        <img className="w-20 rounded-[2rem] object-contain" src={eegDip1} alt="" />
        </div>
        {/*  */}

        <Utility/>
        <BottomGemsBlock/>
        <Rarity/>
        <Team/>
        <End/>
       </div>

        </div>
    </div>
  )
}

export default Underground