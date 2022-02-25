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
import '../index.css'
import Header from "./Header";

function PageTop() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(offsetY)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);
  return (
    <div className=" PageTop max-w-full overflow-x-hidden">
        {/* relative max-w-full */}
        {/* <div className="   max-h-[45rem] min-w-full relative bg-fixed bg-no-repeat bg-cover " style={{backgroundImage: `url(${skyBG})`}} alt=""></div> */}
        {/* <img className="   max-h-[100vh] min-w-full sticky top-0 " src={skyBG} alt="" /> */}
      <div className="topGrouped max-h-full  "> 
        <img  style={{ transform: `translateY(-${offsetY * 0.5}px)` }} className="   max-h-[100vh] min-w-full sticky top-0 " src={skyBG} alt="" />

        <div className="childrenBGTop absolute top-0">
          <Header/>
          <img style={{ transform:offsetY<2000? `translateY(${offsetY * 0.5}px)`:'' }}   className="mt-7 opacity-70 relative z-0" src={clouds} alt="" />
          <img   className="h-[400px] min-w-full relative z-10 " src={mountains} alt="" />

          <div className="childrenBGTop flex ">
            <img
              className="object-contain h-min mt-[-5rem] z-40 w-44"
              src={bushes}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-8rem] ml-[-3rem] z-30 w-44"
              src={rocks}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-26.5rem] ml-[-14rem] w-[31rem]  z-20 "
              src={tree}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-5rem] ml-[-10rem] z-11 w-44"
              src={bushes}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-25rem] ml-[-5rem] z-20 w-[45%]"
              src={house}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-5rem] z-40 ml-[-5rem] w-44"
              src={bushes}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-8rem] ml-[-3rem] z-30 w-44"
              src={rocks}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
            <img
              className="object-contain h-min mt-[-27rem] ml-[-20rem] w-[31rem] z-20 "
              src={treeTwo}
              alt=""
              style={{ transform: `-translateY(${offsetY * 0.8}px)` }}
            />
          </div>
          <img src={ground} className="mt-[-2rem] relative z-40" alt="" />
         <div className="relative" >
         <img src={underGround} className="mt-[-2rem] z-50" alt="" />
         <img src={eegGem4} className="absolute top-3 w-20 left-24 z-40  -rotate-[70deg]" alt="" />
         <img src={eegHodl} className="absolute top-8 w-20 left-14 z-40  rotate-[10deg] " alt="" />
         <img src={eegTama} className="absolute top-5 w-20 left-[45.5rem] z-40  -rotate-[70deg] " alt="" />
         <img src={eegWorm} className="absolute top-0 w-16 left-[55.5rem] z-40 rotate-[25deg]" alt="" />
         <img src={gem6Dirty} className="absolute top-4 w-16 left-[80rem] z-40 rotate-[0deg]" alt="" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default PageTop;
