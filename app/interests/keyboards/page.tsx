// Project Imports
import keyboards from "@/data/keyboards";

// Local/Relative Imports
import KeyboardCard from "./keyboard-card";

export default function Alternatives() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-900 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white p-12 text-center">
          Welcome to My Keyboard Collection!
        </h1>
        <div className="flex flex-col items-center w-full gap-y-6 mb-8">
          {keyboards.map((keyboard, index) => {
            return (
              <KeyboardCard key={index} item={keyboard} figNum={index + 1} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
