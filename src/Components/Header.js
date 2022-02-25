import React from 'react'
import headerLogo from "../assets/Header Logo.png";
import discord from "../assets/discord.png";
import opensea from "../assets/opensea.png";
import twitter from "../assets/twitter.png";

function Header() {

    const HeaderElement=({name})=>{
        return(
            <div className="text-white mx-6 text-[24px] relative z-50 cursor-pointer">
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
            <div className="text-center relative z-50 cursor-pointer bg-[rgba(97,32,15,1)] text-[20px] font-[Early GameBoy] text-[rgba(108,189,69,1)] max-h-24 h-14 px-12 py-3 ml-10 rounded-2xl">
                {buttonName}
            </div>
        )
    }
  return (
    <div className='Header absolute top-0 mt-10 mx-12 flex '>
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
  )
}

export default Header