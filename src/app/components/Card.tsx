'use client'
import { useState } from "react";

interface CardItemsProps {
  className?: string; 
  imageUrl?: string;
  text?: string;
  btnText?: string;
  linkTo?: string;
}

export const CardItems = ({ className, imageUrl, text, btnText, linkTo }: CardItemsProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setClicked(prev => !prev);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`min-h-75 group relative cursor-pointer overflow-hidden bg-white px-4 pt-4 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm rounded-md sm:rounded-lg sm:px-4 ${className ?? ''}`}
    >
      <span className={`absolute top-4 z-0 h-10 w-10 rounded-full bg-emerald-900 transition-all duration-300 
        ${clicked ? 'scale-[21] sm:scale-100' : 'scale-100'} group-hover:scale-[21] sm:group-hover:scale-[25] md:group-hover:scale-[17] lg:group-hover:scale-[16.5]`}>
      </span>

      <div className="relative z-10 sm:mx-auto max-w-md">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-900 transition-all duration-300 group-hover:bg-emerald-600">
          <span className="h-6 w-6 rounded-full bg-white"></span>
        </span>

        <div
          className={`space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 
            ${clicked ? 'block text-white/90' : 'hidden'} group-hover:block group-hover:text-white/90`}>
          <p>{text}</p>
        </div>

        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a
              target="_blank"
              href={linkTo || '#'}
              className={`text-sky-500 transition-all duration-300 
                ${clicked ? 'block text-white' : 'hidden'} group-hover:block group-hover:text-white`}
            >
              {btnText} →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
