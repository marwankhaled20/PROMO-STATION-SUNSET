"use client";

import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

export default function UpDownButtons() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollableHeight = fullHeight - windowHeight;

      if (scrollableHeight <= 0) {
        setShowUp(false);
        setShowDown(false);
        return;
      }

      const scrollPercent = (scrollTop / scrollableHeight) * 100;

      setShowUp(scrollPercent > 10);
      setShowDown(scrollPercent < 90);
    };

    const frameId = requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const buttonClass =
    "flex size-11 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#101014] text-[#d4af37] shadow-[0_14px_35px_rgba(120,80,10,.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#c49313] hover:text-[#101014] hover:shadow-[0_18px_45px_rgba(120,80,10,.32)]";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showUp && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className={buttonClass}
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {showDown && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to bottom"
          className={buttonClass}
        >
          <FaArrowDown size={18} />
        </button>
      )}
    </div>
  );
}
