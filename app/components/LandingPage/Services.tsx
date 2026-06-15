"use client";

import {
  FaArrowRightLong,
  FaBullhorn,
  FaChartLine,
  FaLightbulb,
  FaPeopleGroup,
} from "react-icons/fa6";

const services = [
  {
    title: "Brand Strategy",
    desc: "We shape clear campaign directions that help your brand stand out and connect with the right audience.",
    icon: FaLightbulb,
  },
  {
    title: "Outdoor Advertising",
    desc: "Premium billboards, street campaigns, and OOH placements designed for strong visibility and impact.",
    icon: FaBullhorn,
  },
  {
    title: "Digital Campaigns",
    desc: "Creative digital advertising solutions built to drive engagement, awareness, and measurable growth.",
    icon: FaChartLine,
  },
  {
    title: "Brand Activations",
    desc: "Memorable on-ground experiences that bring your brand closer to customers and create real interaction.",
    icon: FaPeopleGroup,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-6 lg:py-20"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#c49313] sm:text-[13px]">
            What We Do
          </p>

          <h2 className="luxury-serif mt-2 text-[34px] font-black tracking-[-0.7px] text-[#101014] sm:text-[42px] lg:text-[48px]">
            Our Services
          </h2>

          <p className="mx-auto mt-3 max-w-[680px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">
            Comprehensive advertising solutions to elevate your brand and drive
            meaningful results.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group h-full rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_35px_rgba(16,16,20,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:shadow-[0_22px_55px_rgba(120,80,10,.14)] sm:p-7"
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e6cf87] bg-[#fff8ea] text-[#c99a24] transition group-hover:bg-[#101014] group-hover:text-[#d4af37] sm:h-16 sm:w-16">
                    <Icon className="text-2xl sm:text-3xl" />
                  </div>

                  <h3 className="luxury-serif mt-6 text-[21px] font-black text-[#101014] sm:text-[23px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          id="contacts"
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#d4af37]/35 bg-[linear-gradient(90deg,#fffdf7,#fff8e9,#fffdf7)] px-6 py-8 text-center shadow-[0_18px_55px_rgba(181,132,24,.12)] md:flex-row md:px-10 md:text-left"
        >
          <div className="hidden text-6xl leading-none text-[#d4af37] md:block">
            ✧
          </div>

          <div className="grow">
            <h3 className="luxury-serif text-[24px] font-black leading-tight text-[#101014] sm:text-[28px]">
              Ready to take your brand to the next level?
            </h3>

            <p className="mt-2 text-[15px] leading-7 text-slate-600 sm:text-[16px]">
              Let&apos;s create something amazing together.
            </p>
          </div>

          <a
            href="#contacts"
            className="gold-gradient gold-shadow inline-flex items-center justify-center gap-4 rounded-full px-8 py-4 text-[15px] font-black text-black transition hover:-translate-y-1 sm:px-9 sm:text-[16px]"
          >
            Get In Touch
            <FaArrowRightLong />
          </a>
        </div>
      </div>
    </section>
  );
}
