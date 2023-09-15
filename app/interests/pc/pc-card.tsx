import { ComputerProps } from "@/types/type";

export default function PCCard({ computer }: ComputerProps) {
  const {
    cpu,
    cpuCooler,
    motherboard,
    memory,
    storage,
    gpu,
    pcCase,
    psu,
    partsList,
    blogPost,
    description,
  } = computer;

  return <div className="bg-white w-4/5">pc-card</div>;
}
