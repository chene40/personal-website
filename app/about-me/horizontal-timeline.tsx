// Library/Module Imports
import Image from "next/image";

// Project Imports
import { ImageData } from "@/types/type";

interface ProfileTimelineProps {
  dataPoint: {
    date: string;
    role: string;
    color?: string;
    imageData?: ImageData;
    endIcon?: {
      imageData: ImageData;
      date: string;
      role: string;
    };
  };
}

export default function HorizontalTimeline({
  dataPoint,
}: ProfileTimelineProps) {
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
    <div className={`${renderedColor} w-1/5 h-2 relative`}>
      <div className="-top-14 -left-28 absolute flex flex-col items-center">
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
      </div>

      {renderedEndIcon && (
        <div className="-top-14 -right-28 absolute flex flex-col items-center">
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
        </div>
      )}
    </div>
  );
}
