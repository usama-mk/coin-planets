import React from 'react'
import headerLogo from "../assets/Header Logo.png";
import discord from "../assets/discord.png";
import opensea from "../assets/opensea.png";
import twitter from "../assets/twitter.png";

function Header() {

    const HeaderElement=({name})=>{
        return(
            <div className="text-white mx-6 text-[18px] relative z-50 cursor-pointer font-title">
                {name}
            </div>
        )
    }

    const HeaderLogo=({logo})=>{
        return(
            <div className="text-center">
                <img src={logo} className='w-96 mt-[-2rem] relative z-50' alt="" />
            </div>
        )
    }

    const HeaderSocialIcon=({logo})=>{
        return(
            <div className="text-center">
                <img src={logo} className='w-10 mx-4 relative z-50 cursor-pointer' alt="" />
            </div>
        )
    }

    const ConnectWalletBtn=({buttonName})=>{
        return(
            <div className="flex justify-center align-middle relative z-50 cursor-pointer bg-[rgba(97,32,15,1)] text-[13px] font-[Early GameBoy] text-[rgba(108,189,69,1)] h-14 px-12 py-3 ml-10 rounded-2xl font-early">
                <span className='mt-[5px]'>{buttonName}</span>
            </div>
        )
    }
  return (
    <div className='Header absolute top-0 mt-10  flex flex-col w-full '>
      <div className="uppderHead flex justify-evenly">
      <HeaderElement name="ROADMAP" />
        <HeaderElement name="RARITY" />
        <HeaderElement name="WHITELIST" />
        <HeaderElement name="TEAM" />
        <HeaderLogo logo={headerLogo} />
        <HeaderSocialIcon logo={discord} />
        <HeaderSocialIcon logo={twitter} />
        <HeaderSocialIcon logo={opensea} />
        <ConnectWalletBtn buttonName="Connect wallet" />
        
      </div>

      <div className=" relative z-10  "> 
     <span className=" font-early max-w-[50%] text-[12px] text-center text-[white] ">
     Coin Plants is an NFT collection of 2500 succulent JPEG’s that will help <br />
     rebuild our forests!
     </span>
      </div>

    </div>
  )
}

export default Header