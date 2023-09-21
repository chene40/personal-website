// Project Imports
import ExperiencePreview from "@/components/experience-preview";
import AboutMePage from "@/components/about-me";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AboutMePage />
      <ExperiencePreview />
    </div>
  );
}
