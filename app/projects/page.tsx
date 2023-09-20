// Project Imports
import Footer from "@/components/footer";
import Header from "@/components/header";

// Relative/Local Imports
import Carousel from "./carousel";

export default function Projects() {
  return (
    <div className="h-full text-white bg-gray-900 overflow">
      <Header />
      <h2 className="p-12 text-3xl text-center text-white font-medium whitespace-normal">
        {"Here are some projects that I've worked on!"}
      </h2>
      <Carousel />
      <Footer />
    </div>
  );
}