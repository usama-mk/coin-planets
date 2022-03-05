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
                <img src={logo} className='w-96 mt-[-2rem] relative z-50 ml-[-45px]' alt="" />
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
            <div className="flex justify-center align-middle relative z-50 cursor-pointer bg-[rgba(97,32,15,1)] text-[13px] font-[Early GameBoy] text-[rgba(108,189,69,1)] h-14 px-12 py-3 ml-10 rounded-2xl font-early -mt-2">
                <span className='mt-[6px]'>{buttonName}</span>
            </div>
        )
    }
  return (
    <div className='Header absolute top-0 mt-10  flex flex-col w-full '>
      <div className="uppderHead flex justify-evenly align-middle h-full">
      <div className="leftHeader flex justify-evenly align-middle">
      <HeaderElement name="ROADMAP" />
        <HeaderElement name="RARITY" />
        <HeaderElement name="WHITELIST" />
        <HeaderElement name="TEAM" />
        </div>
        <HeaderLogo logo={headerLogo} />
        <div className="rightHeader flex justify-evenly align-middle ">
        <HeaderSocialIcon logo={discord} />
        <HeaderSocialIcon logo={twitter} />
        <HeaderSocialIcon logo={opensea} />
        <ConnectWalletBtn buttonName="Connect wallet" />
            </div>
        
      </div>

      <div className=" relative z-10  "> 
     <span className=" font-early max-w-[50%] text-[12px] text-center text-[white] shadow-xl shadow-black ">
     Coin Plants is an NFT collection of 2500 succulent JPEG’s that will help <br />
     rebuild our forests!
     </span>
     <div className="btnWrapper flex justify-center mt-5 ">
       <div className="mintBtn bg-[#7BD98D] text-center px-20 py-4 rounded-2xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] w-fit cursor-pointer text-white font-early">
            LEARN MORE
        </div>
       </div>
      </div>

    </div>
  )
}

export default Header