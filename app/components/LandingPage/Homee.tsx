"use client";

import Image from "next/image";
import CountUp from "react-countup";
import {
  FaArrowRightLong,
  FaPlay,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaBullhorn,
  FaBullseye,
  FaRocket,
  FaChartSimple,
} from "react-icons/fa6";
import AboutUs from "../AboutUs";

const stats = [
  { icon: FaChartLine, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: FaUsers, value: 200, suffix: "+", label: "Happy Clients" },
  { icon: FaTrophy, value: 15, suffix: "+", label: "Awards Won" },
];

const services = [
  {
    icon: FaBullseye,
    title: "Strategic Planning",
    desc: "Data-driven strategies that align with your business goals and market opportunities.",
  },
  {
    icon: FaRocket,
    title: "Creative Design",
    desc: "Eye-catching designs that capture attention and communicate your message.",
  },
  {
    icon: FaBullhorn,
    title: "Media Buying",
    desc: "Smart media placement that maximizes reach and optimizes your budget.",
  },
  {
    icon: FaChartSimple,
    title: "Analytics & Reporting",
    desc: "Real-time insights and detailed reports that measure success and guide decisions.",
  },
];

export default function Homee() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-slate-950">
      <section
        id="home"
        className="relative min-h-190 overflow-hidden border-b border-black/10 pt-22 sm:min-h-205 lg:min-h-[820px] lg:pt-[92px]"
      >
        <Image
          src="/home/hero-sunset-final.png"
          alt="PROMO STATION sunset billboard hero background"
          fill
          priority
          className="absolute inset-0 z-0 object-cover object-[62%_center] sm:object-[58%_center] lg:object-contain lg:object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,248,229,.98)_0%,rgba(255,246,219,.94)_34%,rgba(255,236,180,.54)_52%,rgba(255,214,105,.14)_68%,rgba(255,255,255,0)_88%)] sm:bg-[linear-gradient(90deg,rgba(255,248,229,.97)_0%,rgba(255,246,219,.9)_28%,rgba(255,236,180,.44)_48%,rgba(255,214,105,.1)_62%,rgba(255,255,255,0)_78%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-[240px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,231,160,.24)_38%,rgba(255,250,240,.88)_100%)]" />
        <div className="absolute left-[-35%] top-[110px] z-[1] h-[560px] w-[115%] bg-[radial-gradient(circle_at_40%_48%,rgba(255,248,218,.95),rgba(255,239,186,.7)_38%,rgba(255,255,255,0)_68%)] sm:left-[-18%] sm:w-[75%] lg:left-[-8%] lg:top-[80px] lg:h-[620px] lg:w-[55%]" />

        <div className="relative z-10 mx-auto flex min-h-[670px] max-w-[1500px] flex-col justify-between px-5 pb-8 pt-10 sm:min-h-[728px] sm:px-6 sm:pb-10 sm:pt-14 lg:pt-20">
          <div className="max-w-[650px] lg:max-w-[690px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e4c464]/45 bg-[#fff8e4]/80 px-4 py-2 text-[13px] font-semibold text-[#a87508] shadow-[0_10px_30px_rgba(181,132,24,.13)] backdrop-blur-md sm:mb-8 sm:gap-3 sm:px-5 sm:py-3 sm:text-[15px]">
              <span className="gold-text text-lg sm:text-xl">✦</span>
              Premium Advertising Solutions
            </div>

            <h1 className="luxury-serif text-[44px] font-black leading-[.98] tracking-[-1.3px] text-[#101014] sm:text-[64px] sm:tracking-[-1.6px] lg:text-[78px] xl:text-[82px]">
              We Make Your <br /> Brand{" "}
              <span className="gold-text block sm:inline">Unforgettable</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-7 text-slate-700 sm:mt-8 sm:max-w-[640px] sm:text-[19px] sm:leading-8">
              Creative advertising that drives results. From strategy to
              execution, we help brands connect, engage, and grow.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-6">
              <button className="gold-gradient gold-shadow flex items-center gap-4 rounded-full px-7 py-4 text-[15px] font-bold text-black transition hover:-translate-y-0.5 sm:gap-5 sm:px-9 sm:py-5 sm:text-[16px]">
                Our Services <FaArrowRightLong />
              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-6 py-4 text-[15px] font-bold text-[#151515] shadow-[0_10px_28px_rgba(15,23,42,.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/95 sm:gap-4 sm:px-8 sm:py-5 sm:text-[16px]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#c99a24] text-[#c99a24]">
                  <FaPlay className="ml-0.5 text-xs" />
                </span>
                Watch Showreel
              </button>
            </div>
          </div>

          <div className="mt-10 grid max-w-[760px] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-white/45 bg-white/42 p-4 shadow-[0_18px_48px_rgba(130,87,10,.18)] backdrop-blur-md sm:grid-cols-3 sm:p-5 lg:mt-0">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 px-2 py-3 sm:gap-5 sm:px-3 ${
                    idx !== 0
                      ? "border-t border-[#b99434]/20 sm:border-l sm:border-t-0 sm:border-[#b99434]/28 sm:pl-7"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/25 text-[#c99a24] sm:h-14 sm:w-14">
                    <Icon className="text-xl sm:text-2xl" />
                  </div>

                  <div>
                    <p className="luxury-serif text-[27px] font-black leading-none text-black sm:text-[31px]">
                      <CountUp end={stat.value} duration={1.8} />
                      {stat.suffix}
                    </p>
                    <p className="mt-1 text-[12px] text-slate-700 sm:mt-2 sm:text-[13px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<AboutUs />
      <section
        id="services"
        className="relative bg-white px-5 pb-8 pt-8 sm:px-6"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[12px] font-black uppercase tracking-wide text-[#c49313] sm:text-[13px]">
              What We Do
            </p>
            <h2 className="luxury-serif mt-1 text-[34px] font-black tracking-[-.7px] text-[#101014] sm:text-[42px]">
              Our Services
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] text-[15px] text-slate-600 sm:text-[16px]">
              Comprehensive advertising solutions to elevate your brand and
              drive meaningful results.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="soft-card rounded-xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e6cf87] bg-[#fff8ea] text-[#c99a24] sm:h-16 sm:w-16">
                      <Icon className="text-2xl sm:text-3xl" />
                    </div>

                    <div>
                      <h3 className="luxury-serif text-[20px] font-black text-[#101014] sm:text-[21px]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-7 text-slate-600 sm:mt-3 sm:text-[15px]">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            id="contact"
            className="gold-border mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border bg-[linear-gradient(90deg,#fffdf7,#fff8e9,#fffdf7)] px-6 py-7 text-center shadow-[0_16px_45px_rgba(181,132,24,.10)] md:flex-row md:px-10 md:text-left"
          >
            <div className="hidden text-6xl text-[#d4af37] md:block">✧</div>

            <div className="grow text-center">
              <h3 className="luxury-serif text-[23px] font-black text-[#101014] sm:text-[25px]">
                Ready to take your brand to the next level?
              </h3>
              <p className="mt-1 text-[15px] text-slate-600 sm:text-[16px]">
                Let&apos;s create something amazing together.
              </p>
            </div>

            <button className="gold-gradient gold-shadow flex items-center gap-4 rounded-full px-7 py-4 text-[15px] font-bold text-black sm:gap-5 sm:px-9 sm:text-[16px]">
              Get In Touch <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
