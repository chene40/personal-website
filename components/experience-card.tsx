import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  position: string;
  description: string;
  icon: string;
  altText: string;
  link: string;
}

export default function ExperienceCard({
  company,
  position,
  description,
  icon,
  altText,
  link,
}: ExperienceCardProps) {
  return (
    <div className="bg-emerald-500 w-1/4 h-96 rounded-3xl">
      <div className="bg-white h-1/5 rounded-t-3xl flex justify-between">
        <div className="p-4 w-2/3">
          <p>{company}</p>
          <p className="text-sm">{position}</p>
        </div>
        <a target="_blank" href={link} className="w-1/3 flex justify-center">
          <Image src={icon} alt={altText} width={90} height={80} />
        </a>
      </div>
      <p className="h-3/5 p-4 text-white">{description}</p>
      <div className="flex h-1/5 rounded-b-3xl justify-center items-center bg-violet-400 text-white font-semibold">
        Learn More About This Position
      </div>
    </div>
  );
}
