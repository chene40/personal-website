"use client";

// Library/Module Imports
import Image from "next/image";
import { TouchEventHandler, useEffect, useState } from "react";

// Project Imports
import items from "@/data/carousel-projects";

// Relative/Local Imports
import CarouselItem from "./carousel-item";
import { start } from "repl";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopAutoPlay, setStopAutoPlay] = useState(false);
  const [width, setWidth] = useState(0);

  const [startX, setStartX] = useState<null | number>(null);
  const [endX, setEndX] = useState<null | number>(null);

  const handleTouchStart: TouchEventHandler = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove: TouchEventHandler = (e) => {
    const currentX = e.touches[0].clientX;
    setEndX(currentX);
  };

  const handleTouchEnd: TouchEventHandler = (e) => {
    if (!startX || !endX) return;

    const selection = window.getSelection();

    if (selection && selection.toString() !== "") {
      // Text has been selected, do not invoke a transition
      setStartX(null);
      setEndX(null);
      setStopAutoPlay(true);
      return;
    }

    const diffX = startX - endX;

    if (diffX > 75) {
      updateIndex(currentIndex + 1);
      setStopAutoPlay(true);
    } else if (diffX < -75) {
      updateIndex(currentIndex - 1);
      setStopAutoPlay(true);
    }

    setStartX(null);
    setEndX(null);
  };

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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Initial window width trigger since SSR does not provide a window object (client object)
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="h-full w-full flex flex-col items-center overflow-hidden bg-gray-900 relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-full h-full whitespace-nowrap inline-flex"
        style={{
          transform: `translate(-${currentIndex * 100}%)`,
          transition: "transform 1s",
        }}
      >
        {items.map((item, index) => {
          return (
            <CarouselItem
              carouselItem={item}
              width={width}
              key={index}
              stopAnimationHandler={setStopAutoPlay}
            />
          );
        })}
      </div>
      <div className="z-10">
        <button
          className={`absolute left-8 ${width < 640 ? "top-20" : "top-1/2"}`}
          onClick={() => updateIndex(currentIndex - 1)}
        >
          <Image
            className="invert"
            src={"/misc/Arrow.svg"}
            alt="Left Arrow"
            width={30}
            height={30}
          />
        </button>
        <button
          className={`absolute right-8 ${width < 640 ? "top-20" : "top-1/2"}`}
          onClick={() => updateIndex(currentIndex + 1)}
        >
          <Image
            src={"/misc/Arrow.svg"}
            alt="Right Arrow"
            width={30}
            height={30}
            className="rotate-180 invert"
          />
        </button>
        {/* Replace button text with icon (make circle filled in when current index is selected) */}
        <div className="flex">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex items-center mb-4 mr-4">
                <input
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4 cursor-pointer"
                  onChange={() => updateIndex(index)}
                  checked={index === currentIndex ? true : false}
                />
              </div>
            );
          })}
        </div>
        <label className="absolute bottom-16 right-6 md:bottom-4 md:right-24 inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={() => setStopAutoPlay(!stopAutoPlay)}
            checked={stopAutoPlay}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-red-400 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-white">
            Stop Animation
          </span>
        </label>
      </div>
    </div>
  );
}
