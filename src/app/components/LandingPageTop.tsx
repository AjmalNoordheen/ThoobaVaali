"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const LandingPageTop = () => {
  const [isLampOn, setIsLamp] = useState(false);
  const { setIsLampOn } = useApp();
  
  const handleLampClick = () => {
    setIsLamp((prev) => !prev);
    setIsLampOn(!isLampOn);
  };
  return (
    <div
      style={{ backgroundColor: isLampOn ? "black" : "white" }}
      // style={isLampOn ? {backgroundColor:'black'}: { backgroundImage: 'url("/Banner2.jpg")',
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",}}
      className={`w-full relative h-fit flex items-center justify-center px-4 sm:pb-16`}
    >
      <div className=" flex-col flex items-center gap-y-8 justify-center h-full">
        <img
          title={isLampOn ? "Light Mode" : "Dark Mode"}
          src={isLampOn ? "/hangingLamp.png" : "/lampOff.png"}
          className={`top-0 bottom-0 w-48 sm:w-52 h-fit mb-2 cursor-pointer transition-all duration-300 ${
            isLampOn ? "drop-shadow-[0_0_30px_#f59e42] brightness-125" : ""
          }`}
          alt="home"
          onClick={handleLampClick}
        />
        <div className="w-full flex flex-col items-center justify-center gap-y-3">
          <p
            className={`break-words font-sora ml-1 text-lg font-black ${
              isLampOn ? "text-white" : "text-black"
            }`}
          >
           (مُحَمَّدٌ ﷺ) مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ
          </p>
          
          <div
            className={`text-center break-words text-4xl sm:text-6xl md:text-7xl font-bold md:w-3/4 ${
              isLampOn ? "text-white" : "text-emerald-900"
            }`}
          >
           Charity does not decrease {' '}
            <span className={isLampOn ? "text-emerald-900" : "text-black"}>
              W
            </span>
            ealth!
          </div>
        
          <button
            className={`${
              isLampOn ? "bg-emerald-900" : "bg-black"
            }  text-white px-4 py-2 rounded-md mt-3 cursor-pointer`}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex gap-x-3 h-fit items-start py-4 absolute top-0 left-3">
        {/* <p>Home</p>
        <p>About</p>
        <p>Join</p> */}
        <Image
          className="object-contain rounded border border-gray-300"
          alt="icon"
          src={"/Thooba.png"}
          height={60}
          width={60}
        />
        <div className="text-sm md:text-base font-semibold text-emerald-800 leading-4 pt-1">
        <p>Thooba Vaali</p>
        <p>Charitable </p>
        <p> Trust</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageTop;
