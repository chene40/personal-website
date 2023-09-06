import Image from "next/image";

export default function Timeline() {
  return (
    <div className="w-10 flex justify-center relative">
      <div className="absolute top-0 z-10 p-2 w-12 bg-white rounded-full">
        <Image
          src={"/misc/MapMarker.png"}
          alt="Navigation icon"
          width={100}
          height={100}
        />
      </div>
      <div className="w-2 bg-blue-200 h-full"></div>
    </div>
  );
}
