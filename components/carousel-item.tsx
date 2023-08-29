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
      <div className="flex justify-between">
        <h3>{title}</h3>
        <Image src={imageSrc} alt={imageAlt} width={50} height={50} />
      </div>
      <p>{description}</p>
      <div>Will Populate With Tech Stack</div>
      <p>{projectLink}</p>
      <p>{githubLink}</p>
    </div>
  );
}
