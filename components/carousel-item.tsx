import React from "react";
import Image from "next/image";

interface CarouselItemProps {
  item: {
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    // techStack: string[];
    projectLink: string;
    githubLink: string;
  };
}

export default function CarouselItem({ item }: CarouselItemProps) {
  const { title, imageSrc, imageAlt, description, projectLink, githubLink } =
    item;
  return (
    <div className="h-full w-full shrink-0 py-8 px-24">
      <div className="flex h-24 items-center justify-between">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>
      <hr className="bg-black h-0.5" />
      <div className="h-full flex flex-col py-8">
        <p className="h-1/2">{description}</p>
        <div className="h-1/5">Will Populate With Tech Stack</div>
        <div className="h-1/5 flex justify-evenly">
          <button className="h-16 w-1/6 flex justify-center items-center bg-emerald-200 rounded-lg border-solid border-2 border-black">
            <a href={projectLink} target="_blank">
              Learn More About Project
            </a>
          </button>
          <button className="h-16 w-1/6 flex justify-center items-center bg-red-200 rounded-lg border-solid border-2 border-black">
            <a href={githubLink} target="_blank">
              View the Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
