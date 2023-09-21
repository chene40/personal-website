// Relative/Local Imports
import Carousel from "./carousel";

export default function Projects() {
  return (
    <div className="h-full text-white bg-gray-900">
      <h2 className="p-8 text-3xl text-center text-white font-medium whitespace-normal">
        {"Here Are Some Projects That I've Worked On!"}
      </h2>
      <Carousel />
    </div>
  );
}
