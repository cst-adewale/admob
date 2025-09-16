"use client";
import React, { useEffect, useRef, useState } from "react";

type Slide = {
  id: number;
  image?: string;
  video?: string;
  text?: string;
};

const slides: Slide[] = [
  { id: 1, image: "carousel3.png", text: "WAN 2.2 Image generation" },
  { id: 2, video: "fluxvid.mp4", text: "FLUX1 Krea" },
  { id: 3, image: "carousel2.png", text: "Slide 3 text" },
  { id: 4, image: "carousel4.png", text: "Slide 4 text" },
  { id: 5, image: "carousel2.png", text: "Slide 5 text" },
  { id: 6, image: "carousel3.png", text: "Slide 6 text" },
  { id: 7, image: "carousel4.png", text: "Slide 7 text" },
  { id: 8, image: "carousel2.png", text: "Slide 8 text" },
  { id: 9, image: "carousel3.png", text: "Slide 9 text" },
  { id: 10, image: "carousel4.png", text: "Slide 10 text" },
];

export default function Carousel() {
  const [current, setCurrent] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to slide by index
  const scrollToIndex = (idx: number) => {
    const el = slideRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setCurrent(idx);
  };

  const next = () => {
    const nextIndex = Math.min(current + 1, slides.length - 1);
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = Math.max(current - 1, 0);
    scrollToIndex(prevIndex);
  };

  // Track manual scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollLeft = track.scrollLeft;
        let closestIndex = 0;
        let closestDiff = Infinity;

        slideRefs.current.forEach((s, i) => {
          if (!s) return;
          const diff = Math.abs(s.offsetLeft - scrollLeft);
          if (diff < closestDiff) {
            closestDiff = diff;
            closestIndex = i;
          }
        });

        setCurrent(closestIndex);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <div
  ref={trackRef}
  className="flex overflow-x-auto scroll-smooth hide-scrollbar py-2"
>
  {slides.map((slide, idx) => (
    <div
      key={slide.id}
      ref={(el) => { slideRefs.current[idx] = el; }}
      className="relative flex-shrink-0 w-[700px] h-[370px] rounded-[15px] overflow-hidden bg-gray-200 mr-10 last:mr-0"
    >
            {/* image or video */}
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.text ?? `slide-${slide.id}`}
                className="w-full h-full object-cover"
              />
            )}
            {slide.video && (
              <video
                src={slide.video}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
                autoPlay={true}
              />
            )}

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* First slide */}
{idx === 0 && (
  <>
    {/* top-left */}
    <div className="absolute top-6 left-6 uppercase text-xs font-bold text-white">
      NEW IMAGE MODEL
    </div>

    {/* bottom-left block */}
    <div className="absolute left-6 bottom-6 text-white max-w-[90%]">
      <div className="text-2xl font-bold drop-shadow">
        {slide.text}
      </div>
      <p className="mt-2 text-sm">
        Generate complex images with the brand new and powerful WAN2.2
        model. Exceptional prompt adherence and ultra realistic textures.
      </p>
    </div>
    <button className="absolute bottom-6 right-6 bg-white text-black text-sm font-medium px-4 py-2 rounded-[20px]">
      Try WAN2.2
    </button>
  </>
)}


            {/* Second slide  */}
            {idx === 1 && (
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="uppercase text-xs font-bold">
                  OPEN SOURCE MODEL
                </div>
                <div>
                  <div className="text-2xl font-bold drop-shadow">
                    {slide.text}
                  </div>
                  <p className="mt-2 text-sm max-w-[95%]">
                    We're making the weights to our FLUX.1 Krea model open
                    source. Download and run our model weights, read the
                    technical reports, or generate with it on Krea model.
                  </p>
                </div>
              </div>
            )}

            {/* Other slides */}
            {idx > 1 && slide.text && (
              <div className="absolute left-6 bottom-6 text-white text-2xl font-bold drop-shadow">
                {slide.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full ${
                i === current ? "bg-black" : "bg-[#dadada]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* arrows */}
      <div className="justify-end -mt-8 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous"
          className="bg-[#f6f6f6] p-2 rounded-full text-md"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="bg-[#f6f6f6] p-2 rounded-full text-md"
        >
          &#8250;
        </button>
      </div>

      

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}
