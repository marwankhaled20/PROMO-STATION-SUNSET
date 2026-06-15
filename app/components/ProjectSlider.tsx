"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  { name: "Vodafone13", type: "Activation Campaign", image: "/work/img8.svg" },
  { name: "Nike", type: "Billboard Campaign", image: "/work/img1.svg" },
  { name: "Samsung", type: "Digital Campaign", image: "/work/img2.svg" },
  { name: "Coca-Cola", type: "Outdoor Campaign", image: "/work/img3.svg" },
  {
    name: "McDonald's",
    type: "Social Media Campaign",
    image: "/work/img4.svg",
  },
  { name: "Pepsi", type: "OOH Campaign", image: "/work/img5.svg" },
  { name: "Orange", type: "Brand Campaign", image: "/work/img6.svg" },
  { name: "Adidas", type: "Retail Campaign", image: "/work/img7.svg" },
  { name: "Vodafone", type: "Activation Campaign", image: "/work/img8.svg" },
  { name: "Vodafone1", type: "Activation Campaign", image: "/work/img8.svg" },
  { name: "Vodafone12", type: "Activation Campaign", image: "/work/img8.svg" },
];

type Project = {
  name: string;
  type: string;
  image: string;
};

export default function ProjectsSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = projects.slice(0, 6);

  return (
    <section id="project" className="overflow-hidden bg-[#fffaf0] px-5 py-16">
      <div className="mx-auto max-w-375">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-black uppercase tracking-wide text-[#c49313]">
              Our Work
            </p>
            <h2 className="luxury-serif text-[42px] font-black text-[#101014]">
              Featured Projects
            </h2>
            <p className="mt-1 text-[15px] text-slate-600">
              Real results for real brands.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-fit rounded-full bg-[#101014] px-7 py-3 text-[13px] font-black uppercase tracking-wide text-white transition hover:bg-[#c49313]"
          >
            View All Projects
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
              onImageClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-[#fffaf0] shadow-[0_30px_80px_rgba(0,0,0,.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d4af37]/25 bg-[#fffaf0] px-5 py-4 sm:px-7">
              <div>
                <p className="text-[12px] font-black uppercase tracking-wide text-[#c49313]">
                  All Work
                </p>
                <h3 className="luxury-serif text-[28px] font-black text-[#101014]">
                  All Projects
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex size-10 items-center justify-center rounded-full bg-white text-[18px] font-black text-[#101014] shadow-[0_10px_25px_rgba(120,80,10,.12)] transition hover:bg-[#101014] hover:text-white"
                aria-label="Close popup"
              >
                X
              </button>
            </div>

            <div className="max-h-[calc(85vh-92px)] overflow-y-auto px-5 py-6 sm:px-7">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={`popup-${project.name}`}
                    {...project}
                    onImageClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 py-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl bg-white p-5 shadow-[0_30px_90px_rgba(0,0,0,.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-[#101014] text-[18px] font-black text-white transition hover:bg-[#c49313]"
              aria-label="Close image popup"
            >
              X
            </button>

            <div className="mb-4 pr-12">
              <h3 className="text-[24px] font-black text-[#101014]">
                {selectedProject.name}
              </h3>
              <p className="text-[14px] text-slate-600">
                {selectedProject.type}
              </p>
            </div>

            <div className="relative h-[65vh] w-full overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#fffaf0]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  name,
  type,
  image,
  onImageClick,
}: {
  name: string;
  type: string;
  image: string;
  onImageClick: () => void;
}) {
  return (
    <div className="shrink-0">
      <button
        type="button"
        onClick={onImageClick}
        className="block w-full overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-white text-left shadow-[0_18px_45px_rgba(120,80,10,.14)]"
      >
        <div className="relative h-40 sm:h-47.5">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </button>

      <div className="mt-3">
        <h3 className="text-[15px] font-black text-[#101014]">{name}</h3>
        <p className="text-[13px] text-slate-600">{type}</p>
      </div>
    </div>
  );
}
