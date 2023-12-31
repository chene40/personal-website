"use client";
// Library/Module Imports
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Project Imports
import { InterestCardProps } from "@/types/type";

export default function InterestCard({ interestData }: InterestCardProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const { interest, description, imageData, redirectPath } = interestData;
  const { url, alt } = imageData;

  return (
    <motion.div
      whileHover={{ scale: width > 1568 ? 1.1 : 1 }}
      className="bg-white flex flex-col justify-between rounded-3xl w-10/12 sm:w-4/5 2xl:w-2/5"
    >
      <div className="bg-emerald-300 h-16 flex rounded-t-3xl items-center px-4">
        <h3 className="text-lg font-medium">{interest}</h3>
      </div>
      <div className="2xl:flex justify-between items-center h-2/3 p-4">
        <p className="whitespace-normal 2xl:w-3/5 2xl:mr-4 mb-4">
          {description}
        </p>
        <div className="flex justify-center 2xl:w-2/5">
          <Image
            className="rounded-xl w-full h-auto"
            src={url}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
      {/* Redirect to the next page on the website e.g. /interests/interestA */}
      <Link href={redirectPath}>
        <button className="text-white h-16 w-full rounded-b-3xl bg-cyan-900  active:bg-cyan-950">
          Learn More
        </button>
      </Link>
    </motion.div>
  );
}
