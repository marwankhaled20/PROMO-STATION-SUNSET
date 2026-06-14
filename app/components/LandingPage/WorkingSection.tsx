"use client";

import Image from "next/image";
import { useState } from "react";

const workItems = [
  { image: "/work/img1.svg", title: "OUTDOOR SIGNAGE", subtitle: "Metro Egypt" },
  { image: "/work/img2.svg", title: "EVENT MATERIALS", subtitle: "Hikvision Event" },
  { image: "/work/img3.svg", title: "EXHIBITION STAND", subtitle: "QNB Alahli" },
  { image: "/work/img4.svg", title: "EVENT MANAGEMENT", subtitle: "Commercial Display Seminar" },
];

type Item = (typeof workItems)[number];

export default function WorkSection() {
  const [selectedImage, setSelectedImage] = useState<Item | null>(null);
  return (
    <section id="work" className="bg-[#fbfaf7] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 text-center">
          <p className="text-[13px] font-black uppercase tracking-wide text-[#c49313]">Selected Work</p>
          <h2 className="luxury-serif mt-2 text-[42px] font-black">Luxury Brand Moments</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workItems.map((item) => (
            <button key={item.title} onClick={() => setSelectedImage(item)} className="group relative h-72 overflow-hidden rounded-2xl border border-[#e2cf86] bg-white text-left soft-card">
              <Image src={item.image} alt={item.title} width={600} height={450} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-5 text-white">
                <h3 className="text-sm font-black tracking-wide">{item.title}</h3>
                <p className="mt-1 text-xs text-white/80">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-5">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-3">
            <Image src={selectedImage.image} alt={selectedImage.title} width={1400} height={900} className="max-h-[80vh] w-full rounded-xl object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
