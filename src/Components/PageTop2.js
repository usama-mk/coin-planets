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
           <img  style={{ transform: `translateY(${offsetY * 2}px)` }} className='relative z-0'  src={clouds} alt="" />
       {/* </div> */}
       <div   className="site mt-[-380px] relative z-10">
           <img src={site} alt="" />
       </div>
    </div>
  );
}

export default PageTop2;
