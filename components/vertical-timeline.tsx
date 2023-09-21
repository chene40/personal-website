// Library/Module Imports
import Image from "next/image";
import { motion } from "framer-motion";

// Project Imports
import { ProfileTimelineProps } from "@/types/type";

export default function VerticalTimeline({ dataPoint }: ProfileTimelineProps) {
  const { date, role, color, imageData, endIcon } = dataPoint;

  const renderedColor = color ? color : "bg-blue-200";
  const renderedIcon = imageData
    ? imageData
    : {
        url: "/misc/MapMarker.png",
        alt: "Map marker icon",
      };
  const renderedEndIcon = endIcon ? endIcon : false;

  return (
    <div
      className={`text-white text-sm sm:text-base w-full ${
        renderedEndIcon ? "h-96" : "h-48"
      } lg:text-lg`}
    >
      <div
        className={`flex justify-evenly items-center ${
          renderedEndIcon ? "h-1/2" : "h-full"
        }`}
      >
        <p className="w-2/5 px-6 whitespace-normal text-center">{date}</p>
        <div className="w-16 h-16 flex justify-center items-center relative">
          <motion.div
            whileHover={{ scale: 1.35 }}
            className="bg-white h-full w-full flex justify-center items-center rounded-full z-10"
          >
            <Image
              src={renderedIcon.url}
              alt={renderedIcon.alt}
              height={50}
              width={50}
              className="rounded-full bg-white z-10"
            />
          </motion.div>
          <div className={`w-2 h-48 ${renderedColor} absolute top-0`} />
        </div>
        <p className="w-2/5 whitespace-normal text-center pl-6">{role}</p>
      </div>
      {renderedEndIcon && (
        <div className="flex justify-evenly items-center h-1/2">
          <p className="w-2/5 px-6 whitespace-normal text-center">
            {renderedEndIcon.date}
          </p>
          <div className="w-16 h-16 flex justify-center items-center relative">
            <motion.div
              whileHover={{ scale: 1.35 }}
              className="bg-white h-full w-full flex justify-center items-center rounded-full z-10"
            >
              <Image
                src={renderedEndIcon.imageData.url}
                alt={renderedEndIcon.imageData.alt}
                height={50}
                width={50}
                className="rounded-full bg-white z-10"
              />
            </motion.div>
          </div>
          <p className="w-2/5 whitespace-normal pl-6 text-center">
            {renderedEndIcon.role}
          </p>
        </div>
      )}
    </div>
  );
}
