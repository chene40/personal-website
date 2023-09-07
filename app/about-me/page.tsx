// Library/Module Imports
import Image from "next/image";

// Project Imports
import Footer from "@/components/footer";
import Header from "@/components/header";
import timelineData from "@/data/timeline-data";

// Relative/Local Imports
import HorizontalTimeline from "./horizontal-timeline";

export default function AboutMe() {
  return (
    <div className="h-full text-white">
      <Header />
      <div className="bg-gray-900 w-full p-10">
        <div className="flex justify-around items-center">
          <div className="w-96 h-96 bg-white rounded-full">
            <Image
              src={"/Me.jpg"}
              alt="A picture of me"
              width={1000}
              height={1000}
              className="rounded-full p-2"
            />
          </div>
          <div className="w-3/5">
            <h2 className="text-5xl my-8">Eric Chen</h2>
            <div className="flex flex-col gap-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sed neque eleifend, gravida eros et, facilisis tortor.
                Etiam pharetra vestibulum tortor. Fusce rutrum arcu nec lorem
                rutrum vehicula. Vivamus sed nisl sit amet tellus blandit
                iaculis. Nullam et purus placerat, dignissim lectus sit amet,
                feugiat odio. Vivamus ultrices suscipit enim, ut faucibus nisl
                convallis eu. Fusce varius, felis dapibus interdum blandit,
                tellus leo pellentesque orci, id ornare sapien sapien sed felis.
              </p>
              <p>
                Suspendisse at iaculis erat, in mattis tellus. Nam orci justo,
                sollicitudin quis blandit nec, cursus et ex. Vivamus non augue
                sit amet lorem laoreet aliquet sit amet vitae eros. In mattis
                hendrerit leo, sed scelerisque eros molestie in. In eu porttitor
                tellus. Nulla dignissim odio ac mollis vehicula. Morbi quis est
                venenatis, vestibulum turpis id, fringilla nibh. Integer at
                hendrerit ex, a egestas mauris. Sed a vulputate ante, quis
                vestibulum orci. Morbi vulputate erat lobortis pulvinar aliquam.
                Mauris at vulputate nisi, vel tempus leo. Praesent sed lectus
                sagittis, mollis orci in, cursus nibh.
              </p>
              <p>
                Suspendisse vulputate mi non dui tincidunt, at tempor nisl
                pulvinar. Vestibulum et bibendum turpis, id tempus nulla.
                Vestibulum sem justo, auctor vel tempus eu, commodo vel leo.
                Vivamus gravida non metus et posuere. Morbi finibus augue ut
                lorem maximus pulvinar. Quisque tortor elit, maximus nec purus
                sed, faucibus vulputate turpis. Suspendisse condimentum
                pellentesque nibh, ac ultrices sapien vulputate sit amet. Sed
                quam nisi, interdum sit amet varius tempor, elementum eget
                risus. Maecenas sit amet lacinia massa. Sed tempus neque velit,
                eu blandit turpis hendrerit sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 mb-24 flex justify-center items-center h-full">
          {timelineData.map((dataPoint, index) => {
            return <HorizontalTimeline key={index} dataPoint={dataPoint} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
