// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

// Project Imports
import { InterestCardProps } from "@/types/type";

export default function InterestCard({ interestData }: InterestCardProps) {
  const { interest, description, imageData, redirectPath } = interestData;
  const { url, alt } = imageData;

  return (
    <div className="bg-white flex flex-col justify-between w-2/5 h-full rounded-3xl">
      <div className="bg-emerald-300 h-16 flex rounded-t-3xl items-center px-4">
        <h3>{interest}</h3>
      </div>
      <div className="flex justify-between items-center h-2/3 p-4">
        <p className="whitespace-normal w-3/5 mr-4">{description}</p>
        <div className="h-full w-2/5 flex justify-center">
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
        <button className="bg-cyan-900 text-white h-16 w-full rounded-b-3xl active:bg-cyan-900">
          Learn More
        </button>
      </Link>
    </div>
  );
}
