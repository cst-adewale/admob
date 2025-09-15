"use client";
import { useState, useEffect } from "react";

const slides = [
  { id: 1, image: "carousel3.png", text: "Slide 1 text" },
  { id: 2, video: "fluxvid.mp4", text: "Slide 2 text" },
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
  return (
    <div className="flex gap-8 overflow-x-auto p-4">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="flex-shrink-0 w-[700px] h-[370px] relative rounded-[15px] overflow-hidden"
          style={{
            backgroundImage: slide.image ? `url(${slide.image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {slide.video && (
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
            {slide.text}
          </div>
        </div>
      ))}
    </div>
  );
}
