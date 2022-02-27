import React from 'react'
import eegWorm from "../assets/eegg-worm.png";
import plane3 from "../assets/eegg-plane3-dirty.png";
import shelf from "../assets/Shelf_CP.png";


function Rarity() {
  return (
    <div className="Utility utilityBG p-32 pt-10  ">
    {/* <div className="utilityTopImg flex justify-start w-20">
      <img src={eegWorm} className="w-20 -rotate-[60deg]" alt="" />
    </div> */}

    <div className="utilityHeading text-white text-[45px] text-left mb-0 ml-10 mt-10 font-title">
      RARITY
    </div>


    {/* text left heading */}
    <div className="flex font-early ">
      <div className="utilityLeft m-10 mt-2 w-[100%] relative">
          <img src={plane3} className='w-32 absolute top-[-2rem] right-0 z-0 -mr-10 rotate-6 opacity-70' alt="" />
          <img src={eegWorm} className="w-20 absolute bottom-[0rem] left-[-4rem] " alt="" />
          <div className='text-left' >
		<span className="text-[rgba(255,255,124,1)] text-[15px] relative z-10">Coin Plants feature 8 unique properties </span><span className="text-[rgba(255,255,255,1)] relative z-10">with property 1 being a set of 17 beautiful backgrounds and property 8 being extremely rare! <br/><br/>Every other Coin Plant property contains at least </span><span className="text-[rgba(255,255,124,1)] text-[15px]  relative z-10">26 variable colour variations</span><span className="text-[rgba(255,255,255,1)]  relative z-10" > which make up the complete design, each representing the colour scheme of a blue chip Cryptocurrency. <br/><br/>Almost every Coin Plant is randomised, but </span><span className="text-[#7BD98D]  relative z-10">there are a handful of custom 1 of 1 designs</span><span className="text-[rgba(255,255,255,1)]  relative z-10"> amongst collection, so keep an eye out for those!</span>
	</div>
      </div>

      <div className="utilityRight m-10 mr-0 w-[100%]">
       <img src={shelf} className='mt-[-10rem]' alt="" />
      </div>
      {/* utility right text end */}
    </div>
  </div>
  )
}

export default Rarity