"use client";

import CarouselItem from "./carousel-item";
import { useEffect, useState } from "react";

import items from "@/data/carousel-projects";

import Image from "next/image";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) setCurrentIndex(0);
    else if (newIndex > items.length - 1) setCurrentIndex(items.length - 1);
    else setCurrentIndex(newIndex);
  };

  const autoTransition = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex === items.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const transitionInterval = setInterval(autoTransition, 5000);

    return () => {
      clearInterval(transitionInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="h-[75vh] w-full flex flex-col items-center overflow-hidden bg-cyan-200 relative">
      <div
        className="w-full h-full whitespace-nowrap inline-flex"
        style={{
          transform: `translate(-${currentIndex * 100}%)`,
          transition: "transform 1s",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
        }}
      >
        {items.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </div>
      <div>
        {/* Replace button text with icon */}
        <button
          className="absolute left-8 top-1/2"
          onClick={() => updateIndex(currentIndex - 1)}
        >
          <Image src={"/Arrow.svg"} alt="Left Arrow" width={30} height={30} />
        </button>
        <button
          className="absolute right-8 top-1/2"
          onClick={() => updateIndex(currentIndex + 1)}
        >
          <Image
            src={"/Arrow.svg"}
            alt="Right Arrow"
            width={30}
            height={30}
            className="rotate-180"
          />
        </button>
        {/* Replace button text with icon (make circle filled in when current index is selected) */}
        <div>
          {items.map((item, index) => {
            return (
              <span key={index} onClick={() => updateIndex(index)}>
                O
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
