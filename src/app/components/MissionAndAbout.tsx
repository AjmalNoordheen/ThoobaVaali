"use client";
import React from "react";
import { useApp } from "../context/AppContext";
import ScrollInView from "./ScrollFadeIn";

const MissionAndAbout = () => {
  const { isLampOn } = useApp();

  return (
    <div
      className={` ${
        isLampOn ? "bg-black" : "bg-white"
      } py-16 flex flex-col gap-y-12 sm:gap-y-16`}
    >
      <ScrollInView direction="left" duration={0.9} delay={0.3}>
      <div className="flex pl-5 pr-5 md:pr-0 md:pl-6 lg:pl-20 xl:pl:28 md:flex-row flex-col justify-between gap-x-10 gap-y-3">
        <div className="flex flex-col gap-y-4 items-start xl:pt-4">
          <p
            className={`${
              isLampOn ? "text-yellow-500" : "text-emerald-900 "
            } text-3xl font-semibold`}
          >
            WHO WE ARE
          </p>
          <p
            className={`${
              isLampOn ? "text-white" : "text-black"
            } text-2xl lg:text-3xl xl:text-[50px] font-sora break-words xl:leading-16`}
          >
            Thooba Vali Charitable Trust.
          </p>
          <p
            className={`text-sm leading-6 ${
              isLampOn ? "text-slate-400" : "text-emerald-700 "
            }`}
          >
            ദാരിദ്ര്യത്തിൽ അലയുന്നവർക്കും സഹായം ആവശ്യമായവർക്കും വിവിധ മേഖലകളിൽ
            സഹായം നൽകുന്ന ഒരു സന്നദ്ധസംഘടനയാണ്. ആത്മീയവും സാമൂഹികവുമായ സേവനമാണ്
            ഞങ്ങളുടെ പ്രധാന ദൗത്യമായി സ്വീകരിക്കുന്നത്. തുബ് വാലി ചാരിറ്റബിൾ
            ട്രസ്റ്റ് ജീവിതമാറ്റത്തിനും ആത്മീയ ഉന്നമനത്തിനും ഒപ്പംനിൽക്കുന്നു.
          </p>
        </div>
       <img
          loading="lazy"
          src="/madeena1.png"
          className="min-w-[50%] h-full max-h-[370px] object-fill rounded-lg md:rounded-none md:rounded-l-lg"
          alt="mosque"
        />
      </div>
      </ScrollInView>
      <ScrollInView direction="right" duration={0.9} delay={0.3}>
      <div className="flex pl-5 pr-5 md:pl-0 md:pr-6 lg:pr-20 xl:pr:28 justify-between md:flex-row flex-col-reverse gap-x-10 gap-y-3">
        <img
          loading="lazy"
          src="/mosque1.jpg"
          className="min-w-[50%] h-full lg:max-h-[370px] object-fill rounded-lg md:rounded-none md:rounded-r-lg"
          alt="mosque"
        />
        <div className="flex flex-col gap-y-4 items-start xl:pt-4">
          <p
            className={`${
              isLampOn ? "text-yellow-500" : "text-emerald-900 "
            } text-3xl font-semibold`}
          >
            OUR MISSION
          </p>
          <p
            className={`${
              isLampOn ? "text-white" : "text-black"
            } text-2xl lg:text-3xl xl:text-[50px] font-sora break-words xl:leading-16`}
          >
            ദൗത്യബോധത്തോടെ നന്മയുടെ കൈത്താങ്ങ്
            
          </p>
          <p
            className={`text-sm leading-6 ${
              isLampOn ? "text-slate-400" : "text-emerald-700 "
            }`}
          >
            ഞങ്ങളുള്ളത് സേവനത്തിനായി.ജീവിതത്തിന്റെ വിവിധ ഘട്ടങ്ങളിൽ പിന്തുണയ്ക്കാൻ: ആത്മീയ യാത്രകൾ മുതൽ വിദ്യാഭ്യാസം, ആരോഗ്യം, സാമ്പത്തിക സുരക്ഷാ വരെ.തുബ് വാലി ചാരിറ്റബിൾ ട്രസ്റ്റ് ജീവിതമാറ്റത്തിനും ആത്മീയ ഉന്നമനത്തിനും ഒപ്പംനിൽക്കുന്നു.
          </p>
        </div>
      </div>
      </ScrollInView>
    </div>
  );
};

export default MissionAndAbout;
