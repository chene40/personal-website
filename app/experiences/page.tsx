// Project Imports
import Header from "@/components/header";
import experiencesFull from "@/data/experiences-full";

// Relative/Local Imports
import ExperienceCard from "./experience-card";
import Footer from "@/components/footer";

export default function Experiences() {
  return (
    <div className="h-full">
      <Header />
      <div className="bg-gray-900 h-full p-8">
        <h3 className="flex justify-center font-medium text-3xl mb-8 text-white">
          Experiences
        </h3>
        <div className="flex flex-col gap-y-10">
          {experiencesFull.map((experience, index) => {
            return (
              <ExperienceCard
                experience={experience}
                key={index}
                position={index % 2 == 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
