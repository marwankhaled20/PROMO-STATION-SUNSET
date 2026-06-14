"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { FaArrowRightLong, FaPlay, FaChartLine, FaUsers, FaTrophy, FaBullhorn, FaBullseye, FaRocket, FaChartSimple } from "react-icons/fa6";

const stats = [
  { icon: FaChartLine, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: FaUsers, value: 200, suffix: "+", label: "Happy Clients" },
  { icon: FaTrophy, value: 15, suffix: "+", label: "Awards Won" },
];

const services = [
  { icon: FaBullseye, title: "Strategic Planning", desc: "Data-driven strategies that align with your business goals and market opportunities." },
  { icon: FaRocket, title: "Creative Design", desc: "Eye-catching designs that capture attention and communicate your message." },
  { icon: FaBullhorn, title: "Media Buying", desc: "Smart media placement that maximizes reach and optimizes your budget." },
  { icon: FaChartSimple, title: "Analytics & Reporting", desc: "Real-time insights and detailed reports that measure success and guide decisions." },
];

export default function Homee() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-slate-950">
      <section
        id="home"
        className="relative min-h-[820px] overflow-hidden border-b border-black/10 pt-[92px]"
      >
        {/* One full-bleed hero composition: sunset city, road, and gold billboard */}
        <Image
          src="/home/hero-sunset-final.png"
          alt="PROMO STATION sunset billboard hero background"
          fill
          priority
          className="absolute inset-0 z-0 object-contain object-center"
          sizes="100vw"
        />

        {/* Warm readable mask on the left, while keeping the sunset visible */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,248,229,.96)_0%,rgba(255,246,219,.88)_26%,rgba(255,236,180,.45)_43%,rgba(255,214,105,.10)_58%,rgba(255,255,255,0)_76%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-[210px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,231,160,.22)_38%,rgba(255,250,240,.80)_100%)]" />
        <div className="absolute left-[-8%] top-[80px] z-[1] h-[620px] w-[55%] bg-[radial-gradient(circle_at_44%_50%,rgba(255,248,218,.95),rgba(255,239,186,.68)_43%,rgba(255,255,255,0)_72%)]" />

        <div className="relative z-10 mx-auto flex min-h-[728px] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-16 lg:pt-20">
          <div className="max-w-[690px]">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#e4c464]/45 bg-[#fff8e4]/80 px-5 py-3 text-[15px] font-semibold text-[#a87508] shadow-[0_10px_30px_rgba(181,132,24,.13)] backdrop-blur-md">
              <span className="gold-text text-xl">✦</span> Premium Advertising Solutions
            </div>

            <h1 className="luxury-serif text-[52px] font-black leading-[.98] tracking-[-1.8px] text-[#101014] sm:text-[72px] lg:text-[78px] xl:text-[82px]">
              We Make Your <br /> Brand <span className="gold-text">Unforgettable</span>
            </h1>

            <p className="mt-8 max-w-[640px] text-[18px] leading-8 text-slate-700 sm:text-[19px]">
              Creative advertising that drives results. From strategy to execution, we help brands connect, engage, and grow.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <button className="gold-gradient gold-shadow flex items-center gap-5 rounded-full px-9 py-5 text-[16px] font-bold text-black transition hover:-translate-y-0.5">
                Our Services <FaArrowRightLong />
              </button>
              <button className="flex items-center gap-4 rounded-full border border-white/70 bg-white/80 px-8 py-5 text-[16px] font-bold text-[#151515] shadow-[0_10px_28px_rgba(15,23,42,.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/95">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#c99a24] text-[#c99a24]"><FaPlay className="ml-0.5 text-xs" /></span> Watch Showreel
              </button>
            </div>
          </div>

          <div className="grid max-w-[760px] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-white/45 bg-white/38 p-5 shadow-[0_18px_48px_rgba(130,87,10,.18)] backdrop-blur-md sm:grid-cols-3">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className={`flex items-center gap-5 px-3 py-3 ${idx !== 0 ? "sm:border-l sm:border-[#b99434]/28 sm:pl-7" : ""}`}>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/25 text-[#c99a24]"><Icon className="text-2xl" /></div>
                  <div>
                    <p className="luxury-serif text-[31px] font-black leading-none text-black"><CountUp end={stat.value} duration={1.8} />{stat.suffix}</p>
                    <p className="mt-2 text-[13px] text-slate-700">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-white px-6 pb-8 pt-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[13px] font-black uppercase tracking-wide text-[#c49313]">What We Do</p>
            <h2 className="luxury-serif mt-1 text-[42px] font-black tracking-[-.7px] text-[#101014]">Our Services</h2>
            <p className="mt-2 text-[16px] text-slate-600">Comprehensive advertising solutions to elevate your brand and drive meaningful results.</p>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="soft-card rounded-xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e6cf87] bg-[#fff8ea] text-[#c99a24]"><Icon className="text-3xl" /></div>
                    <div>
                      <h3 className="luxury-serif text-[21px] font-black text-[#101014]">{service.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="contact" className="gold-border mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border bg-[linear-gradient(90deg,#fffdf7,#fff8e9,#fffdf7)] px-10 py-7 text-center shadow-[0_16px_45px_rgba(181,132,24,.10)] md:flex-row md:text-left">
            <div className="hidden text-6xl text-[#d4af37] md:block">✧</div>
            <div className="grow text-center">
              <h3 className="luxury-serif text-[25px] font-black text-[#101014]">Ready to take your brand to the next level?</h3>
              <p className="mt-1 text-[16px] text-slate-600">Let&apos;s create something amazing together.</p>
            </div>
            <button className="gold-gradient gold-shadow flex items-center gap-5 rounded-full px-9 py-4 text-[16px] font-bold text-black">Get In Touch <FaArrowRightLong /></button>
          </div>
        </div>
      </section>
    </main>
  );
}


