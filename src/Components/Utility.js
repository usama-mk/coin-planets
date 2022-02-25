import React from "react";
import eegWorm from "../assets/eegg-worm.png";
import car1Dirty from "../assets/eegg-car1-dirty.png";

function Utility() {
  return (
    <div className="Utility utilityBG p-32 pt-10  ">
      <div className="utilityTopImg flex justify-start">
        <img src={eegWorm} className="w-20 -rotate-[60deg]" alt="" />
      </div>

      <div className="utilityHeading text-white text-[45px] text-left mb-0 ml-10 mt-10">
        UTILITY
      </div>

      <div className="text-left ml-10 mt-0 mr-0 mb-5">
        <span className="text-white text-[20px]">
          Owning at least one Coin Plant offers loads of awesome, real-world
          utility.
        </span>
      </div>

      {/* text left heading */}
      <div className="flex ">
        <div className="utilityLeft m-10 w-[100%] relative">
            <img src={car1Dirty} className='w-32 absolute bottom-[1rem] right-0 z-0 -mr-10 rotate-6 opacity-70' alt="" />
          <div className="text-left">
            <span className="text-[rgba(255,255,124,1)] text-[20px]">
              {" "}
              1. STAKING GENERATES{" "}
            </span>
            <span className="font-[`Upheaval TT (BRK)`] tracking-[1px] text-[rgba(255,255,124,1)] text-[28px]">
              $
            </span>
            <span className="text-[rgba(255,255,124,1)] text-[20px]">
              POLLEN
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)]">
              Staking your Coin Plant will generate passive income through our
              unique token{" "}
            </span>
            <span className="font-[`Upheaval TT (BRK)`] text-[28px] tracking-[1px] text-white ">
              $
            </span>
            <span className="text-[rgba(255,255,255,1)]">
              POLLEN. This token will enable holders to purchase various assets
              in the Coin Plants ecosystem, including but not limited too:{" "}
            </span>
            <span className="text-[rgba(123,217,141,1)]">
              exclusive limited release merch, digital items, events
            </span>
            <span className="text-[rgba(255,255,255,1)]">
              , and even future generations of Coin Plants.
            </span>
            <br />
            <span className="text-[rgba(255,255,124,1)] text-[20px]">
              <br />
              2. GAMEFI PROJECT IN DEVELOPMENT
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)] relative z-10">
              We plan to also incorporate{" "}
            </span>
            <span className="font-[`Upheaval TT (BRK)`] text-[28px] tracking-[1px] text-white">
              $
            </span>
            <span className="text-[rgba(255,255,255,1)] relative z-10">
              POLLEN as the main cryptocurrency for our huge{" "}
            </span>
            <span className="text-[rgba(123,217,141,1)] relative z-10">GameFi project</span>
            <span className="text-[rgba(255,255,255,1)] relative z-10">
              . This will be a P2E blockchain game where you’ll be able to
              literally “yield farm” via DeFi in a fun and interactive way, so
              staking your Coin Plants will give you a head start when we launch
              this revolutionary game!
            </span>
          </div>
        </div>

        <div className="utilityRight m-10 mr-0 w-[100%]">
          <div className="text-left mt-1">
            <span className="text-[rgba(255,255,124,1)] text-[20px]">
              3. VIP ACCESS TO THE TREE HOUSE CLUB
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)]">
              Every holder, whether staked or not, will have access to{" "}
            </span>
            <span className="text-[rgba(123,217,141,1)]">
              the Tree House Club
            </span>
            <span className="text-[rgba(255,255,255,1)]">
              . This VIP club resides in our Community Garden Discord as a
              private channel for verified holders of Coin Plants only. You can
              expect a bunch of exclusive news and alpha in this Club. Also, any
              future{" "}
            </span>
            <span className="text-[rgba(123,217,141,1)]">Airdrops</span>
            <span className="text-[rgba(255,255,255,1)]"> or VIP </span>
            <span className="text-[rgba(123,217,141,1)]">giveaways</span>
            <span className="text-[rgba(255,255,255,1)]">
              {" "}
              will only be accessible in the Tree House, so be sure to verify
              your Coin Plant NFT to join!
            </span>
            <br />
            <span className="text-[rgba(255,255,124,1)] text-[20px] ">
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
        {/* utility right text end */}
      </div>
    </div>
  );
}

export default Utility;
