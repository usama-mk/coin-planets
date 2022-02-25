import React from 'react'
import cpGif from '../assets/CP rotating gif.GIF'

function CPIntro() {
  return (
    <div className='flex  CPIntro pt-32 p-32'>
        <div className="cpIntroLeft">
            <div className="cplTitle text-left text-[2.5rem] text-white mb-5">
            WHAT ARE COIN PLANTS?
            </div>

            <div className='text-[1.25rem] text-left'>
		<span className='text-[rgba(255,255,124,1)]'>Coin Plants are a collection of 2500 randomly generated pixel art NFTs</span><span className="text-[rgba(255,255,255,1)]"> that are sprouting up on the Ethereum blockchain. <br/></span><br/><span className='text-[rgba(255,255,124,1)]' >Each Coin Plant design represents one of the top blue chip Cryptocurrencies</span><span className="text-[rgba(255,255,255,1)]"> through their colour scheme, excluding stable coins.These colours are expressed in various aspects of the plant and even in the pot itself, which prominently displays one of 12 Cryptocurrency emblems. <br/></span><br/><span className='text-[rgba(255,255,124,1)]'>The purpose of Coin Plants is to help irl plants by rebuilding our forests!</span><span className="text-[rgba(255,255,255,1)]"> there is a lot of deforestation happening around the globe, so </span><span className='text-[rgba(255,255,124,1)]'>we have partnered with the charity</span><span className="text-[rgba(255,255,255,1)]"> </span><span className='text-[rgba(123,217,141,1)]'>One Tree Planted</span><span className="text-[rgba(255,255,255,1)]"> to help the cause and plant thousands of trees!<br/></span><br/><span className='text-[rgba(255,255,124,1)]'>Our aim is to donate $50,000</span><span className="text-[rgba(255,255,255,1)]"> through the minting of Coin Plants. So every one you mint means you’re helping us get another step closer to making this reforestation dream a reality!</span>
	</div>

        </div>

        <div className="cpGifWrapper mt-auto ml-60 mb-[-2rem]">
        <img className="w-[40rem] rounded-[2rem]" src={cpGif} alt="" />
        </div>
      
    </div>
  )
}

export default CPIntro