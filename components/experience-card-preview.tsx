"use client";

// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

// Project Imports
import { ExperienceCardPreviewProps } from "@/types/type";
import icons from "@/data/assets";

export default function ExperienceCardPreview({
  experience,
}: ExperienceCardPreviewProps) {
  const { companyData, imageData, idTag } = experience;

  const { company, jobTitle, description, techStack, companyLink } =
    companyData;
  const { url, alt } = imageData;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white w-full md:w-4/5 lg:w-2/5 2xl:w-1/4 h-full rounded-3xl flex flex-col"
    >
      <div className="bg-emerald-300 h-2/12 2xl:h-1/5 rounded-t-3xl flex justify-between">
        <div className="p-4 w-2/3">
          <p>{company}</p>
          <p className="text-sm">{jobTitle}</p>
        </div>
        <Link
          target="_blank"
          href={companyLink}
          className="w-1/3 flex justify-center"
        >
          <Image
            src={url}
            alt={alt}
            width={90}
            height={80}
            className="w-24 h-auto"
          />
        </Link>
      </div>
      <p className="h-full p-4 text-black grow">{description}</p>
      <div className="h-1/6 flex items-center justify-center mb-4 flex-wrap gap-x-4 gap-y-4 mx-4">
        {techStack!.map((icon, index) => {
          return (
            <Image
              src={icons[icon]}
              alt={icon}
              key={index}
              width={40}
              height={40}
            />
          );
        })}
      </div>
      <Link
        href={`/experiences/#${idTag}`}
        className="flex w-full h-16 rounded-b-3xl justify-center items-center bg-cyan-900 active:bg-cyan-950 text-white"
      >
        Learn More About This Position
      </Link>
    </motion.div>
  );
}
