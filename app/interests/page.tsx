// Project Imports
import Header from "@/components/header";
import InterestCard from "@/app/interests/interest-card";
import interests from "@/data/interests-preview";
import Footer from "@/components/footer";

export default function Interests() {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-gray-900 w-full h-full overflow-hidden">
        <h2 className="p-8 text-3xl flex justify-center items-center text-white font-medium">
          Check Out Some of My Interests Below!
        </h2>
        <div className="h-full flex flex-col">
          <div className="flex justify-evenly h-2/5 items-center mb-8 flex-wrap gap-y-12">
            {interests.map((interest, index) => {
              return <InterestCard interestData={interest} key={index} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
