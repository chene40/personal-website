import Image from "next/image";

export default function InterestCard() {
  return (
    <div className="bg-red-200 flex flex-col justify-between w-2/5 h-1/2 rounded-3xl">
      <div className="bg-emerald-100 h-1/6 flex rounded-t-3xl items-center px-4">
        <h3>Title of Interest</h3>
      </div>
      <div className="flex justify-between h-2/3 p-4">
        <p className="whitespace-normal w-2/3">Description</p>
        <div className="h-full w-1/3 h-full flex justify-center">
          <Image
            className="rounded-xl"
            src="/QK75.jpg"
            width={320}
            height={100}
            alt="An image of a custom keyboard that I've built - the QK75"
          />
        </div>
      </div>
      <button className="bg-blue-100 h-1/6 rounded-b-3xl">
        {/* Redirect to the next page on the website e.g. /interests/interestA */}
        <a href="wag">Learn More</a>
      </button>
    </div>
  );
}
