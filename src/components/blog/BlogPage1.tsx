import React from "react";

// Replace with your preferred Unsplash URL or local image
const heroImg =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1920&auto=format&fit=crop";

type BlogItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
};

// Demo data for 9 cards (swap with real content)
const blogs: BlogItem[] = [
  {
    id: "b1",
    title: "The Ultimate Guide to Natural Cardiovascular Wellness: Beyond Supplements",
    excerpt:
      "Discover the ultimate guide to natural cardiovascular wellness, combining lifestyle changes, exercise, diet, and supplements for cardiovascular health to improve heart health naturally.",
    date: "Octpber 1, 2024",
    category: "Blog",
    image:
      "/blog/b1.png",
    href: "/the-ultimate-guide-to-natural-cardiovascular-wellness-beyond-supplements/",
  },
  {
    id: "b2",
    title: "Unlocking the Hidden Benefits of Superfoods for Heart Health",
    excerpt:
      "Discover the benefits of superfoods for cardiovascular health by adding pomegranate, chia seeds, and dark chocolate to your diet to support heart health.s",
    date: "September 29, 2024",
    category: "blog",
    image:
      "/blog/b2.png",
    href: "unlocking-the-hidden-benefits-of-superfoods-for-heart-health",
  },
  {
    id: "b3",
    title: "10 Astonishing Vitamin E Supplement Benefits",
    excerpt:
      "Vitamin E refers to a group of eight molecules divided into two categories – tocopherols and tocotrienols. If recent reports are to believed, Vitamin E supplements play a critical role in helping patients overcome body ailments caused due to vitamin E deficiency.",
    date: "December 6, 2019",
    category: "Supplements",
    image:
      "/blog/b3.jpg",
    href: "/10-astonishing-vitamin-e-supplement-benefits/",
  },
  {
    id: "b4",
    title: "Healthy Foods with High Cholesterol: Consume Them in Limited Quantities",
    excerpt:
      "Hectic work schedules, wrong food habits, and sedentary lifestyle take a toll on our health and triggers diabetes, hypertension, and cholesterol. Talking about cholesterol, it is one of the fatal ailments with symptoms like chest pain, heart attack, and stroke.",
    date: "November 14, 2019",
    category: "Healthy Living",
    image:
      "/blog/b4.jpg",
    href: "/healthy-foods-with-high-cholesterol-consume-them-in-limited-quantities/",
  },
  {
    id: "b5",
    title: "A Comprehensive List of 7 Supplements to Improve Circulation",
    excerpt:
      "Poor circulation is one of the most common ailments found in adults in the United States. According to veteran medical practitioners, several reasons result in poor blood circulation in the human body. Peripheral artery disease (PAD), diabetes, obesity, smoking, and Raynaud’s disease are some of the many causes of poor circulation.",
    date: "November 13, 2019",
    category: "Healthy Living",
    image:
      "/blog/b5.jpg",
    href: "/a-comprehensive-list-of-7-supplements-to-improve-circulation/",
  },
  {
    id: "b6",
    title: "Try These 7 Supplements That Are Good for Liver",
    excerpt:
      "Whether it is heart or kidney, lungs or liver, lifestyle choices that we make can have a huge effect on them both positively or negatively. When it comes to liver, sedentary lifestyle, wrong food habits, addiction to alcohol, and consumption of chronic drugs can take a toll on its health.",
    date: "November 11, 2019",
    category: "Healthy Living",
    image:
      "/blog/b6.jpg",
    href: "/try-these-7-supplements-that-are-good-for-liver/",
  },
  {
    id: "b7",
    title: "A Comprehensive Analysis on the Health Benefits of Dietary Supplements",
    excerpt:
      "Dietary supplements are manufactured products that are intended to supplement a diet when taken as a pill, capsule, or tablet, or liquid.",
    date: "November 7, 2019",
    category: "Digestive Health",
    image:
      "/blog/b7.jpg",
    href: "/a-comprehensive-analysis-on-the-health-benefits-of-dietary-supplements/",
  },
  {
    id: "b8",
    title: "6 Amazing Vitamin D Supplement Benefits You Must Be Aware of",
    excerpt:
      "Vitamin D, also known as the ‘Sunshine Vitamin’, is produced by the skin when it comes in contact with Sunlight.",
    date: "November 6, 2019",
    category: " Healthy Living, Vitamin D supplement benefits",
    image:
    "/blog/b8.jpg",  
    href: "/6-amazing-vitamin-d-supplement-benefits-you-must-be-aware-of/",
  },
  {
    id: "b9",
    title: "6 Key Supplements for a Vegan Diet (Updated for 2019)",
    excerpt:
      "A vegan diet is often low in nutrients. Vitamin B-12 – an essential nutrient, is absent in this type of diet and...",
    date: "October 23, 2019",
    category: " Healthy Living, Supplements for a vegan diet",
    image:
      "/blog/b9.jpg",
    href:  "/6-key-supplements-for-a-vegan-diet-updated-for-2019",
  },
];

const BlogPage1: React.FC = () => {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero with overlay; left-aligned, vertically centered “Blog” */}
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

      {/* Blog grid */}
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
            href="/blog"
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300 bg-orange-500 px-3 text-sm font-medium hover:bg-orange-600"
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
            className="inline-flex h-9 min-w-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium hover:bg-orange-300"
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
            href="/blogpage2"
            className="ml-2 inline-flex h-9 items-center justify-center rounded border border-neutral-300 bg-white px-3 text-sm font-medium text-emerald-700 hover:bg-neutral-50"
          >
            Next »
          </a>
        </div>
      </div>
    </main>
  );
};

export default BlogPage1;
