"use client";
import Image from "next/image";

export default function Generate({ darkMode }: { darkMode: boolean }) {
  const items = [
    { id: 1, image: "/image.png", title: "Image", subtext: "Generate images with custom styles in Flux and ideogram.", isNew: true },
    { id: 2, image: "/video.png", title: "Video", subtext: "Generate videos with Hailuo, Pika, Runway, Luma, and more." },
    { id: 3, image: "/realtime.png", title: "Real-time", subtext: "Realtime AI rendering on a canvas Instant feedback loops." },
    { id: 4, image: "/enhancer.png", title: "Enhancer", subtext: "Upscale and enhance images and videos up to 22K.", isNew: true },
    { id: 5, image: "/edit.png", title: "Edit", subtext: "Add objects, change style, or expand photos and generations.", isNew: true },
    { id: 6, image: "/lipsync.png", title: "Video LipSync", subtext: "Lip sync any video to any audio.", isNew: true },
    { id: 7, image: "/motion.png", title: "Motion Transfer", subtext: "Transfer motion to images and animate characters.", isNew: true },
    { id: 8, image: "/train.png", title: "Train", subtext: "Teach Krea or replicate your style, products, or characters." },
  ];

  return (
    <div className="px-8 py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[17px] font-bold">Generate</h2>
        <div className="flex items-center gap-1 text-blue-600">
          <span className="text-lg -mb-1 tracking-widest">˅</span>
          <button className="text-[12px] font-bold hover:underline">
            Show all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Image
              src={item.image}
              alt={item.title}
              width={36}
              height={36}
              className="w-9 h-9 object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-semibold">{item.title}</h3>
                {item.isNew && (
                  <span className="text-[10px] bg-blue-600 text-gray-100 font-medium px-1.5 py-0 rounded-lg">
                    New
                  </span>
                )}
              </div>
              <p className="text-[9.5px] font-semibold text-gray-400 leading-tight">{item.subtext}</p>
            </div>
            <button
              className={`rounded-xl px-4 py-1.5 text-[10px] font-bold shrink-0 border ${
                darkMode ? "bg-[#303030] border-[#464646] border-[1.5px]" : "bg-[#f6f6f6] border-transparent"
              }`}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
