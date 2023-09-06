// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

// Project Imports
import { ExperienceCardProps } from "@/types/type";

// Relative/Local Imports
import Timeline from "./timeline";

export default function ExperienceCard({
  experience,
  position,
}: ExperienceCardProps) {
  const { companyData, tasks, imageData, idTag } = experience;
  const { company, jobTitle, description, date, companyLink } = companyData;
  const { url, alt } = imageData;

  return (
    <div className="h-full flex justify-center gap-x-8" id={idTag}>
      {position === "right" && (
        <p className="w-1/3 mt-3 text-white text-end ">{date}</p>
      )}
      {position === "right" && <Timeline />}
      <div className="bg-white h-full w-1/3 p-8 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-medium">{company}</h3>
          <Link target="_blank" href={companyLink}>
            <Image src={url} alt={alt} width={100} height={20} />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <h5 className="italic">{jobTitle}</h5>
          <p>{description}</p>
          <div>
            <p className="mb-2">Roles and Responsibilities:</p>
            <ul className="flex flex-col gap-y-2 mb-6">
              {tasks.map((task, index) => {
                return <li key={index} className="ml-4">{`• ${task}`}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-200 w-2/5 h-12 rounded-xl">
            <Link target="_blank" href={companyLink}>
              Learn More!
            </Link>
          </button>
        </div>
      </div>
      {position === "left" && <Timeline />}
      {position === "left" && <p className="w-1/3 mt-3 text-white">{date}</p>}
    </div>
  );
}
