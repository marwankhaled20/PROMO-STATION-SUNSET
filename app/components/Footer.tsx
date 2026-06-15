"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });

  return (
    <footer className="bg-[#101010] px-6 pt-10 text-white" id="contacts">
      <div className="mx-auto grid max-w-375 grid-cols-1 gap-10 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center w-40 h-23 gap-3">
            <Link href="/">
              <Image
                src="/navbar/logo.png"
                alt="Promo Station"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <p className="mt-5 max-w-55 text-[14px] leading-6 text-white/70">
            Building brands that stand out. Creative. Strategic. Effective.
          </p>

          <div className="mt-5 flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#d4af37] hover:text-black"
                >
                  <Icon className="text-[24px]" />
                </a>
              ),
            )}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[15px] font-bold">Quick Links</h4>
          <ul className="space-y-2 text-[14px] text-white/70">
            {[
              "Home",
              "About Us",
              "Services",
              "Our Work",
              "Blog",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-[#d4af37]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[15px] font-bold">Services</h4>
          <ul className="space-y-2 text-[14px] text-white/70">
            {[
              "Billboard Advertising",
              "Digital Advertising",
              "Creative Design",
              "Video Production",
              "Social Media Marketing",
              "Marketing Strategy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-[#d4af37]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[15px] font-bold">Contact Info</h4>
          <ul className="space-y-4 text-[14px] text-white/70">
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#d4af37]" /> +20 123 456 7890
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#d4af37]" /> info@promo-station.com
            </li>
            <li className="flex items-center gap-3">
              <FaLocationDot className="text-[#d4af37]" /> Cairo, Egypt
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[15px] font-bold">Working Hours</h4>
          <div className="space-y-4 text-[14px] text-white/70">
            <p>
              <span className="block font-semibold text-white">
                Sunday - Thursday
              </span>
              9:00 AM - 6:00 PM
            </p>
            <p>
              <span className="block font-semibold text-white">
                Friday - Saturday
              </span>
              Closed
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 text-center text-[13px] text-white/60">
        © {currentYear} Promo Station. All Rights Reserved.
      </div>
    </footer>
  );
}
