"use client";

import CarouselItem from "./carousel-item";
import { useEffect, useState } from "react";

import items from "@/data/carousel-projects";

import Image from "next/image";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopAutoPlay, setStopAutoPlay] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) setCurrentIndex(items.length - 1);
    else if (newIndex > items.length - 1) setCurrentIndex(0);
    else setCurrentIndex(newIndex);
  };

  const autoTransition = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex === items.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    let transitionInterval: NodeJS.Timeout;

    if (!stopAutoPlay) {
      transitionInterval = setInterval(autoTransition, 5000);
    }

    return () => {
      clearInterval(transitionInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, stopAutoPlay]);

  return (
    <div className="h-[75vh] w-full flex flex-col items-center overflow-hidden bg-cyan-200 relative">
      <div
        className="w-full h-full whitespace-nowrap inline-flex"
        style={{
          transform: `translate(-${currentIndex * 100}%)`,
          transition: "transform 1s",
        }}
      >
        {items.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </div>
      <div className="z-10">
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
        <div className="flex">
          {items.map((item, index) => {
            return (
              //   <button
              //     className="mr-2"
              //     key={index}
              //     onClick={() => updateIndex(index)}
              //   >
              //     {currentIndex === index ? "X" : "O"}
              //   </button>
              <div key={index} className="flex items-center mb-4 mr-4">
                <input
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4"
                  onClick={() => updateIndex(index)}
                  checked={index === currentIndex ? true : false}
                />
              </div>
            );
          })}
        </div>
        <label className="absolute bottom-4 right-24 inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onClick={() => setStopAutoPlay(!stopAutoPlay)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Pause Auto Transition
          </span>
        </label>
      </div>
    </div>
  );
}
