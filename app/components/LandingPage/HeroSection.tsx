"use client";

import Image from "next/image";
import CountUp from "react-countup";
import {
  FaArrowRight,
  FaChartLine,
  FaPlay,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa6";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    icon: FaChartLine,
  },
  {
    value: 200,
    suffix: "+",
    label: "Happy Clients",
    icon: FaUsers,
  },
  {
    value: 15,
    suffix: "+",
    label: "Awards Won",
    icon: FaTrophy,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fffaf0] px-5 pt-28 sm:pt-32 lg:px-8 lg:pt-24"
    >
      <Image
        src="/home/bg.svg"
        alt="Promo Station background"
        fill
        priority
        className="pointer-events-none object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#fffaf0]/95 via-[#fffaf0]/70 to-[#fffaf0]/15 lg:from-[#fffaf0]/90 lg:via-[#fffaf0]/45 lg:to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-375 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-white/55 px-5 py-3 text-[13px] font-black text-[#b88714] shadow-[0_14px_35px_rgba(120,80,10,.08)] backdrop-blur">
            <FaStar className="text-[#c49313]" />
            Premium Advertising Solutions
          </div>

          <h1 className="luxury-serif text-[52px] font-black leading-[0.98] tracking-[-1.8px] text-[#101014] sm:text-[72px] lg:text-[84px] xl:text-[96px]">
            We Make Your Brand{" "}
            <span className="block text-[#b88714]">Unforgettable</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-8 text-slate-600 sm:text-[18px] lg:mx-0">
            Creative advertising that drives results. From strategy to
            execution, we help brands connect, engage, and grow.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#services"
              className="gold-gradient gold-shadow inline-flex h-14 items-center justify-center gap-4 rounded-full px-8 text-[15px] font-black text-[#101014] transition hover:-translate-y-1"
            >
              Our Services
              <FaArrowRight className="text-[15px]" />
            </a>

            <a
              href="#work"
              className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-white/85 px-8 text-[15px] font-black text-[#101014] shadow-[0_16px_35px_rgba(16,16,20,.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#b88714]">
                <FaPlay className="ml-0.5 text-[12px]" />
              </span>
              Watch Showreel
            </a>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-white/55 shadow-[0_18px_55px_rgba(120,80,10,.10)] backdrop-blur sm:grid-cols-3 lg:max-w-2xl">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex items-center justify-center gap-4 px-5 py-5 text-left ${
                    index !== stats.length - 1
                      ? "border-b border-[#d4af37]/20 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <Icon className="shrink-0 text-[34px] text-[#c49313]" />

                  <div>
                    <p className="text-[28px] font-black leading-none text-[#101014]">
                      <CountUp
                        end={stat.value}
                        duration={2.4}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {stat.suffix}
                    </p>
                    <p className="mt-2 text-[13px] font-semibold text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-90 sm:min-h-115 lg:min-h-190">
          <Image
            src="/home/stand.svg"
            alt="Promo Station billboard stand"
            fill
            priority
            className="object-contain object-center lg:object-right"
          />
        </div>
      </div>
    </section>
  );
}