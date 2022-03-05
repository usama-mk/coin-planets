import React from "react";
import eegWorm from "../assets/eegg-worm.png";
import car1Dirty from "../assets/eegg-car1-dirty.png";
import pollen from "../assets/$POLLEN.png";
import tp from "../assets/1TP x Coin Plants.png";
import arcade from "../assets/gamefi_arcade.png";
// import car1Dirty from "../assets/eegg-car1-dirty.png";

function Utility() {
  return (
    <div className="Utility utilityBG p-32 pt-10  ">
      <div className="utilityTopImg flex justify-start">
        <img src={eegWorm} className="w-20 -rotate-[60deg]" alt="" />
      </div>

      <div className="utilityHeading text-white text-[45px] text-left mb-0 ml-10 mt-10 font-title">
        UTILITY
      </div>

      <div className="text-left ml-10 mt-0 mr-0 mb-5 font-early w-[60%]">
        <span className="text-white text-[15px]">
          Owning at least one Coin Plant offers loads of awesome, real-world
          utility.
        </span>
      </div>

      {/* text left heading */}
      <div className="flex font-early">
        <div className="utilityLeft m-10 w-[100%] relative">
            <img src={car1Dirty} className='w-32 absolute top-[11rem] right-0 z-0 -mr-10 rotate-6 opacity-50' alt="" />
          <div className="text-left">
            <span className="text-[rgba(255,255,124,1)] text-[15px]">
              {" "}
              1. STAKING GENERATES{" "}
            </span>
            <span className="font-[`Upheaval TT (BRK)`] tracking-[1px] text-[rgba(255,255,124,1)] text-[23px]">
              $
            </span>
            <span className="text-[rgba(255,255,124,1)] text-[15px]">
              POLLEN
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)]">
              Staking your Coin Plant will generate passive income through our
              unique token{" "}
            </span>
            <span className="font-[`Upheaval TT (BRK)`] text-[23px] tracking-[1px] text-white ">
              $
            </span>
            <span className="text-[rgba(255,255,255,1)]">
              POLLEN. This token will enable holders to purchase various assets
              in the Coin Plants ecosystem, including but not limited too:{" "}
            </span>
            <span className="text-[#7BD98D]">
              exclusive limited release merch, digital items, events
            </span>
            <span className="text-[rgba(255,255,255,1)]">
              , and even future generations of Coin Plants.
            </span>
            <br />
            <div className="mt-48" >
              <img src={arcade} alt="" />
            </div>
            <div className="mt-48">
            <span className="text-[rgba(255,255,124,1)] text-[15px] ">
              3. VIP ACCESS TO THE TREE HOUSE CLUB
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)]">
              Every holder, whether staked or not, will have access to{" "}
            </span>
            <span className="text-[#7BD98D]">
              the Tree House Club
            </span>
            <span className="text-[rgba(255,255,255,1)]">
              . This VIP club resides in our Community Garden Discord as a
              private channel for verified holders of Coin Plants only. You can
              expect a bunch of exclusive news and alpha in this Club. Also, any
              future{" "}
            </span>
            <span className="text-[#7BD98D]">Airdrops</span>
            <span className="text-[rgba(255,255,255,1)]"> or VIP </span>
            <span className="text-[#7BD98D]">giveaways</span>
            <span className="text-[rgba(255,255,255,1)]">
              {" "}
              will only be accessible in the Tree House, so be sure to verify
              your Coin Plant NFT to join!
            </span>
            </div>
            
            
            <br />
            <div className="mt-48">
              <img src={tp} alt="tp" />
            </div>
          </div>
        </div>
{/* right utility */}
        <div className="utilityRight m-10 mr-0 w-[100%]">
          <div className="text-left mt-1">
          <div className="w-[100%] felx justify-center">
            <img src={pollen} width={250} alt="" />
          </div>
            <br />

           <div className="mt-40">
           <span className="text-[rgba(255,255,124,1)] text-[15px]">
              <br />
              2. GAMEFI PROJECT IN DEVELOPMENT
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)] relative z-10">
              We plan to also incorporate{" "}
            </span>
            <span className="font-[`Upheaval TT (BRK)`] text-[23px] tracking-[1px] text-white">
              $
            </span>
            <span className="text-[rgba(255,255,255,1)] relative z-10">
              POLLEN as the main cryptocurrency for our huge{" "}
            </span>
            <span className="text-[#7BD98D] relative z-10">GameFi project</span>
            <span className="text-[rgba(255,255,255,1)] relative z-10">
              . This will be a P2E blockchain game where you’ll be able to
              literally “yield farm” via DeFi in a fun and interactive way, so
              staking your Coin Plants will give you a head start when we launch
              this revolutionary game!
            </span>
             </div>
            <br />
            <div className="mt-20">
              <img src={tp} alt="" />
            </div>
            <br />
            <div className="mt-48">
            <span className="text-[rgba(255,255,124,1)] text-[15px] ">
              <br />
              4. COIN PLANTS NFT HELPS GROW IRL TREES!
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)]">
              Each Coin Plant minted means more real trees are planted around
              the globe through our charity partner, One Tree Planted. Utilising
              the power of NFTs, YOU are making a positive impact on our
              environment! The planet can’t thank you enough.
            </span>
            </div>
          </div>
        </div>
        {/* utility right text end */}
      </div>
    </div>
  );
}

export default Utility;
