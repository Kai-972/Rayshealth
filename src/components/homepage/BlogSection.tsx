
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Calendar, User, ArrowRight } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// /* Framer Motion variants */
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const panelReveal: Variants = {
//   hidden: { opacity: 0, y: 24, scale: 0.98 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const underlineGrow: Variants = {
//   hidden: { scaleX: 0, opacity: 0 },
//   show: {
//     scaleX: 1,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
//   },
// };

// const blogRow: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.12, delayChildren: 0.15 },
//   },
// };

// const blogCard: Variants = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   hover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
// };

// /* =========================
//    Ethical Sourcing Section
//    ========================= */
// const EthicalSourcingSection = () => {
//   return (
//     <section
//       className="relative w-full overflow-hidden"
//       aria-labelledby="ethical-sourcing-heading"
//     >
//       {/* Background image */}
//       <div
//         className="absolute inset-0 -z-10 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0)",
//         }}
//       />
//       {/* Subtle overlay for readability */}
//       <div className="absolute inset-0 -z-10 bg-black/30" />

//       {/* Constrain height responsively */}
//       <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[720px] flex items-center">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-5xl">
//             {/* Translucent content card with motion */}
//             <motion.div
//               className="bg-black/50 backdrop-blur-sm rounded-md ring-1 ring-white/10 p-6 sm:p-8 md:p-10 border border-orange-500/50"
//               variants={panelReveal}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.4 }}
//             >
//               <motion.h2
//                 id="ethical-sourcing-heading"
//                 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center"
//                 variants={fadeInUp}
//               >
//                 Organic and Ethical Sourcing
//               </motion.h2>

//               {/* Underline animation */}
//               <div className="mt-4 flex justify-center">
//                 <motion.span
//                   className="block h-1 w-48 bg-white/80 rounded-full origin-left"
//                   variants={underlineGrow}
//                 />
//               </div>

//               {/* Copy */}
//               <motion.p
//                 className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed text-center"
//                 variants={fadeInUp}
//               >
//                 Quality is at the heart of everything we do, which is why
//                 rayshealthy supports certified organic growers and ethical wild
//                 harvesters for our herbs. We do not use threatened botanicals
//                 such as Echinacea, Goldenseal or Ginseng from the wild and our
//                 select group of farmers and wildcrafters share our commitment to
//                 ethical wild harvesting and preserving the environment.
//               </motion.p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* =================
//    Blog Section
//    ================= */
// const BlogSection = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Ultimate Guide to Colloidal Silver Benefits",
//       excerpt:
//         "Discover the science-backed benefits of colloidal silver and how it can support your immune system naturally.",
//       author: "Dr. Sarah Johnson",
//       date: "March 15, 2024",
//       category: "Health Tips",
//       image: "/https://images.unsplash.com/photo-1707079917481-b0d32393008b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 2,
//       title: "Natural Stress Relief: Herbal Solutions That Work",
//       excerpt:
//         "Explore proven herbal remedies for managing stress and anxiety in today's fast-paced world.",
//       author: "Ray Wilson",
//       date: "March 12, 2024",
//       category: "Wellness",
//       image: "/placeholder-blog2.jpg",
//     },
//     {
//       id: 3,
//       title: "Building Immunity: A Comprehensive Approach",
//       excerpt:
//         "Learn about holistic strategies to strengthen your immune system through nutrition and supplements.",
//       author: "Dr. Maria Rodriguez",
//       date: "March 8, 2024",
//       category: "Immunity",
//       image: "/placeholder-blog3.jpg",
//     },
//   ];

//   return (
//     <section className="py-16 bg-[#f2fee5]">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-gray-900 mb-3">
//             Our Latest Blog
//           </h2>

//           {/* Green underline under the heading */}
//           <div className="flex justify-center">
//             <span className="block h-1 w-40 md:w-56 bg-green-600 rounded-full" />
//           </div>

//           <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//             Stay informed with the latest research, tips, and insights from our
//             health experts to optimize your wellness journey.
//           </p>
//         </div>

//         {/* Grid with staggered entrance */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={blogRow}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//         >
//           {blogPosts.map((post) => (
//             <motion.div
//               key={post.id}
//               variants={blogCard}
//               whileHover="hover"
//               className="group"
//             >
//               <Card className="hover-lift border-gray-200 hover:border-primary/20 overflow-hidden">
//                 {/* Image/Category placeholder area */}
//                 <div className="relative">
//                   <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
//                     <motion.div
//                       className="text-center"
//                       initial={{ scale: 0.96, opacity: 0 }}
//                       whileInView={{ scale: 1, opacity: 1 }}
//                       viewport={{ once: true, amount: 0.4 }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                     >
//                       <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
//                         <span className="text-2xl" role="img" aria-label="book">
//                           <img src={post.image} alt="" />
//                         </span>
//                       </div>
//                       <span className="text-sm font-medium text-gray-700">
//                         {post.category}
//                       </span>
//                     </motion.div>
//                   </div>
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <CardContent className="p-6">
//                   <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
//                     {post.excerpt}
//                   </p>

//                   <div className="flex items-center justify-between text-xs text-gray-500">
//                     <div className="flex items-center space-x-1">
//                       <User className="w-3 h-3" />
//                       <span>{post.author}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Calendar className="w-3 h-3" />
//                       <span>{post.date}</span>
//                     </div>
//                   </div>
//                 </CardContent>

//                 {/* Footer CTA with subtle hover motion */}
//                 <CardFooter className="px-6 pb-6">
//                   <motion.div whileHover={{ x: 2 }}>
//                     <Button
//                       variant="ghost"
//                       className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
//                     >
//                       Read More
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </motion.div>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View all */}
//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg" className="px-8">
//             View All Articles
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };
// const QualityIngredientsSection = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#e78722]">
//       {/* Subtle background overlay pattern (optional) */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-10 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1655313719617-ad4db58df0f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//       />

//       <div className="relative container mx-auto px-4 py-16 md:py-20 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Left: Text content */}
//           <div className="text-white max-w-2xl">
//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//               Quality Ingredients
//             </h2>

//             {/* Underline */}
//             <div className="mt-4 h-1 w-24 bg-white/90 rounded-full" />

//             <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
//               Our herbs are naturally GMO free and have never been fumigated or
//               irradiated. We purchase whole plants whenever possible and grind
//               them in-house. We use the most effective extraction techniques and
//               test 100% of our ingredients and products. Our clinical herbalist
//               develops intelligent formulas with maximum efficacy, potency, and
//               stability.
//             </p>

//             <div className="mt-8">
//               <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md">
//                 SHOP PRODUCTS
//               </Button>
//             </div>
//           </div>

//           {/* Right: Plain image (no rings/badges) */}
//           <div className="flex justify-center lg:justify-end -translate-x-16">
//             <img
//               src="/or1.png"
//               alt="High-quality natural ingredients"
//               className="w-[] max-w-full h-auto object-contain"
//               loading="eager"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };const HomeContent = () => {
//   return (
//     <>
//       <EthicalSourcingSection />
//       <BlogSection />
//       <QualityIngredientsSection />
//     </>
//   );
// };

// export default HomeContent;
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* Framer Motion variants */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const panelReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const underlineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
  },
};

const blogRow: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const blogCard: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

/* =========================
   Ethical Sourcing Section
   ========================= */
const EthicalSourcingSection = () => {
  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="ethical-sourcing-heading">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1600&auto=format&fit=crop)",
        }}
      />
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* Constrain height responsively */}
      <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[720px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Translucent content card with motion */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm rounded-md ring-1 ring-white/10 p-6 sm:p-8 md:p-10 border border-orange-500/50"
              variants={panelReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.h2
                id="ethical-sourcing-heading"
                className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center"
                variants={fadeInUp}
              >
                Organic and Ethical Sourcing
              </motion.h2>

              {/* Underline animation */}
              <div className="mt-4 flex justify-center">
                <motion.span
                  className="block h-1 w-48 bg-white/80 rounded-full origin-left"
                  variants={underlineGrow}
                />
              </div>

              {/* Copy */}
              <motion.p
                className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed text-center"
                variants={fadeInUp}
              >
                Quality is at the heart of everything we do, which is why
                rayshealthy supports certified organic growers and ethical wild
                harvesters for our herbs. We do not use threatened botanicals
                such as Echinacea, Goldenseal or Ginseng from the wild and our
                select group of farmers and wildcrafters share our commitment to
                ethical wild harvesting and preserving the environment.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =================
   Blog Section
   ================= */
const BlogSection = () => {
  // All images below are direct Unsplash CDN links with proper parameters; they should load visibly.
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Natural Cardiovascular Wellness: Beyond Supplements",
      excerpt:
        "Discover the science-backed benefits of colloidal silver and how it can support your immune system naturally.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Health Tips",
      image:
        "/blog/b1.png",
      alt: "Dropper bottle with silver-toned liquid and clean background",
    },
    {
      id: 2,
      title: "Unlocking the Hidden Benefits of Superfoods for Heart Health",
      excerpt:
        "Explore proven herbal remedies for managing stress and anxiety in today's fast-paced world.",
      author: "Ray Wilson",
      date: "March 12, 2024",
      category: "Wellness",
      image:
        "/blog/b2.png",
      alt: "Herbal tea and calming botanical arrangement for stress relief",
    },
    {
      id: 3,
      title: "10 Astonishing Vitamin E Supplement Benefits",
      excerpt:
        "Learn about holistic strategies to strengthen your immune system through nutrition and supplements.",
      author: "Dr. Maria Rodriguez",
      date: "March 8, 2024",
      category: "Immunity",
      image:
        "/blog/b3.jpg",
      alt: "Assorted fresh vegetables and ingredients for immune health",
    },
  ];

  return (
    <section className="py-16 bg-[#f2fee5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Our Latest Blog</h2>

          {/* Green underline under the heading */}
          <div className="flex justify-center">
            <span className="block h-1 w-40 md:w-56 bg-green-600 rounded-full" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Stay informed with the latest research, tips, and insights from our
            health experts to optimize your wellness journey.
          </p>
        </div>

        {/* Grid with staggered entrance */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={blogRow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={blogCard} whileHover="hover" className="group">
              <Card className="hover-lift border-gray-200 hover:border-primary/20 overflow-hidden">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-video bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>

                {/* Footer CTA */}
                <CardFooter className="px-6 pb-6">
                  <motion.div whileHover={{ x: 2 }}>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

const QualityIngredientsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#e78722]">
      {/* Subtle background overlay pattern (optional) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1655313719617-ad4db58df0f7?q=80&w=1170&auto=format&fit=crop')",
        }}
      />

      <div className="relative container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Quality Ingredients
            </h2>

            {/* Underline */}
            <div className="mt-4 h-1 w-24 bg-white/90 rounded-full" />

            <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
              Our herbs are naturally GMO free and have never been fumigated or
              irradiated. We purchase whole plants whenever possible and grind
              them in-house. We use the most effective extraction techniques and
              test 100% of our ingredients and products. Our clinical herbalist
              develops intelligent formulas with maximum efficacy, potency, and
              stability.
            </p>

            <div className="mt-8">
              <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md">
                SHOP PRODUCTS
              </Button>
            </div>
          </div>

          {/* Right: Plain image */}
          <div className="flex justify-center lg:justify-end -translate-x-16">
            <img
              src="/or1.png"
              alt="High-quality natural ingredients"
              className="max-w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeContent = () => {
  return (
    <>
      <EthicalSourcingSection />
      <BlogSection />
      <QualityIngredientsSection />
    </>
  );
};

export default HomeContent;
