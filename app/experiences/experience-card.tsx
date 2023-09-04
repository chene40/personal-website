import Image from "next/image";

interface ExperienceCardProps {
  item: {
    companyName: string;
    jobTitle: string;
    description: string;
    tasks: string[];
    companyLink: string;
    imageUrl: string;
    imageAlt: string;
    date: string;
  };
  position: string;
}

export default function ExperienceCard({
  item,
  position,
}: ExperienceCardProps) {
  const {
    companyName,
    jobTitle,
    description,
    tasks,
    companyLink,
    imageUrl,
    imageAlt,
    date,
  } = item;

  return (
    <div className="h-full flex justify-center gap-x-8">
      {/* Fix this so that the dates are in a timeline later */}
      {position === "right" && (
        <p className="w-1/3 text-white text-end ">{date}</p>
      )}
      <div className="bg-white h-full w-1/3 p-8 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-medium">{companyName}</h3>
          <a target="_blank" href={companyLink}>
            <Image src={imageUrl} alt={imageAlt} width={100} height={20} />
          </a>
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
            <a target="_blank" href={companyLink}>
              Learn More!
            </a>
          </button>
        </div>
      </div>
      {position === "left" && <p className="w-1/3 text-white">{date}</p>}
    </div>
  );
}
