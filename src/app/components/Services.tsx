import React from "react";
import { CardItems } from "./Card";

const Services = () => {
  return (
    <div 
    // style={{ backgroundImage: 'url("/Banner2.jpg")',
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",}}
    className="lg:px-16 py-2 w-full bg-[#085870] relative">
      <div className="bg-[#085870] w-full rounded-xl py-6 lg:py-14 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardItems
          imageUrl="/Card1.png"
          text="🕋 ഉംറയും സിയാറത്തും സംബന്ധിച്ച സഹായം – ആത്മീയയാത്രയ്ക്ക് പോകാൻ ആഗ്രഹിക്കുന്നവർക്കുള്ള സാമ്പത്തിക, പ്രായോഗിക സഹായങ്ങൾ."
          className="z-50 w-full"
          btnText="Fill the form"
          linkTo="https://forms.gle/mRKRu9NP6zAoDTVv5"
        />
        <CardItems
          imageUrl="/library.jpg"
          text="🎓 വിദ്യാഭ്യാസ സഹായം – സാമ്പത്തികമായി പിന്നോക്കമുള്ള കുട്ടികൾക്ക് സ്‌കോളർഷിപ്പുകൾ, പഠനസാധനങ്ങൾ എന്നിവ."
          className="z-50 w-full"
          btnText="Coming Soon"
        />
        <CardItems
          imageUrl="/medical.jpg"
          text="🏥 മെഡിക്കൽ സഹായം – ചികിത്സയ്ക്ക് സാമ്പത്തികമായ ബുദ്ധിമുട്ടുകൾ നേരിടുന്നവർക്ക് ചികിത്സാ സഹായം."
          className="z-50 w-full"
          btnText="Coming Soon"
        />
      </div>
      <img
        src="/wave-shape.png"
        className="w-fit h-24 object-cover rotate-180 rounded-lg absolute top-0 left-0"
        alt="service"
      />
      <img
        src="/wave-shape.png"
        className="w-fit h-24 object-cover rounded-lg absolute bottom-0 right-0"
        alt="service"
      />
    </div>
  );
};

export default Services;
