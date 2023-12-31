"use client";
// Library/Module Imports
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

// Project Imports
import { ComputerProps } from "@/types/type";

export default function PCCard({ computer }: ComputerProps) {
  const {
    cpu,
    cpuCooler,
    motherboard,
    memory,
    storage,
    gpu,
    pcCase,
    psu,
    partsList,
    blogPost,
    description,
    imageData,
  } = computer;

  return (
    <div className="bg-white w-10/12 rounded-lg p-8">
      <div className="mb-8 2xl:flex">
        <div className="2xl:w-3/4">
          <h2 className="text-2xl italic">Specification</h2>
          <hr className="h-0.5 bg-black my-2 2xl:mr-8" />
          <ul className="leading-relaxed">
            <li>
              <span className="font-semibold">
                Central Processing Unit (CPU):
              </span>
              <span className="italic"> {cpu}</span>
            </li>
            <li>
              <span className="font-semibold">CPU Cooler: </span>
              <span className="italic">{cpuCooler}</span>
            </li>
            <li>
              <span className="font-semibold">Motherboard: </span>
              <span className="italic">{motherboard}</span>
            </li>
            <li>
              <span className="font-semibold">Memory: </span>
              <span className="italic">{memory}</span>
            </li>
            <li>
              <span className="font-semibold">Storage: </span>
              <span className="italic">{storage}</span>
            </li>
            <li>
              <span className="font-semibold">
                Graphics Processing Unit (GPU):
              </span>
              <span className="italic">{gpu}</span>
            </li>
            <li>
              <span className="font-semibold">Power Supply Unit (PSU): </span>
              <span className="italic">{psu}</span>
            </li>
            <li>
              <span className="font-semibold">Case: </span>
              <span className="italic">{pcCase}</span>
            </li>
          </ul>
          <div className="mt-4">
            <h2 className="text-2xl italic">Thoughts on Parts/Builds</h2>
            <hr className="h-0.5 bg-black my-2 2xl:mr-8" />
            <div className="flex flex-col gap-y-4 2xl:mr-8">
              {description.map((paragraph, index) => {
                return (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 justify-center rounded-lg mt-4 2xl:mt-0">
          {imageData.map(({ url, alt }, index) => {
            return (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <Link href={url} target="_blank">
                  <Image
                    className="rounded-xl w-full h-auto"
                    src={url}
                    alt={alt}
                    width={0}
                    height={0}
                    sizes="40vh"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly w-full h-full gap-y-4 sm:h-16 sm:mb-4 md:mb-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-cyan-600 active:bg-cyan-700 rounded-lg w-full sm:w-2/5 p-4 2xl:w-1/4"
        >
          <Link href={partsList} target="_blank">
            <button className="flex justify-center items-center h-full w-full text-white">
              View Parts (PCPartPicker)
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="bg-cyan-600 active:bg-cyan-700 rounded-lg w-full sm:w-2/5 p-4 2xl:w-1/4"
          whileHover={{ scale: 1.1 }}
        >
          <Link href={blogPost} target="_blank">
            <button className="flex justify-center items-center h-full w-full text-white">
              Thoughts On Build (Blog)
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
