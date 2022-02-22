import React from "react";
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

function PageTop() {
  return (
    <div className=" max-w-full overflow-x-hidden">
      <div className="topGrouped relative max-w-full maxh ">
        <img className="   max-h-[45rem] min-w-full" src={skyBG} alt="" />

        <div className="childrenBGTop absolute top-0">
          <img className="" src={clouds} alt="" />
          <img className="h-[400px] min-w-full" src={mountains} alt="" />

          <div className="childrenBGTop flex ">
            <img
              className="object-contain h-min mt-[-5rem] z-20 w-44"
              src={bushes}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-8rem] ml-[-3rem] z-10 w-44"
              src={rocks}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-26.5rem] ml-[-14rem] w-[31rem]"
              src={tree}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-5rem] ml-[-10rem] z-11 w-44"
              src={bushes}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-25rem] ml-[-5rem] z-11 w-[45%]"
              src={house}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-5rem] z-20 ml-[-5rem] w-44"
              src={bushes}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-8rem] ml-[-3rem] z-10 w-44"
              src={rocks}
              alt=""
            />
            <img
              className="object-contain h-min mt-[-27rem] ml-[-20rem] w-[31rem]"
              src={treeTwo}
              alt=""
            />
          </div>
          <img src={ground} className="mt-[-2rem] relative z-40" alt="" />
         <div className="relative" >
         <img src={underGround} className="mt-[-2rem]  " alt="" />
         <img src={eegGem4} className="absolute top-3 w-20 left-24 -rotate-[70deg]" alt="" />
         <img src={eegHodl} className="absolute top-8 w-20 left-14 rotate-[10deg] " alt="" />
         <img src={eegTama} className="absolute top-5 w-20 left-[45.5rem] -rotate-[70deg] " alt="" />
         <img src={eegWorm} className="absolute top-0 w-16 left-[55.5rem] z-40 rotate-[25deg]" alt="" />
         <img src={gem6Dirty} className="absolute top-4 w-16 left-[80rem] rotate-[0deg]" alt="" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default PageTop;
