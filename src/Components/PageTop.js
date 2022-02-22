import React from "react";
import skyBG from "../assets/sky-color.png";
import clouds from "../assets/horizon-clouds.png";
import mountains from "../assets/horizon-mountains.png";
import bushes from "../assets/background-bushes.png";
import rocks from "../assets/foreground-rocks.png";
import tree from "../assets/foreground-tree.png";
import treeTwo from "../assets/topLeftTree.png";
import house from "../assets/house.png";

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
        </div>
      </div>
    </div>
  );
}

export default PageTop;
