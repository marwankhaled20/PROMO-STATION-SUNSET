"use client";

import Image from "next/image";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "80+", label: "Trusted Brands" },
];

const points = [
  "Creative campaigns built around real business goals.",
  "Full execution from concept, design, production, to launch.",
  "Premium outdoor, digital, activation, and brand experiences.",
];

export default function AboutUs() {
  return (
    <section id="about" className="overflow-hidden bg-[#fffaf0] px-5 py-20">
      <div className="mx-auto grid max-w-375 items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#c49313]">
            About Us
          </p>

          <h2 className="luxury-serif mt-3 max-w-3xl text-[38px] font-black leading-[1.05] tracking-[-0.8px] text-[#101014] sm:text-[52px]">
            We turn bold brand ideas into campaigns people remember.
          </h2>

          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-slate-600">
            Promo Station is a creative advertising partner helping brands show
            up stronger across outdoor, digital, retail, and activation
            campaigns. We mix sharp strategy with premium execution to make
            every project feel clear, visible, and memorable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-[#d4af37] bg-white/60 px-5 py-4"
              >
                <p className="luxury-serif text-[34px] font-black leading-none text-[#101014]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[13px] font-bold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div key={point} className="flex gap-4">
                <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#101014] text-[12px] font-black text-[#d4af37]">
                  {index + 1}
                </span>
                <p className="text-[15px] leading-6 text-slate-700">{point}</p>
              </div>
            ))}
          </div>

          <a
            href="#project"
            className="mt-9 inline-flex rounded-full bg-[#101014] px-8 py-3 text-[13px] font-black uppercase tracking-wide text-white transition hover:bg-[#c49313]"
          >
            See Our Work
          </a>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-[#d4af37]/40" />
          <div className="absolute -bottom-8 -left-8 h-52 w-52 rounded-full bg-[#d4af37]/10" />

          <div className="relative overflow-hidden rounded-[28px] border border-[#d4af37]/30 bg-white p-4 shadow-[0_24px_70px_rgba(120,80,10,.16)]">
            <div className="relative h-[420px] overflow-hidden rounded-[22px] bg-[#f7eed8] sm:h-[520px]">
              <Image
                src="/work/img1.svg"
                alt="Promo Station creative advertising work"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_16px_40px_rgba(16,16,20,.12)] backdrop-blur">
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#c49313]">
                What We Do
              </p>
              <h3 className="luxury-serif mt-1 text-[28px] font-black text-[#101014]">
                Strategy. Design. Execution.
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                One team taking your campaign from the first idea to the final
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}