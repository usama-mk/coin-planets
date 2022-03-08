import React from 'react'
import headerLogo from "../assets/Header Logo.png";
import discord from "../assets/discord.png";
import opensea from "../assets/opensea.png";
import twitter from "../assets/twitter.png";


function Footer() {
    const FooterOption=({name})=>{
        return(
            <div style={{display: 'flex', alignItems: 'center'}} className="footerOption text-white mx-6 text-[18px]  cursor-pointer font-title">
                {name}
                </div>
        )
    }

    const FooterSocialIcon=({logo})=>{
        return(
            <div className="text-center">
                <img src={logo} className='w-10 mx-4 cursor-pointer' alt="" />
            </div>
        )
    }
  return (
    <div style={{backgroundColor: 'rgba(0,0,0, 0.4)'}} className='text-white absolute bottom-0 z-50 h-36 p-10 w-full flex justify-between'  >
        <div className="logo ml-[-50px] mt-[-20px] mr-5">
            <img src={headerLogo} width={300} alt="" />
            </div>

        <div className="footerOptions flex mr-16 ">
        <FooterOption name="ROADMAP" />
        <FooterOption name="RARITY" />
        <FooterOption name="WHITELIST" />
        <FooterOption name="TEAM" />
            </div>


            <div style={{alignItems: 'center'}}  className="flex justify-evenly mr-14 ">
        <FooterSocialIcon logo={discord} />
        <FooterSocialIcon logo={twitter} />
        <FooterSocialIcon logo={opensea} />
            </div>
        </div>
  )
}

export default Footer