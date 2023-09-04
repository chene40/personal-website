import Header from "@/components/header";
import InterestCard from "@/app/interests/interest-card";
import interests from "@/data/interests-preview";

export default function Interests() {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-cyan-200 w-full h-full overflow-hidden">
        <h2 className="p-8 text-2xl flex justify-center items-center">
          Check Out Some of My Interests Below!
        </h2>
        <div className="h-full flex flex-col">
          <div className="flex justify-evenly h-2/5 items-center mb-8 flex-wrap gap-y-12">
            {interests.map((interest, index) => {
              return <InterestCard item={interest} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
