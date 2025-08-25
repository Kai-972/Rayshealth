// components/Testimonials.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Replace these Unsplash images/user avatars as needed
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
    heading: "Happy Customer",
    quote:
      "I took a 30 day vacation from June 30 to July 30. I drove over 3400 miles. The last 3 days of the trip, I was anxious to get home and drove too many hours without a rest stop.",
    name: "Henry E. Welling",
    location: "",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1600&auto=format&fit=crop",
    heading: "Happy Customer",
    quote:
      "Ray's essential oils turned out to be awesome. It has an extraordinary effect on boosting brain functions along with dealing with pains reliefs and aches. This essential oils are now essential in my life.",
    name: "Mike F. ~GA",
    location: "",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    heading: "Happy Customer",
    quote:
      "I am hugely benefitted by the effects of Maximum cardio 4U. What a useful product! Helps me incredibly in boosting my immunity and keeping cardiac actions smooth. Oh yes! Lovely flavours too.",
    name: "Alicia P. ~CA",
    location: "",
    avatar:
      "https://images.unsplash.com/photo-1544005316-04ae1f4a6f2d?q=80&w=300&auto=format&fit=crop",
  },
];

// Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imgReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  // Autoplay
  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), 6000);
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const active = useMemo(() => slides[index], [index]);

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-white" aria-label="Customer testimonials">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: large image */}
          <motion.div
            key={active.id + "-image"}
            variants={imgReveal}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <img
              src={active.image}
              alt="Customer lifestyle"
              className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover rounded-md shadow-lg"
              loading="eager"
            />
            {/* Left arrow */}
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="absolute left-[-12px] sm:left-[-20px] top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white w-11 h-11 rounded-full grid place-items-center shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {/* Right arrow */}
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="absolute right-[-12px] sm:right-[-20px] top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white w-11 h-11 rounded-full grid place-items-center shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Right: copy */}
          <div className="max-w-2xl">
            <motion.h3
              key={active.id + "-heading"}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            >
              {active.heading}
            </motion.h3>

            <motion.p
              key={active.id + "-quote"}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 text-lg text-gray-700 leading-relaxed"
            >
              {active.quote}
            </motion.p>

            <motion.div
              key={active.id + "-person"}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-4"
            >
              <div className="relative">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-green-200"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="h-px bg-green-300 w-full mb-2" />
                <p className="text-right font-semibold text-gray-900">
                  - {active.name}
                </p>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="mt-10 flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === index ? "bg-orange-500 w-4" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Testimonials;
