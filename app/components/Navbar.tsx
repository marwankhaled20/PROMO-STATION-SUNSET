"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "#services" },
  { title: "Our Work", href: "#work" },
  { title: "About Us", href: "#about" },
  { title: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-0 rounded-[14px] border-2 border-[#c99a24] bg-[linear-gradient(135deg,#111,#2b2b2b)] [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]" />
        <div className="luxury-serif gold-text relative text-[26px] font-black leading-none">PS</div>
      </div>
      <div className="leading-none">
        <p className="text-[22px] font-black tracking-tight text-[#0d0d10]">PROMO STATION</p>
        <p className="mt-1 text-[12px] font-semibold tracking-[4px] text-[#151515]">ADVERTISING AGENCY</p>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/90 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <Logo />
          <ul className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link, index) => {
              const isActive = index === 0 && pathname === "/";
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`relative text-[15px] font-semibold transition ${isActive ? "text-[#a97708]" : "text-slate-900 hover:text-[#b88714]"}`}>
                    {link.title}
                    {isActive && <span className="gold-gradient absolute -bottom-5 left-1/2 h-[2px] w-14 -translate-x-1/2 rounded-full" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="gold-gradient gold-shadow hidden rounded-full px-8 py-4 text-[15px] font-bold text-black lg:block">Get Started</button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-slate-900 lg:hidden" aria-label="Toggle menu">
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
      <div className={`fixed left-0 top-[89px] z-40 w-full border-b border-[#ecd37c] bg-white px-6 py-6 transition lg:hidden ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"}`}>
        <ul className="flex flex-col gap-5 text-center">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-semibold text-slate-900">{link.title}</Link>)}
        </ul>
      </div>
    </>
  );
}
