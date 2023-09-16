// Project Imports
import Header from "@/components/header";
import ExperiencePreview from "@/components/experience-preview";
import Footer from "@/components/footer";
import AboutMePage from "@/components/about-me";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <AboutMePage />
      <ExperiencePreview />
      <Footer />
    </div>
  );
}
