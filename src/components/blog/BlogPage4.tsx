import React from "react";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
type BlogItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
};

const heroImg =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1920&auto=format&fit=crop";

// Replace with your real data for page 2
const blogs: BlogItem[] = [
  {
    id: "p2-b1",
    title: "Seasonal Wellness: Transition Into Fall",
    excerpt:
      "Support immunity and mood with gentle changes in diet, sunlight exposure, and targeted botanicals.",
    date: "Nov 20, 2019",
    category: "Healthy Living",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/seasonal-wellness-fall",
  },
  {
    id: "p2-b2",
    title: "Adaptogens: Calm Energy Without The Crash",
    excerpt:
      "Learn how adaptogenic herbs help the body respond to stress while supporting steady daytime energy.",
    date: "Nov 18, 2019",
    category: "Stress Relief",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/adaptogens-calm-energy",
  },
  {
    id: "p2-b3",
    title: "Magnesium Forms Compared",
    excerpt:
      "Glycinate, citrate, malate—what’s the difference and which form best fits different goals?",
    date: "Nov 16, 2019",
    category: "Minerals",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/magnesium-forms",
  },
  {
    id: "p2-b4",
    title: "Kids Immune Habits For School Season",
    excerpt:
      "Practical routines that help children stay resilient during the busy school months.",
    date: "Nov 15, 2019",
    category: "Children's Health",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/kids-immune-habits",
  },
  {
    id: "p2-b5",
    title: "Herbal Teas For Digestion",
    excerpt:
      "Soothing blends that support comfort after meals and overall digestive balance.",
    date: "Nov 13, 2019",
    category: "Digestive Health",
    image:
      "https://images.unsplash.com/photo-1543357480-c60d66a5c9d3?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/herbal-teas-digestion",
  },
  {
    id: "p2-b6",
    title: "Vitamin C Beyond Immunity",
    excerpt:
      "Collagen, antioxidant support, and recovery—why vitamin C plays many roles.",
    date: "Nov 12, 2019",
    category: "Vitamins",
    image:
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/vitamin-c-roles",
  },
  {
    id: "p2-b7",
    title: "Daily Movement: A Simple Blueprint",
    excerpt:
      "Gentle, achievable activity targets that stack the health benefits without burnout.",
    date: "Nov 11, 2019",
    category: "Energy",
    image:
      "https://images.unsplash.com/photo-1514511547904-70d83b8ae2d1?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/daily-movement-blueprint",
  },
  {
    id: "p2-b8",
    title: "Essential Oils: Safety First",
    excerpt:
      "Key dilution, storage, and usage tips for home aromatherapy with confidence.",
    date: "Nov 10, 2019",
    category: "Aroma Therapy",
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/essential-oils-safety",
  },
  {
    id: "p2-b9",
    title: "Protein Powders: Picking What Fits",
    excerpt:
      "Whey, pea, blends—how to choose based on taste, goals, and tolerability.",
    date: "Nov 9, 2019",
    category: "Super Food",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    href: "/blog/picking-protein-powders",
  },
];

const BlogPage4: React.FC = () => {
  const currentPage = 2;
  const pages = [1, 2, 3, 4, 5] as const;

  
    
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-900">
        {/* Hero with overlay; left aligned, vertically centered */}
        <div
          className="relative min-h-[240px] md:min-h-[300px] bg-center bg-cover flex items-center"
          style={{ backgroundImage: `url('${heroImg}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-orange-400/20" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative w-full max-w-[1200px] mx-auto px-6">
            <h1 className="text-white text-left font-bold text-[clamp(32px,5vw,64px)] drop-shadow-md">
              Blog
            </h1>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (
              <article
                key={b.id}
                className="group rounded-md overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <a href={b.href} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span>{b.date}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-medium">{b.category}</span>
                  </div>
                  <a href={b.href} className="mt-2 block">
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-orange-600 transition-colors">
                      {b.title}
                    </h3>
                  </a>
                  <p className="mt-2 text-sm text-neutral-700 leading-6">{b.excerpt}</p>
                  <a
                    href={b.href}
                    className="mt-4 inline-flex items-center gap-1 text-orange-600 font-semibold"
                  >
                    READ MORE »
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-2">
            <a
                href="/blogpage3"
                className="ml-2 inline-flex h-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium text-emerald-700 hover:bg-emerald-700 hover:text-white"
                >« Previous</a>
          <a
            href="/blog"
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300  bg-white px-3 text-sm font-medium hover:bg-orange-300"
          >
            1
          </a>
          <a
            href="/blogpage2"
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium hover:bg-orange-300"
          >
            2
          </a>
          <a
            href="/blogpage3"
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium hover:bg-orange-300"
          >
            3
          </a>
          <a
            href="/blogpage4"
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300 bg-orange-500 px-3 text-sm font-medium hover:bg-orange-600"
          >
            4
          </a>
          <a
            href="/blogpage5"
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium hover:bg-orange-300"
          >
            5
          </a>
          <a
            href="/blogpage5"
            className="ml-2 inline-flex h-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium text-emerald-700 hover:bg-emerald-700 hover:text-white"
          >
            Next »
          </a>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage4;