import React from "react";
import CarouselWithContent from "../carousels/Carousels";
const HomeBanner: React.FC<any> = () => {
  return (
    <div className="min-w-[100rem] h-[40rem] p-7 left-[8.5rem] top-[38rem] bg-slate-50 flex flex-row shadow-2xl shadow-violet-300 rounded-xl absolute">
      <CarouselWithContent />
      <div className="w-[30rem]">
        <img className="mt-10" src="src\assets\logo\logo_banner.png" alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
