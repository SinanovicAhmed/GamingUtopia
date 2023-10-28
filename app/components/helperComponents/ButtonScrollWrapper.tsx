"use client";
import React, { useRef } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const ButtonScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 340;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 340;
    }
  };
  return (
    <div className="w-full flex items-center relative">
      <button
        className="absolute left-0 z-10 h-[50%] hover:brightness-50 hover:bg-[#24252b40] rounded-lg"
        onClick={scrollLeft}
      >
        <FcPrevious style={{ color: "white" }} size={30} />
      </button>
      <button
        className="absolute right-0 z-10 h-[50%] hover:brightness-50 hover:bg-[#24252b40] rounded-lg"
        onClick={scrollRight}
      >
        <FcNext style={{ color: "white" }} size={30} />
      </button>

      <div
        ref={containerRef}
        className="w-full flex gap-10 overflow-x-hidden white-space-no-wrap scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
};

export default ButtonScrollWrapper;
