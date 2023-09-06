// Library/Module Imports
import Image from "next/image";
import Link from "next/link";

// Project Imports
import { ExperienceCardPreviewProps } from "@/types/type";

import icons from "@/data/assets";

export default function ExperienceCardPreview({
  experience,
}: ExperienceCardPreviewProps) {
  const { companyData, imageData, idTag } = experience;

  const { company, jobTitle, description, techStack, companyLink } =
    companyData;
  const { url, alt } = imageData;

  return (
    <div className="bg-emerald-500 w-1/4 h-96 rounded-3xl">
      <div className="bg-white h-1/5 rounded-t-3xl flex justify-between">
        <div className="p-4 w-2/3">
          <p>{company}</p>
          <p className="text-sm">{jobTitle}</p>
        </div>
        <a
          target="_blank"
          href={companyLink}
          className="w-1/3 flex justify-center"
        >
          <Image src={url} alt={alt} width={90} height={80} />
        </a>
      </div>
      <p className="h-2/5 p-4 text-white">{description}</p>
      <div className="h-1/5 flex items-center justify-center bg-fuchsia-200">
        {techStack!.map((icon, index) => {
          return (
            <Image
              className="mr-2"
              src={icons[icon]}
              alt={icon}
              key={index}
              width={40}
              height={40}
            />
          );
        })}
      </div>
      <Link
        href={`/experiences/#${idTag}`}
        className="flex w-full h-1/5 rounded-b-3xl justify-center items-center bg-violet-400 text-white font-semibold"
      >
        Learn More About This Position
      </Link>
    </div>
  );
}
