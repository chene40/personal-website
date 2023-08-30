"use client";

import CarouselItem from "./carousel-item";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) setCurrentIndex(0);
    else if (newIndex > items.length - 1) setCurrentIndex(items.length - 1);
    else setCurrentIndex(newIndex);
  };

  const items = [
    {
      title: "Poolber",
      imageSrc: "/PoolberIcon.svg",
      imageAlt: "Poolber Icon",
      description: `A user-oriented carpooling app that encourages riders to share riders together. This not only help reduce 
		the gaseous emissions and traffic congestions, but it also helps you cut down the cost of your ride while 
		also meeting new people! This app uses the Google Maps API in order to set up the trip route and calculate ride 
		information such as the order of pickup, ride fare, distance, time, etc.`,
      techStack: [
        "html",
        "css",
        "javascript",
        "typescript",
        "react",
        "node",
        "firebase",
        "figma",
        "googlemaps",
      ],
      projectLink: "https://github.com/chene40/Poolber/tree/main",
      githubLink:
        "https://github.com/chene40/Poolber/tree/main/D4/CarpoolProjectExpo",
    },
    {
      title: "Azeliore Bot",
      imageSrc: "/GenshinIcon.svg",
      imageAlt: "Genshin Impact Icon",
      description: `A discord bot to simulate the Genshin Impact banner system backed with statistical models so users can pull
	  for free and test their luck. The banners available to wish upon are those on the second phase of version 3.3 (Raiden 
		Shogun and Ayato's rerun banner). This project was built mostly using Node.js and made use of the discord.js API and
		a fan-made genshin.js API. Personal information such as pity rates for each banner and account are stored in a MongoDB cluster.`,
      techStack: ["javascript", "node", "bash", "mongodb", "discord"],
      projectLink: "https://github.com/chene40/azeliore-bot",
      githubLink: "https://github.com/chene40/azeliore-bot",
    },
    {
      title: "Tenzies",
      imageSrc: "/Dice.svg",
      imageAlt: "An image of a dice",
      description: `A recreation of the classical game Tenzies. Roll until all the dice are the same and click each die to freeze
	  its current value between rolls. All relevant data pertaining to the game are stored via local storage and you can check if 
	  you've beaten your old record. Give it a try and see how fast you can make all 10 dies have the same face!`,
      techStack: ["html", "css", "javascript", "react", "vercel"],
      projectLink: "https://tenzies-chene40-mcmasterca.vercel.app/",
      githubLink: "https://github.com/chene40/Tenzies",
    },
    {
      title: "Personal Website",
      imageSrc: "/WebsiteIcon.svg",
      imageAlt: "An image of a dice",
      description: `The website that you're currently looking at right now is also a personal project that I've created to get to 
	  know about me a little more. In here, you will find my work, my experiences, and some of my interests. Feel free to take a browse
	  around and see if anything piques your interest!`,
      techStack: [
        "html",
        "css",
        "javascript",
        "typescript",
        "react",
        "next",
        "tailwindcss",
        "vercel",
      ],
      projectLink: "https://tenzies-chene40-mcmasterca.vercel.app/",
      githubLink: "https://github.com/chene40/Tenzies",
    },
  ];

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
