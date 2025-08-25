import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
  Recycle,
  LifeBuoy
} from "lucide-react";

type LinkItem = { label: string; href: string };

const features = [
  { icon: Truck, title: "FREE SHIPPING", desc: "Free On Order Over $99" },
  { icon: Recycle, title: "GUARANTEE", desc: "30 Days Money Back" },
  { icon: CreditCard, title: "SAFE PAYMENT", desc: "Safe your online payment" },
  { icon: LifeBuoy, title: "ONLINE SUPPORT", desc: "We Have Support 24/7" },
];

const quickLinks: LinkItem[] = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Condition of Use", href: "/terms" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Private Notice", href: "/privacy" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Delivery Policy", href: "/delivery-policy" },
  { label: "Our Testimonial", href: "/testimonials" },
  { label: "Commenting Policy", href: "/commenting-policy" },
  { label: "FAQ", href: "/faq" },
  { label: "My Story", href: "/my-story" },
];

const productLinks: LinkItem[] = [
  { label: "Feature Brands", href: "/brands" },
  { label: "Immune System Support", href: "/immune-support" },
  { label: "Herbs", href: "/herbs" },
  { label: "Vitamins", href: "/vitamins" },
  { label: "Minerals", href: "/minerals" },
  { label: "Aroma Therapy", href: "/aroma-therapy" },
  { label: "Super Food", href: "/superfood" },
  { label: "Children's Health", href: "/children-health" },
  { label: "Essential Oil", href: "/essential-oil" },
  { label: "Others", href: "/others" },
];

const Footer: React.FC = () => {
  // Pre-render lists (avoids inline map noise)
  const quickList = quickLinks.map(({ label, href }) => (
    <li key={label}>
      <a className="hover:text-orange-600 transition-colors" href={href}>
        {label}
      </a>
    </li>
  ));

  const productList = productLinks.map(({ label, href }) => (
    <li key={label}>
      <a className="hover:text-orange-600 transition-colors" href={href}>
        {label}
      </a>
    </li>
  ));

  return (
    <footer className="bg-white text-neutral-800">
      {/* Top feature bar with vertical dividers and dual accent */}
      <div className="border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={[
                "flex items-center gap-4 px-6 py-4",
                "relative",
                i !== features.length - 1
                  ? "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-10 md:after:w-px md:after:bg-neutral-200"
                  : "",
              ].join(" ")}
            >
              <div className="shrink-0 rounded-md p-3 text-orange-600">
                <Icon className="h-10 w-10" />
              </div>
              <div>
                <div className="font-bold tracking-wide  text-emerald-700">
                  {title}
                </div>
                <div className="text-sm text-neutral-600">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h4 className="text-xl font-bold text-black">About Us</h4>
          <span className="mt-2 mb-4 block h-1 w-12 rounded bg-emerald-600" />
          <p className="text-sm text-neutral-700 leading-6">
            Use of Ray’s Healthy Living (RHL) products and results may vary with
            each individual. Vitamins, herbs, supplements, minerals, home grown
            formulas, and alternative health products on this site have not been
            assessed by the U.S. Food and Drug Administration (FDA). Read More
          </p>

          {/* Social icons */}
          <div className="mt-4 flex items-center gap-3">
            <a
              aria-label="Facebook"
              href="https://facebook.com"
              className="rounded-full p-2 bg-neutral-100 hover:bg-orange-50 text-neutral-700 hover:text-orange-600 transition"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com"
              className="rounded-full p-2 bg-neutral-100 hover:bg-orange-50 text-neutral-700 hover:text-orange-600 transition"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              className="rounded-full p-2 bg-neutral-100 hover:bg-orange-50 text-neutral-700 hover:text-orange-600 transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          {/* Payment methods */}
          <div className="mt-8">
            <h5 className="text-base font-semibold mb-3 text-emerald-800">
              Payment Methods
            </h5>
            <div className="flex items-center gap-3">
              {/* Place these images in public/assets/ */}
              <img
                src="/payment-options-pic.jpg"
                alt="Mastercard"
                className="h-7 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-black">Quick Links</h4>
          <span className="mt-2 mb-4 block h-1 w-12 rounded bg-emerald-600" />
          <ul className="space-y-2 text-sm">{quickList}</ul>
        </div>

        {/* Our Products */}
        <div>
          <h4 className="text-xl font-bold text-black">Our Products</h4>
          <span className="mt-2 mb-4 block h-1 w-12 rounded bg-emerald-600" />
          <ul className="space-y-2 text-sm">{productList}</ul>
        </div>

        {/* Contact Details + App Badges */}
        <div>
          <h4 className="text-xl font-bold text-black">
            Contact Details
          </h4>
          <span className="mt-2 mb-4 block h-1 w-12 rounded bg-emerald-600" />
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-orange-600 mt-0.5" />
              <div>
                70 Solomons Island Rd S Prince
                <br />
                Frederick MD 20678, United States
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-orange-600 mt-0.5" />
              <div>
                6121 Marlboro Pike District Heights,
                <br />
                MD 20747
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-orange-600 mt-0.5" />
              <div>4153 Branch Ave, Temple Hills, MD 20748, USA</div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-600" />
              <a href="tel:+14434323295" className="hover:text-orange-600">
                +1(443) 432-3295
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-600" />
              <a
                href="mailto:info@rayshealthyliving.com"
                className="hover:text-orange-600"
              >
                info@rayshealthyliving.com
              </a>
            </div>
          </div>

          {/* App badges */}
          <div className="mt-6">
            <h5 className="text-base font-semibold mb-3 text-emerald-800">
              Get Our App!
            </h5>
            <div className="flex items-center gap-3">
              <img
                src="/appstore-btn.png"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
              <img
                src="/googleplay-btn.png"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div>
            © {new Date().getFullYear()} Ray's Healthy Living. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-orange-600">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-orange-600">
              Terms of Service
            </a>
            <a href="/shipping" className="hover:text-orange-600">
              Shipping Info
            </a>
            <a href="/returns" className="hover:text-orange-600">
              Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
