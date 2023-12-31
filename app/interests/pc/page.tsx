// Project Imports
import Footer from "@/components/footer";
import computers from "@/data/computer";

// Relative/Local Imports
import PCCard from "./pc-card";

export default function Alternatives() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-900 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white p-12 text-center">
          Welcome to My Assembled PC Section!
        </h1>
        <div className="w-full flex flex-col items-center gap-y-6 mb-8">
          {computers.map((computer, index) => {
            return <PCCard computer={computer} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
