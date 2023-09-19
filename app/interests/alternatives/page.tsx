// Project Imports
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Alternatives() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="bg-gray-900 grow flex justify-center items-center">
        <h1 className="flex flex-col gap-y-8 w-10/12 text-4xl text-white text-center">
          <p>This page is currently under development.</p>
          <p>Please come back later :)</p>
        </h1>
      </div>
      <Footer />
    </div>
  );
}
