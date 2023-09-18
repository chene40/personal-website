// Project Imports
import Header from "@/components/header";
import Footer from "@/components/footer";

// Project Imports
import keyboards from "@/data/keyboards";

// Local/Relative Imports
import KeyboardCard from "./keyboard-card";

export default function Alternatives() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="bg-gray-900 grow flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white p-12 text-center">
          Welcome to My Keyboard Collection!
        </h1>
        <div className="flex flex-col items-center w-full grow gap-y-6 mb-8">
          {keyboards.map((keyboard, index) => {
            return (
              <KeyboardCard key={index} item={keyboard} figNum={index + 1} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
