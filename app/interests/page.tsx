import Header from "@/components/header";
import InterestCard from "@/components/interest-card";

export default function Interests() {
  return (
    <div>
      <Header />
      <div className="bg-cyan-200 w-full h-[75vh]">
        <h2 className="p-8 h-10 text-2xl flex justify-center items-center">
          Check Out Some of My Interests Below!
        </h2>
        <div className="flex justify-evenly h-full p-8">
          <InterestCard />
          <InterestCard />
        </div>
      </div>
    </div>
  );
}
