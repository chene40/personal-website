import Link from "next/link";
import ExperienceCard from "./experience-card";

export default function ExperiencePreview() {
  return (
    <>
      <div className="bg-sky-300 p-8">
        <h2 className="flex justify-center mb-10 text-3xl">
          {"Here's a preview of some of my work experiences ~"}
        </h2>
        <div className="flex justify-evenly mb-12">
          {/* Containerize the data elsewhere and pull from it */}
          <ExperienceCard
            company="Esri"
            position="Software Engineer (Intern)"
            description="To be added"
            icon="/EsriLogo.svg"
            altText="Esri Logo"
            link="https://www.esri.com/en-us/about/about-esri/overview"
          />
          <ExperienceCard
            company="McMaster University"
            position="Software Developer (Intern)"
            description="To be added"
            icon="/McMasterLogo.svg"
            altText="McMaster University Logo"
            link="https://electrification.mcmaster.ca/"
          />
          <ExperienceCard
            company="Gunkii"
            position="Shopify Lead Software Developer (Intern)"
            description="To be added"
            icon="/GunkiiLogo.svg"
            altText="Gunkii Logo"
            link="https://gunkii.com/"
          />
        </div>
        <div className="flex justify-evenly">
          <ExperienceCard
            company="McMaster University"
            position="Teaching Assistant (Software Eng II)"
            description="To be added"
            icon="/McMasterLogo.svg"
            altText="McMaster University Logo"
            link="https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=267962"
          />
          <ExperienceCard
            company="Code Ninjas Markham"
            position="Roblox Development Camp Counsellor"
            description="To be added"
            icon="/CodeNinjasLogo.svg"
            altText="Code Ninjas Logo"
            link="https://www.codeninjas.com/markham-on-ca"
          />
          <ExperienceCard
            company="Twigoh"
            position="Full-Stack Software Engineer (Intern)"
            description="To be added"
            icon="/TwigohLogo.svg"
            altText="Twigoh Logo"
            link="https://www.linkedin.com/company/designlab-twigoh/"
          />
        </div>
      </div>
    </>
  );
}
