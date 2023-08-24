import Link from "next/link";
import Header from "@/components/header";
import ExperienceCard from "@/components/experience-card";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="bg-sky-300 p-8 flex flex-1 justify-evenly">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
