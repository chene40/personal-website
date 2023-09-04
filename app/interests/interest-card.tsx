// Library/Module Imports
import Image from "next/image";

// Project Imports
import { InterestCardProps } from "@/types/type";

export default function InterestCard({ interestData }: InterestCardProps) {
  const { interest, description, imageData, redirectPath } = interestData;
  const { url, alt } = imageData;

  return (
    <div className="bg-red-200 flex flex-col justify-between w-2/5 h-full rounded-3xl">
      <div className="bg-emerald-100 h-1/6 flex rounded-t-3xl items-center px-4">
        <h3>{interest}</h3>
      </div>
      <div className="flex justify-between h-2/3 p-4">
        <p className="whitespace-normal w-2/3">{description}</p>
        <div className="h-full w-1/3 h-full flex justify-center">
          <Image
            className="rounded-xl"
            src={url}
            width={320}
            height={100}
            alt={alt}
          />
        </div>
      </div>
      <button className="bg-blue-100 h-1/6 rounded-b-3xl">
        {/* Redirect to the next page on the website e.g. /interests/interestA */}
        <a href={redirectPath}>Learn More</a>
      </button>
    </div>
  );
}
