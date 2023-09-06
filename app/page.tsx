// Project Imports
import Header from "@/components/header";
import ExperiencePreview from "@/components/experience-preview";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Carousel />
      <ExperiencePreview />
      <Footer />
    </div>
  );
}
