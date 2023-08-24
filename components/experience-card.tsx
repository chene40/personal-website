import Image from "next/image";

export default function ExperienceCard() {
  return (
    <div className="bg-emerald-500 w-1/4 h-96 rounded-3xl">
      <div className="bg-white h-1/5 rounded-t-3xl flex justify-between">
        <div className="p-4 w-2/3">
          <p>Company Name</p>
          <p>Position Title</p>
        </div>
        <div className="w-1/3 flex -mr-4">
          <Image
            src={"/McMasterLogo.svg"}
            alt="McMaster University Logo"
            width={90}
            height={80}
          />
        </div>
      </div>
      <p className="h-3/5 p-4 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros
        risus, euismod nec elit nec, aliquam cursus enim. Cras vestibulum turpis
        eros, nec mollis risus volutpat quis. Vivamus quam nibh, faucibus at
        nisi sit amet, lobortis feugiat libero. In venenatis sapien at suscipit
        facilisis. Mauris cursus malesuada turpis, a vehicula.
      </p>
      <div className="flex h-1/5 rounded-b-3xl justify-center items-center bg-violet-400 text-white font-semibold">
        Learn More About This Position
      </div>
    </div>
  );
}
