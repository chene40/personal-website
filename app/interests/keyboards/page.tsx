// Project Imports
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Alternatives() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="bg-gray-900 grow flex justify-center items-center">
        <h1 className="text-4xl text-white">
          Welcome to my keyboard collection!
        </h1>
      </div>
      <Footer />
    </div>
  );
}
