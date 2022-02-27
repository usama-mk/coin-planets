import React, { useEffect, useState } from "react";
import skyBG from "../assets/sky-color.png";
import clouds from "../assets/horizon-clouds.png";
import mountains from "../assets/horizon-mountains.png";
import bushes from "../assets/background-bushes.png";
import rocks from "../assets/foreground-rocks.png";
import tree from "../assets/foreground-tree.png";
import treeTwo from "../assets/topLeftTree.png";
import house from "../assets/house.png";
import ground from "../assets/foreground-ground.png";
import underGround from "../assets/foreground-underground.png";
import eegGem4 from "../assets/eegg-gem4-dirty.png";
import eegHodl from "../assets/eegg-hodl.png";
import eegTama from "../assets/eegg-tamagochi1-dirty.png";
import eegWorm from "../assets/eegg-worm.png";
import gem6Dirty from "../assets/eegg-gem6-dirty.png";
import site from "../assets/Site_header_No_Sky_.png";
import '../index.css'
import Header from "./Header";

function PageTop2() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(offsetY)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);
  return (
    <div   className="PageTop skyBG max-w-full overflow-x-clip mb-0">
       <Header/>
      
       {/* <div className="cloudsImg"> */}
           <img  style={{ transform: `translateY(${offsetY * 1.7}px)` }} className='relative z-0 opacity-80'  src={clouds} alt="" />
       {/* </div> */}
       <div   className="site mt-[-380px] relative z-10">
           <img src={site} alt="" />
       </div>
       <div className="relative" >
         <img src={underGround} className="mt-[-2rem] z-50" alt="" />
         <img src={eegGem4} className="absolute top-3 w-20 left-24 z-40  -rotate-[70deg]" alt="" />
         <img src={eegHodl} className="absolute top-8 w-20 left-14 z-40  rotate-[10deg] " alt="" />
         <img src={eegTama} className="absolute top-5 w-20 left-[45.5rem] z-40  -rotate-[70deg] " alt="" />
         <img src={eegWorm} className="absolute top-0 w-16 left-[55.5rem] z-40 rotate-[25deg]" alt="" />
         <img src={gem6Dirty} className="absolute top-4 w-16 left-[80rem] z-40 rotate-[0deg]" alt="" />
         </div>
    </div>
  );
}

export default PageTop2;
