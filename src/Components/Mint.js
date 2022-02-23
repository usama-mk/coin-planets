import React from 'react'
import mintMid from '../assets/Minting5fps.png'
import mintSide from '../assets/MintingSmall5fps.png'

function Mint() {
  return (
    <div className='Mint  border-8 border-[rgba(244,244,123,1)] rounded-[3rem] bg-[rgba(183,102,95,1)] p-10 w-2/4 drop-shadow-[1px_0px_5px_rgba(244,244,123,1)]'>
        
        <div className="mintItems flex justify-center">
            <img src={mintSide} className='object-contain w-40' alt="" />
            <img src={mintMid} className='object-contain w-48' alt="" />
            <img src={mintSide} className='object-contain w-40' alt="" />
        </div>


        <div className="MIDesc mt-10 text-[20px]">
     
		<span>Each coin plant costs only </span><span className='text-[rgba(123,217,141,1)]'>0.04 ETH</span><span> DURING THE </span><span className='text-[rgba(255,255,124,1)]' >PRESALE</span><span>.ONLY Whitelisted wallet addresses will be able to mint at this price.</span>
        </div>

       <div className="btnWrapper flex justify-center mt-20">
       <div className="mintBtn bg-[rgba(88,199,110,1)] text-center px-20 py-4 rounded-2xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] w-fit cursor-pointer text-white">
            MINT NOW!
        </div>
       </div>

        <div className="mintQty mt-5">
           <span className='text-[rgba(255,255,124,1)]' >0/2500 minted</span>
        </div>
    </div>
  )
}

export default Mint