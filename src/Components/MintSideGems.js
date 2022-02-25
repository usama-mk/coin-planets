import React from 'react'
import eegWorm from "../assets/eegg-worm.png";
import gem3Dirty from "../assets/eegg-gem3-dirty.png";
import gem7Dirty from "../assets/eegg-gem7-dirty.png";
import ufo2 from "../assets/eegg-ufo2-dirty.png";
import eegTama3 from "../assets/eegg-tamagochi3-dirty.png";


function MintSideGems() {
  return (
    <div className='MintSideGems grid grid-cols-3 gap-4' >
        <img className='w-20 -rotate-[50deg]'  src={eegWorm} alt="" />
        <img className='w-20 col-span-2 ml-auto mb-10 mt-[-2rem] -rotate-[60deg]'  src={gem3Dirty} alt="" />
        <img className='w-20 col-span-1 ml-[70%]'  src={gem7Dirty} alt="" />
        <img className='w-20 col-span-3 ml-auto mr-5 -rotate-[40deg]'  src={ufo2} alt="" />
        <img className='w-20 col-span-1 ml-[95%]'  src={eegTama3} alt="" />
    </div>
  )
}

export default MintSideGems