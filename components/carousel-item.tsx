// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

// Project Imports
import { CarouselItemProps } from "@/types/type";
import icons from "@/data/assets";

export default function CarouselItem({ carouselItem }: CarouselItemProps) {
  const {
    title,
    imageData,
    description,
    additionalInfo,
    techStack,
    projectLink,
    githubLink,
    demoVideo,
    button1,
    button2,
  } = carouselItem;

  const { url, alt } = imageData;

  return (
    <div className="h-full w-full shrink-0 py-8 px-24 flex text-white">
      <div className="w-1/2 h-full">
        <div className="flex h-24 items-center justify-between">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <Image
            className="invert"
            src={url}
            alt={alt}
            width={100}
            height={100}
          />
        </div>
        <hr className="bg-black h-0.5" />
        <div className="h-full flex flex-col py-8">
          <p
            className={`${
              additionalInfo ? "h-1/4" : "h-1/2"
            } whitespace-normal text-lg`}
          >
            {description}
          </p>
          {additionalInfo && (
            <p className="h-1/4 pt-6 whitespace-normal text-lg">
              {additionalInfo}
            </p>
          )}
          <div className="h-1/4 flex items-center justify-center">
            {techStack.map((item: string, index: number) => {
              return (
                <Image
                  className="mx-4"
                  src={icons[item]}
                  key={index}
                  alt={item}
                  width={50}
                  height={50}
                />
              );
            })}
          </div>
          <div className="h-1/4 flex justify-evenly text-black">
            <button className="h-16 w-1/3 flex justify-center items-center bg-emerald-200 active:bg-emerald-300 rounded-lg border-sky-300">
              <Link
                href={projectLink}
                target={projectLink === "/projects" ? "_self" : "_blank"}
              >
                {button1 ? button1 : "Learn More About Project"}
              </Link>
            </button>
            <button className="h-16 w-1/3 flex justify-center items-center bg-red-200 active:bg-red-300 rounded-lg border-sky-300">
              <Link href={githubLink} target="_blank">
                {button2 ? button2 : "View the Source Code"}
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center ml-12">
        <video controls className="cursor-pointer rounded-xl">
          <source src={demoVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
