// Project Imports
import InterestCard from "@/app/interests/interest-card";
import interests from "@/data/interests-preview";

export default function Interests() {
  return (
    <div className="h-full">
      <div className="bg-gray-900 w-full overflow-hidden">
        <h2 className="p-12 text-3xl text-center text-white font-medium">
          Check Out Some of My Interests Below!
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-evenly h-2/5 items-start mb-8 flex-wrap gap-y-12">
            {interests.map((interest, index) => {
              return <InterestCard interestData={interest} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
