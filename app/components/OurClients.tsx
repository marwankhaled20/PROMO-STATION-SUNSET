"use client";

import { useState } from "react";
import Image from "next/image";

const brands = [
  { name: "Nike", image: "/work/img1.svg" },
  { name: "Samsung", image: "/work/img2.svg" },
  { name: "Coca-Cola", image: "/work/img3.svg" },
  { name: "McDonald's", image: "/work/img4.svg" },
  { name: "Pepsi", image: "/work/img5.svg" },
  { name: "Orange", image: "/work/img6.svg" },
  { name: "Etisalat", image: "/work/img7.svg" },
  { name: "Nestle", image: "/work/img8.svg" },
  { name: "Nike", image: "/work/img1.svg" },
  { name: "Samsung", image: "/work/img1.svg" },
  { name: "Coca-Cola", image: "/work/img1.svg" },
  { name: "McDonald's", image: "/work/img1.svg" },
  { name: "Pepsi", image: "/work/img1.svg" },
  { name: "Orange", image: "/work/img1.svg" },
  { name: "Etisalat", image: "/work/img1.svg" },
  { name: "Nestle", image: "/work/img1.svg" },
];

type Brand = {
  name: string;
  image: string;
};

export default function OurClients() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const rowOne = [...brands, ...brands];
  const rowTwo = [...brands].reverse().concat([...brands].reverse());

  return (
    <section className="overflow-hidden bg-[#fffaf0] px-5 py-16" id="clients">
      <div className="mx-auto max-w-375">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#c49313]">
            Trusted Companies
          </p>
          <h2 className="luxury-serif text-[34px] font-black tracking-[-0.7px] text-[#101014] sm:text-[42px]">
            Brands That Trust Us
          </h2>
        </div>

        <div className="space-y-6">
          <div className="group overflow-hidden">
            <div className="flex w-max animate-clients-left gap-5 group-hover:[animation-play-state:paused]">
              {rowOne.map((brand, index) => (
                <BrandLogo
                  key={`${brand.name}-top-${index}`}
                  {...brand}
                  onClick={() => setSelectedBrand(brand)}
                />
              ))}
            </div>
          </div>

          <div className="group overflow-hidden">
            <div className="flex w-max animate-clients-right gap-5 group-hover:[animation-play-state:paused]">
              {rowTwo.map((brand, index) => (
                <BrandLogo
                  key={`${brand.name}-bottom-${index}`}
                  {...brand}
                  onClick={() => setSelectedBrand(brand)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedBrand && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedBrand(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-[#101014] text-[18px] font-black text-white transition hover:bg-[#c49313]"
              aria-label="Close popup"
            >
              X
            </button>

            <div className="pt-8 text-center">
              <h3 className="mb-5 text-[24px] font-black text-[#101014]">
                {selectedBrand.name}
              </h3>

              <div className="relative mx-auto h-80 w-full max-w-xl overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#fffaf0] sm:h-100">
                <Image
                  src={selectedBrand.image}
                  alt={selectedBrand.name}
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function BrandLogo({
  name,
  image,
  onClick,
}: {
  name: string;
  image: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 cursor-pointer rounded-2xl  p-4  transition hover:-translate-y-1 "
    >
      <p className="mb-1 text-center text-[14px] font-black text-[#101014]">
        {name}
      </p>

      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="h-32 w-40 object-contain sm:h-36 sm:w-48"
      />
    </button>
  );
}
