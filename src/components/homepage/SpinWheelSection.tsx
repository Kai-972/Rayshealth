
import React, { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SLICES = [
  { label: "Not Lucky", color: "#a06d2f" },
  { label: "$15 OFF", color: "#f28a1c" },
  { label: "5% OFF", color: "#a06d2f" },
  { label: "$10 OFF", color: "#7aaa3a" },
  { label: "Not Lucky", color: "#f28a1c" },
  { label: "Free Ship", color: "#7aaa3a" },
] as const;

const FULL_ROT = 360;

const SpinWheelSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const sliceAngle = 360 / SLICES.length;

  const hasSpun = useMemo(() => {
    if (!email) return false;
    return sessionStorage.getItem(`spun:${email}`) === "1";
  }, [email]);

  function validateEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  function pickRandomIndex() {
    return Math.floor(Math.random() * SLICES.length);
  }

  function handleSpin() {
    setError(null);
    setResult(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (hasSpun) {
      setError("This email has already spun in this session.");
      return;
    }
    if (isSpinning) return;

    setIsSpinning(true);

    const winIndex = pickRandomIndex();
    const sliceCenter = winIndex * sliceAngle + sliceAngle / 2;
    const extraSpins = 5;
    const target = rotation + extraSpins * FULL_ROT + (FULL_ROT - sliceCenter);

    if (wheelRef.current) {
      wheelRef.current.style.transition =
        "transform 3.2s cubic-bezier(0.2, 0.8, 0.2, 1)";
      wheelRef.current.offsetHeight;
      wheelRef.current.style.transform = `rotate(${target}deg)`;
    }

    const onEnd = () => {
      if (!wheelRef.current) return;
      wheelRef.current.removeEventListener("transitionend", onEnd);

      const normalized = ((target % FULL_ROT) + FULL_ROT) % FULL_ROT;
      setRotation(normalized);
      wheelRef.current.style.transition = "";

      setIsSpinning(false);
      setResult(SLICES[winIndex].label);
      sessionStorage.setItem(`spun:${email}`, "1");
    };

    wheelRef.current?.addEventListener("transitionend", onEnd);
  }

  const wheelBackground = useMemo(() => {
    const stops: string[] = [];
    for (let i = 0; i < SLICES.length; i++) {
      const start = i * sliceAngle;
      const end = start + sliceAngle;
      stops.push(`${SLICES[i].color} ${start}deg ${end}deg`);
    }
    return `conic-gradient(${stops.join(",")})`;
  }, [sliceAngle]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Get Latest Discounts
              <br /> and Offer By Spinning
              <br /> A Wheel
            </h2>

            <div className="mt-6 h-1 w-24 bg-green-600 rounded-full" />

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Try your luck to get discount coupon</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>1 spin per email</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>No cheating</span>
              </li>
            </ul>

            <div className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please enter your email"
                  className="w-full sm:flex-1 h-12 rounded-md border border-gray-300 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:opacity-50"
                  disabled={isSpinning}
                />
                <Button
                  className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold disabled:opacity-60"
                  onClick={handleSpin}
                  disabled={isSpinning}
                >
                  {isSpinning ? "SPINNING..." : "TRY YOUR LUCK"}
                </Button>
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              {result && !error && (
                <p className="mt-3 text-sm font-semibold text-gray-800">
                  Result: <span className="text-green-700">{result}</span>
                </p>
              )}
            </div>
          </div>

          {/* Right column: Wheel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[520px] h-[520px] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />

              <div
                ref={wheelRef}
                className="absolute inset-0 rounded-full"
                style={{
                  background: wheelBackground,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {[...Array(SLICES.length)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 bg-black/20 origin-top"
                    style={{
                      width: "2px",
                      height: "50%",
                      transform: `rotate(${i * sliceAngle}deg) translate(-50%, -100%)`,
                    }}
                  />
                ))}

                {SLICES.map((s, i) => {
  const angle = i * sliceAngle + sliceAngle / 2;
  const radius = 260; // half of wheel size
  const offset = radius * 0.7; // ~70% outward for perfect balance

  return (
    <div
      key={s.label + i}
      className="absolute left-1/2 top-1/2 z-[2]"
      style={{
        transform: `
          rotate(${angle}deg)
          translate(0, -${offset}px)
          rotate(-${angle}deg)
        `,
        transformOrigin: "center",
        pointerEvents: "none",
      }}
    >
      <span
        className="block text-center font-bold select-none"
        style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: 1.2,
          color: "#fff",
          WebkitTextStroke: "1px rgba(0,0,0,0.55)",
          textShadow: "0 2px 4px rgba(0,0,0,0.6), 0 0 3px rgba(0,0,0,0.6)",
          whiteSpace: "nowrap",
          padding: "2px 8px",
          borderRadius: "6px",
          background: "rgba(0,0,0,0.35)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          transform: "translate(-50%, -50%)", // center align the span itself
        }}
      >
        {s.label}
      </span>
    </div>
  );
})}
              </div>

              {/* Smaller hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-md border border-black/10" />

              {/* Pointer */}
              {/* Pointer */}
<div
  className="absolute left-1/2 bottom-0 z-20"
  style={{
    transform: "translate(-50%, 40%) rotate(180deg)", // rotate downwards
  }}
>
  <div
    className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-red-600 drop-shadow-lg"
  />
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpinWheelSection;
