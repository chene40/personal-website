import Header from "@/components/header";
import ExperiencePreview from "@/components/experience-preview";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Carousel />
      <ExperiencePreview />
    </div>
  );
}
