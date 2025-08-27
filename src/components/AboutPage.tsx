import React from "react";

type Side = "left" | "right";

interface RailButtonProps {
  label: string;
  href?: string;
  side?: Side;
  className?: string;
}

const AboutPage: React.FC = () => {
  const unsplashHero =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1920&auto=format&fit=crop";

  // Helper for the rail buttons (kept inline to keep this truly one file)
  const RailButton: React.FC<RailButtonProps> = ({
    label,
    href = "#",
    side = "right",
    className = "",
  }) => {
    const isLeft = side === "left";
    return (
      <a
        href={href}
        aria-label={label}
        className={[
          "fixed z-40 top-2/5",
          isLeft
            ? "left-0 origin-left -translate-y-1/2 -translate-x-1/2"
            : "right-0 origin-right -translate-y-1/2 translate-x-1/2",
          "rotate-90",
          className,
        ].join(" ")}
      >
        <span className="inline-block bg-neutral-900 text-white hover:bg-emerald-600 transition-colors px-4 py-2 rounded-t-lg shadow-lg font-semibold tracking-wide">
          {label}
        </span>
      </a>
    );
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero: centered title over Unsplash image with gradient overlays for contrast */}
      <div
        className="relative min-h-[240px] md:min-h-[300px] flex items-center justify-start bg-center bg-cover"
        style={{ backgroundImage: `url('${unsplashHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-orange-400/20" />
        <div className="relative inset-0 bg-black/10" />
        <div className="relative w-full max-w-[1200px] mx-auto px-6">
    <h1 className="text-white text-left font-bold text-[clamp(32px,5vw,64px)] drop-shadow-md">
      About Us
    </h1>
  </div>
      </div>

      {/* One continuous page content */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-14 md:py-20">
        {/* About Our Firm row */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_1fr] mb-12 md:mb-16">
          <div className="flex items-end order-2 lg:order-none">
            <img
              src="/about-section-pic1.jpg"
              alt="Herbal products collage"
              loading="lazy"
              className="w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.12))" }}
            />
          </div>
          <div className="order-1 lg:order-none">
            <h2 className="text-[clamp(26px,3vw,40px)] font-semibold mb-2">
              About Our Firm
            </h2>
            <span className="inline-block w-16 h-1.5 bg-emerald-600 rounded mb-5" />
            <p className="text-neutral-600 leading-7 text-base mb-3">
              Ray’s Healthy Living is a family‑centric business providing quality beauty and health
              supplements for you and your family. Our products are based on natural and organic
              ingredients at affordable prices.
            </p>
            <p className="text-neutral-600 leading-7 text-base mb-3">
              We believe natural and organic herbal supplements and vitamins offer the most benefit
              for general health and vitality while being safer than artificial equivalents. We
              operate through traditional brick‑and‑mortar stores and our own brand website.
            </p>
            <p className="text-neutral-600 leading-7 text-base">
              Our products feature enhanced natural vitamins and minerals produced through thorough
              and effective quality standards. We take pride in ethical business practices with a
              focus on customer satisfaction and safety.
            </p>
          </div>
        </div>

        {/* Commitment headline */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[clamp(26px,4vw,48px)] font-extrabold leading-tight">
            Ray’s healthy living commitment to
            <br />
            quality, safety, and satisfaction
          </h2>
          <span className="mt-4 inline-block h-1.5 w-20 bg-emerald-600 rounded" />
        </div>

        {/* Three feature cards */}
        <div className="grid gap-10 lg:grid-cols-3 mb-12 md:mb-16">
          <article className="flex flex-col items-center text-center">
            <img
              src="/rays-about-srv-pic1.jpg"
              alt="Safe ingredients"
              className="w-full max-w-[520px] aspect-[16/10] object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-wide">
              SAFE INGREDIENTS
            </h3>
            <p className="mt-3 max-w-[36ch] text-neutral-600 leading-7">
              All of Ray’s Healthy Living products use only safe and natural ingredients extracted
              from the finest organic herbs and fruits. We guarantee these ingredients are free from
              any artificial additives or chemicals.
            </p>
          </article>

          <article className="flex flex-col items-center text-center">
            <img
              src="/rays-about-srv-pic2.jpg"
              alt="Ideal growing environment"
              className="w-full max-w-[520px] aspect-[16/10] object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-wide">
              IDEAL GROWING ENVIRONMENT
            </h3>
            <p className="mt-3 max-w-[36ch] text-neutral-600 leading-7">
              Ray’s Healthy Living products use safe and effective environmental conditions in the
              production of their ingredients. Climate and soil selection are environmentally
              friendly and only the finest herbs are chosen for manufacture.
            </p>
          </article>

          <article className="flex flex-col items-center text-center">
            <img
              src="/rays-about-srv-pic3.jpg"
              alt="Scientifically tested herbs"
              className="w-full max-w-[520px] aspect-[16/10] object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-wide">
              SCIENTIFICALLY TESTED
            </h3>
            <p className="mt-3 max-w-[36ch] text-neutral-600 leading-7">
              Our manufacturers use advanced technologies, such as chromatographic fingerprinting
              and consistent microscopic analysis, to guarantee that our herbs and fruits are the
              best quality and are not commonly acquired substitutes.
            </p>
          </article>
        </div>

        {/* Quality Control + Satisfaction */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-2">
          <article className="flex flex-col items-center text-center">
            <img
              src="/rays-about-srv-pic4.jpg"
              alt="Quality control with herbs"
              className="w-full max-w-[360px] aspect-[16/10] object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-wide">
              QUALITY CONTROL
            </h3>
            <p className="mt-3 max-w-[55ch] text-neutral-600 leading-7">
              Ray’s Healthy Living products are manufactured with strict adherence to our safety and
              quality standards. We follow a strict practice using modern technology and
              well‑equipped facilities to ensure our products are the highest quality and safety in
              the industry today.
            </p>
          </article>

          <article className="flex flex-col items-center text-center">
            <img
              src="/rays-about-srv-pic5.jpg"
              alt="Customer satisfaction thumbs up"
              className="w-full max-w-[360px] aspect-[16/10] object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-wide">
              SATISFACTION
            </h3>
            <p className="mt-3 max-w-[55ch] text-neutral-600 leading-7">
              Ray’s Healthy Living is committed to providing only the best possible herbal products
              in the market to our customers. Should there be any reason for dissatisfaction with a
              purchase, contact us for a full refund. See our Return Policy section for more
              information.
            </p>
          </article>
        </div>
         <div className="grid gap-10 lg:grid-cols-2 items-center mt-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold leading-tight">
              Ray’s healthy living website
            </h2>
            <span className="mt-3 inline-block h-1.5 w-20 bg-emerald-600 rounded" />
            <div className="mt-6 space-y-4 text-neutral-700 leading-7">
              <p>
                Our website, RaysHealthyLiving.com is our brand arm on the web for our customers
                who prefer doing business with us online. Our website provides convenience to our
                customers by making our entire inventory available for purchase at the most
                affordable prices.
              </p>
              <p>
                RaysHealthyLiving.com offers a wide range of natural organic supplements from the
                most renowned manufacturers in the industry, including our own high‑quality personal
                brand products.
              </p>
              <p>
                Simplicity and ease of use is at the core of our goals for the Ray’s Healthy Living
                website. Our comprehensive Help Center provides a detailed overview of our online
                store and how to make purchases using our intuitive shopping cart (including payment
                options, order process, policies, and FAQs). Please do visit the RaysHealthyLiving.com
                Help Center if you need any guidance in getting the most out of your shopping
                experience.
              </p>
              <p className="italic text-neutral-600">
                Note: Any private information you provide such as credit card information will be
                secured with the utmost confidentiality and secrecy. We use the most reliable and
                secure system for our payment process for our online store to protect your private
                information.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/about-laptop.png"
              alt="Ray’s Healthy Living website on a laptop"
              className="w-full max-w-[720px] h-auto object-contain rounded-xl drop-shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
