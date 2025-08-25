// components/EssentialOilsSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";

const EssentialOilsSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Left green background */}
      <div className="absolute inset-0 -z-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#3b7a2f] bg-gradient-to-br from-[#3b7a2f] to-[#2f6a26]" />
        <div className="bg-white" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy on green */}
          <div className="py-14 md:py-20 lg:py-24 text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Rejuvenate your body & mind with our Premium Essential Oils
            </h2>

            {/* Underline */}
            <div className="mt-6 h-1 w-24 bg-white/90 rounded-full" />

            <p className="mt-6 text-white/90 leading-relaxed">
              When you have a healthy mind and body, it truly feels great! Isn’t it?
              The essential oils by RHL™ can help you attain that healthy state of
              physical and mental health, in a completely natural way!
            </p>

            <p className="mt-5 text-white/90 leading-relaxed">
              With our essential oils, you can attain improved skin and hair health,
              making you looking your best! You can beat the stress, experience peace,
              relaxation and sleep better, which would help you function more efficiently
              in your day‑to‑day life. Essential oils are packed with a plethora of
              health benefits!
            </p>

            <div className="mt-8 flex items-center gap-5">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md">
                LEARN MORE
              </Button>

              {/* BBB badge placeholder (swap with local asset if you have one) */}
              <img
                src="/bbb.jpeg"
                alt="BBB Accredited Business"
                className="h-12 rounded-md w-auto opacity-90"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Lifestyle image */}
          <div className="py-10 md:py-16 lg:py-20">
            <div className="relative">
              <img
                src="/img2.jpg"
                alt="Essential oils and natural care setup"
                className="w-full h-[420px] md:h-[520px] object-cover rounded-md shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialOilsSection;
