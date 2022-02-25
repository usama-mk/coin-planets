import React from 'react'
import eegDip1 from "../assets/eegg-dip1-dirty.png";
import car2Dirty from "../assets/eegg-car2-dirty.png";
import gem1Dirty from "../assets/eegg-gem1-dirty.png";
import eegDiamond from "../assets/eegg-diamondget-dirty.png";

function MintOtherSideGems() {
  return (
    <div className='MintOtherSideGems grid grid-cols-3 gap-4 mt-16' >
    <img className='w-20 -rotate-[55deg] '  src={eegDip1} alt="" />
    <img className='w-20 col-span-2 ml-auto mr-[-4.5rem] mb-10 mt-[-5rem] '  src={car2Dirty} alt="" />
    <img className='w-20 col-span-1 ml-[95%] -rotate-[20deg]'  src={gem1Dirty} alt="" />
    
    <img className='w-20 col-span-3 ml-[60%]'  src={eegDiamond} alt="" />
</div>
  )
}

export default MintOtherSideGems