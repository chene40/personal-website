// Project Imports
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Alternatives() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="bg-gray-900 grow flex justify-center items-center">
        <h1 className="text-4xl text-white">
          This page is currently under development. Please come back later :)
        </h1>
      </div>
      <Footer />
    </div>
  );
}
