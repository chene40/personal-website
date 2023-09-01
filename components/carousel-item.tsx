import React from "react";
import Image from "next/image";

import icons from "./assets";

interface CarouselItemProps {
  item: {
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    techStack: string[];
    projectLink: string;
    githubLink: string;
    demoVideo: string;
  };
}

export default function CarouselItem({ item }: CarouselItemProps) {
  const {
    title,
    imageSrc,
    imageAlt,
    description,
    techStack,
    projectLink,
    githubLink,
    demoVideo,
  } = item;
  return (
    <div className="h-full w-full shrink-0 py-8 px-24 flex">
      <div className="w-1/2 h-full">
        <div className="flex h-24 items-center justify-between">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
        </div>
        <hr className="bg-black h-0.5" />
        <div className="h-full flex flex-col py-8">
          <p className="h-1/2 whitespace-normal text-lg">{description}</p>
          <div className="h-1/4 flex items-center">
            {techStack.map((item: string, index: number) => {
              return (
                <Image
                  className="mr-2"
                  src={icons[item]}
                  key={index}
                  alt={item}
                  width={50}
                  height={50}
                />
              );
            })}
          </div>
          <div className="h-1/4 flex justify-evenly">
            <button className="h-16 w-1/3 flex justify-center items-center bg-emerald-200 rounded-lg border-solid border-2 border-black">
              <a href={projectLink} target="_blank">
                Learn More About Project
              </a>
            </button>
            <button className="h-16 w-1/3 flex justify-center items-center bg-red-200 rounded-lg border-solid border-2 border-black">
              <a href={githubLink} target="_blank">
                View the Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center ml-12">
        <video controls>
          <source src={demoVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
