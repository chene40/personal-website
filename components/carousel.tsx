"use client";

import CarouselItem from "./carousel-item";
import { useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) setCurrentIndex(0);
    else if (newIndex > items.length - 1) setCurrentIndex(items.length - 1);
    else setCurrentIndex(newIndex);
  };

  const items = [
    {
      title: "Title 1",
      imageSrc: "/McMasterLogo.svg",
      imageAlt: "McMaster Logo",
      description: "Test Description 1",
      // techStack: string[],
      projectLink: "Some link 1",
      githubLink: "Some github link 1",
    },
    {
      title: "Title 2",
      imageSrc: "/EsriLogo.svg",
      imageAlt: "Esri Logo",
      description: "Test Description 2",
      // techStack: string[],
      projectLink: "Some link 2",
      githubLink: "Some github link 2",
    },
    {
      title: "Title 3",
      imageSrc: "/GunkiiLogo.svg",
      imageAlt: "Gunkii Logo",
      description: "Test Description 3",
      // techStack: string[],
      projectLink: "Some link 3",
      githubLink: "Some github link 3",
    },
  ];

  return (
    <div className="h-96 w-full flex flex-col items-center overflow-hidden bg-cyan-200 relative">
      <div
        className="w-full h-full whitespace-nowrap inline-flex"
        style={{
          transform: `translate(-${currentIndex * 100}%)`,
          transition: "transform 0.3s",
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
          {"<"}
        </button>
        <button
          className="absolute right-8 top-1/2"
          onClick={() => updateIndex(currentIndex + 1)}
        >
          {">"}
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
