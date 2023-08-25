import Header from "@/components/header";
import ExperiencePreview from "@/components/experience-preview";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <ExperiencePreview />
    </div>
  );
}
