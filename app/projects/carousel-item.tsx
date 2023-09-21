"use client";
// Library/Module Imports
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Project Imports
import { CarouselItemProps } from "@/types/type";
import icons from "@/data/assets";

export default function CarouselItem({
  carouselItem,
  width,
  stopAnimationHandler,
}: CarouselItemProps) {
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
    <div className="h-full w-full shrink-0 py-8 px-24 flex text-white items-center">
      <div className="flex flex-col h-full xl:w-1/2">
        <div className="flex flex-col sm:flex-row h-full items-center justify-between ">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <Image
            className="invert w-36 h-full py-2"
            src={url}
            alt={alt}
            width={100}
            height={100}
          />
        </div>
        <hr className="bg-black h-0.5" />
        <div className="flex flex-col items-center py-8 xl:h-[50vh]">
          <p
            className={`h-full ${
              additionalInfo ? "2xl:h-1/4" : "2xl:h-1/2"
            } whitespace-normal`}
          >
            {description}
          </p>
          {additionalInfo && (
            <p className="h-full pt-6 whitespace-normal 2xl:h-1/4">
              {additionalInfo}
            </p>
          )}
          <div className="h-1/6 flex flex-wrap justify-center items-center my-8 gap-y-12">
            {techStack.map((item: string, index: number) => {
              return (
                <Image
                  className="mx-2 h-auto w-1/12"
                  src={icons[item]}
                  key={index}
                  alt={item}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              );
            })}
          </div>
          {width < 1280 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <video controls className="cursor-pointer rounded-xl my-8">
                <source src={demoVideo} type="video/mp4" />
              </video>
            </div>
          )}
          <div className="h-1/5 flex justify-evenly items-end flex-wrap gap-y-8 text-white w-full">
            <Link
              href={projectLink}
              target={projectLink === "/projects" ? "_self" : "_blank"}
              className="w-2/5 2xl:w-1/3"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="h-20 sm:h-16 w-full flex justify-center items-center bg-gray-700 active:bg-gray-800 rounded-lg border-sky-300 whitespace-normal p-2"
              >
                {button1 ? button1 : "Learn More About Project"}
              </motion.button>
            </Link>
            <Link href={githubLink} target="_blank" className="w-2/5 2xl:w-1/3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="h-20 sm:h-16 w-full flex justify-center items-center bg-gray-700 active:bg-gray-800 rounded-lg border-sky-300 whitespace-normal p-2"
              >
                {button2 ? button2 : "View the Source Code"}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      {width >= 1280 && (
        <div className="w-1/2 h-full flex flex-col justify-center items-center ml-12">
          <video
            controls
            className="cursor-pointer rounded-xl"
            muted
            onPlay={() => stopAnimationHandler(true)}
          >
            <source src={demoVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
