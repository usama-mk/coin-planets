import React from 'react'
import teamImg1 from "../assets/Me (square).jpg";
import teamImg2 from "../assets/nina.jpg";
import skull from "../assets/eegg-apeskull-dirty.png";
import eegWorm from "../assets/eegg-worm.png";
import gem8Dirty from "../assets/eegg-gem8-dirty.png";
import eegDiamond from "../assets/eegg-diamondget-dirty.png";
import eegHodl from "../assets/eegg-hodl.png";





function Team() {
  return (
    <div className='Team utilityBG' >
        <div className=" flex justify-start ml-32 pb-56">

            <div className="teamLeft text-left relative mr-10">
            <img src={skull} className='absolute top-64 left-[-7rem]' alt="" />
                <img src={eegWorm} className='absolute bottom-[-15rem] right-44' alt="" />
            <div className="teamLeftTitle text-[45px] text-white m-10 font-title ">
                Team
            </div>
            <div className="teamImgWrapper my-10">
                <img src={teamImg1} className='w-48 rounded-full' alt="" />
            </div>
            <div className="name  text-[30px] text-white font-title">
                Josiah
            </div>
            <div className="email  text-[28px] text-white font-early">
                @themavrek
            </div>
            <div className="teamDesc font-[`Early GameBoy`] text-[20px] text-white font-early ">
            Bachelor of Business graduate from RMIT in Melbourne, Australia. Has years of experience in the gaming industry, currently works at a Fortune 500 tech company. Head of development and marketing for Coin Plants NFT. Addicted to filter coffee.
            </div>
            </div>

            {/* right */}
            <div className="TeamRight text-left relative m-10 mr-20">

            <img src={eegHodl} className='absolute bottom-[-10rem] right-[-7rem] rotate-12' alt="" />
                <img src={eegDiamond} className='absolute bottom-[-10rem] right-0' alt="" />
            <div className="mt-[-3.7rem] ml-[8rem]">
                <img src={gem8Dirty} alt="" />
            </div>
            <div className="teamImgWrapper my-10">
                <img src={teamImg2} className='w-48 rounded-full' alt="" />
            </div>
            <div className="name  text-[30px] text-white font-early">
                Nina
            </div>
            <div className="email  text-[28px] text-white font-early">
                @ninastwenties
            </div>
            <div className="teamDesc font-[`Early GameBoy`] text-[20px] text-white font-early ">
            Passionate illustrator with a focus on pixel art. Writes for Medium in her spare time and currently studies Japanese. Spent weeks hand-crafting each pixel of Coin Plants with love. Owns the cutest cat known to mankind 
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default Team