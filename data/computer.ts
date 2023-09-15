const computers = [
  {
    cpu: "Intel Core i5-12600K 3.7 GHz 10-Core Processor",
    cpuCooler: "NZXT Kraken X73 73.11 CFM Liquid CPU Cooler",
    motherboard: "MSI PRO B660-A DDR4 ATX LGA1700 Motherboard",
    memory: "Corsair Vengeance RGB Pro 16 GB (2x8 GB) DDR4-3600 CL18 Memory",
    storage:
      "Western Digital Blue SN570 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive",
    gpu: "MSI GeForce RTX 3060 Ventus 2X 12G GeForce RTX 3060 12GB 12 GB Video Card",
    pcCase: "Phanteks Eclipse G360A ATX Mid Tower Case",
    psu: "Thermaltake Smart 700 W 80+ Certified ATX Power Supply",
    partsList: "https://ca.pcpartpicker.com/user/Yericc98/saved/#view=DR7t3C",
    blogPost: "https://ca.pcpartpicker.com/b/gyZZxr",
    description: [
      `This was originally supposed to be an all-white RGB PC build until I saw the prices of the white variants and my jaws dropped. At this time, I believe there was also a massive
	Black Friday deal going on so I grabbed what was the best bang for your buck. Most of these parts only came in black hence why this build kind of transitioned into a hybrid
	with some parts being in white while the others being in black. This build had some ups and downs that came with it, mostly with the motherboard and case. The main components
	(CPU/GPU/Memory/Storage) were relatively easily to assemble onto the motherboard. The part that was the most challenging was probably the cable management and mounting the
	AIO on.`,
      `Starting with the AIO, the CPU block was quite large in comparison to the actual space available in the motherboard. I originally had it going from the top right to the 
	bottom left in order to make room for an exhaust fan in the back, but I found that it basically came in flush with the case fans and decided not to risk it coming in contact
	with the fans. This configuration did limit me to how much memory I can install since it basically occupies the left-most memory slot now and that only 3/4 slots are usable.
	For the most part, I wasn't planning on using the other two memory slots, which works in my favour, but it would have been nice to have if I wanted to install additional
	memory. In the worst case, I could re-attempt changing the pump direction and hopefully make it fit better than the first time I did it. The other nasty part was the cable
	management. There was very little space to kind of slide wires through the holes to connect to my motherboard. This was more prominent on the top row since my radiator
	occupies a lot of the top compartment. In the end, it did fit but working through that along with the internal cables was a mess.`,
      `For the most part, I'm still very content about this build, it runs applications and games very smoothly and the temperatures are very stable (CPU never goes above 50C even
	when under load and GPU always sits below 70C). If I were to make a change, I would've probably got a different case and motherboard. It didn't hit me until I was assembling
	it but I totally forgot to get a motherboard with built-in Wifi/Bluetooth. I also needed one more USB slot so I could install my strimer extension cables but my motherboard
	only came with one, which was used to connect to NZXT's software to control the radiator. I did end up getting a Wifi adapter but not an additional bluetooth splitter. The
	case itself isn't bad, but reflecting back now, there were better options in the market like the NZXT Flow series that helps with not only airflow, but also cable management.
	Plus, the design, in my opinion, also looks more minimalistic and uniform which is a plus to me! Going for an ATX size would have made building the PC easier as well and 
	also provide better cooling (typically). I would have like to tidy things up a little more (like the cables), but in the end, I've decided that it could be something to work
	on when I build my next setup.`,
    ],
    imageData: [
      {
        url: "/interests/computer/PC1-1.jpg",
        alt: "An image of my personal PC",
      },
      {
        url: "/interests/computer/PC1-2.jpg",
        alt: "An image of my personal PC (close up angle)",
      },
    ],
  },
  {
    cpu: "AMD Ryzen 5 5600 3.5 GHz 6-Core Processor",
    cpuCooler: "Stock Cooler",
    motherboard: "MSI MAG B550 TOMAHAWK MAX WIFI ATX AM4 Motherboard",
    memory: "	Corsair Vengeance RGB Pro 16 GB (2x8 GB) DDR4-3200 CL16 Memory",
    storage:
      "Western Digital Blue SN570 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive",
    gpu: "MSI MECH 2X OC Radeon RX 6650 XT 8 GB Video Card",
    pcCase: "NZXT H5 Flow RGB ATX Mid Tower Case",
    psu: "Thermaltake Smart BX1 650 650 W 80+ Bronze Certified ATX Power Supply",
    partsList: "https://ca.pcpartpicker.com/user/Yericc98/saved/#view=q3DsK8",
    blogPost: "https://ca.pcpartpicker.com/b/d2ZZxr",
    description: ["Something from the blog"],
    imageData: [
      {
        url: "/interests/computer/PC2-1.jpg",
        alt: "An image of a PC that I built for my cousin",
      },
      {
        url: "/interests/computer/PC2-2.jpg",
        alt: "An image of a PC that I built for my cousin (close up angle)",
      },
    ],
  },
];

export default computers;
