// Library/Module Imports
import Image from "next/image";
import { motion } from "framer-motion";

// Project Imports
import { ProfileTimelineProps } from "@/types/type";

export default function HorizontalTimeline({
  dataPoint,
}: ProfileTimelineProps) {
  const { date, role, incomplete, imageData, endIcon } = dataPoint;

  const renderedIcon = imageData
    ? imageData
    : {
        url: "/misc/MapMarker.png",
        alt: "Map marker icon",
      };
  const renderedEndIcon = endIcon ? endIcon : false;

  return (
    <div
      className={`${
        incomplete ? "bg-red-200" : "bg-blue-200"
      } w-1/5 h-2 relative text-white`}
    >
      <motion.div
        whileHover={{ scale: 1.35 }}
        className="-top-14 -left-28 absolute flex flex-col items-center"
      >
        <p className="w-60 whitespace-normal text-center p-2">{date}</p>
        <div className="bg-white w-10 h-10 rounded-full">
          <Image
            src={renderedIcon.url}
            alt={renderedIcon.alt}
            height={50}
            width={50}
            className="rounded-full p-1"
          />
        </div>
        <p className="w-60 whitespace-normal text-center p-2">{role}</p>
      </motion.div>

      {renderedEndIcon && (
        <motion.div
          whileHover={{ scale: 1.35 }}
          className="-top-14 -right-28 absolute flex flex-col items-center"
        >
          <p className="w-60 whitespace-normal text-center p-2">
            {renderedEndIcon.date}
          </p>
          <div className="bg-white w-10 h-10 rounded-full">
            <Image
              src={renderedEndIcon.imageData.url}
              alt={renderedEndIcon.imageData.alt}
              height={50}
              width={50}
              className="rounded-full p-1"
            />
          </div>
          <p className="w-60 whitespace-normal text-center p-2">
            {renderedEndIcon.role}
          </p>
        </motion.div>
      )}
    </div>
  );
}
