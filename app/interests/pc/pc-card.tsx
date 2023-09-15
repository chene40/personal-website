// Library/Module Imports
import Link from "next/link";
import Image from "next/image";

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
    <div className="bg-white w-4/5 rounded-lg p-8">
      <div className="flex mb-8">
        <div className="w-3/4">
          <h2 className="text-2xl italic">Specification</h2>
          <hr className="h-0.5 bg-black my-2 mr-8" />
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
            <hr className="h-0.5 bg-black my-2 mr-8" />
            <div className="flex flex-col gap-y-4 mr-8">
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
        <div className="flex flex-col gap-y-4 justify-center rounded-lg">
          {imageData.map(({ url, alt }, index) => {
            return (
              <Image
                key={index}
                className="rounded-lg"
                src={url}
                alt={alt}
                width={400}
                height={100}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-evenly w-full h-16">
        <Link
          href={partsList}
          target="_blank"
          className="bg-cyan-600 active:bg-cyan-700 rounded-lg w-1/4"
        >
          <button className="flex justify-center items-center h-full w-full text-white">
            View Parts (PCPartPicker)
          </button>
        </Link>
        <Link
          href={blogPost}
          target="_blank"
          className="bg-cyan-600 active:bg-cyan-700 rounded-lg w-1/4"
        >
          <button className="flex justify-center items-center h-full w-full text-white">
            Thoughts On Build (Blog)
          </button>
        </Link>
      </div>
    </div>
  );
}
