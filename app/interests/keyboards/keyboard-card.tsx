"use client";

// Library/Module Imports
import Image from "next/image";
import { KeyboardProps } from "@/types/type";
import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";

export default function KeyboardCard({ item, figNum }: KeyboardProps) {
  const [foamsOpened, setFoamsOpened] = useState(false);

  const {
    name,
    manufacturer,
    website,
    color,
    specification,
    productDetail,
    foams,
    buildStyle,
    dimensions,
    typingAngle,
    RGBSupport,
    configSoftware,
    groupBuy,
    explodedView,
    imageOrientation,
    displayPreview,
  } = item;

  const { url, alt } = explodedView;
  return (
    <div className="p-8 bg-white rounded-lg w-4/5">
      <div className="flex h-full items-center">
        <div
          className={`${
            imageOrientation === "vertical" ? "w-3/4" : "w-3/5"
          } mr-8 self-start`}
        >
          <div>
            <h2 className="text-4xl">{`${name} - ${color}`}</h2>
            <h3 className="text-blue-900 italic text-lg my-2">
              <Link href={website} target="_blank">
                {manufacturer}
              </Link>
            </h3>
          </div>

          <hr className="bg-black h-0.5 my-3" />

          <div className="flex mb-2">
            <div
              className={`${
                imageOrientation === "vertical" ? "w-1/2" : "w-3/5"
              }`}
            >
              <p className="font-medium mb-2 italic">Finishing Components</p>
              <ul>
                {specification.map((spec, index) => {
                  return <li key={index}>• {spec}</li>;
                })}
              </ul>
              <button
                className="text-blue-900 italic ml-3 text-sm"
                onClick={() => setFoamsOpened(!foamsOpened)}
              >
                {"What's included in all foams?"}
              </button>
              {foamsOpened && (
                <ul className="ml-3 text-sm">
                  {foams.map((foam, index) => {
                    return <li key={index}>• {foam}</li>;
                  })}
                </ul>
              )}
            </div>
            <div
              className={`${
                imageOrientation === "vertical" ? "w-1/2" : "w-2/5"
              }`}
            >
              <p className="font-medium mb-2 italic">Product Details</p>
              <ul>
                {productDetail.map((spec, index) => {
                  return <li key={index}>• {spec}</li>;
                })}
                <li>• Configuration Software: {configSoftware}</li>
                <li>• Group Buy: {groupBuy}</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2 italic">Build Layout</p>
            <p>RGB: {RGBSupport}</p>
            <p>Typing Angle: {typingAngle}</p>
            <p>Dimensions: {dimensions}</p>
            <ul>
              <li>Mounting Style: {buildStyle[0]}</li>
              <li>Layout: {buildStyle[1]}</li>
            </ul>
          </div>
        </div>
        <figure
          className={`${
            imageOrientation === "vertical" ? "w-1/4" : "w-2/5"
          } h-full justify-center flex flex-col items-center gap-y-3`}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href={url} target="_blank">
              <Image
                src={url}
                alt={alt}
                height={2000}
                width={1000}
                className="rounded-lg"
              />
            </Link>
          </motion.div>
          <figcaption className="text-center italic">
            Figure {figNum}: Exploded view of the {name}
          </figcaption>
        </figure>
      </div>
      <div className="flex mt-6 gap-x-8">
        {displayPreview.map(({ url, alt }, index) => {
          return (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link href={url} target="_blanks">
                <Image
                  className="rounded-xl w-full h-auto"
                  src={url}
                  alt={alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
