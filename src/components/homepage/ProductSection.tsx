// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { ShoppingCart, Star } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// const ProductSection: React.FC = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Moringa Leaf Powder",
//       description:
//         "Bio Nutrition, 100% Organic Moringa Leaf Powder, 300 grams",
//       price: "$20.99",
//       image: "/product/id1.jpg",
//       rating: 5,
//       category: "RAY'S PANTRY",
//     },
//     {
//       id: 2,
//       name: "Bio Nutrition-Activated Charcoal",
//       description:
//         "Bio Nutrition, Activated Charcoal 520mg, Natural Absorbent Agent, Relieves Gas Naturally, Dietary Supplement, 90 Vegetarian Capsules",
//       price: "$13.99",
//       image: "/product/id2.jpg",
//       rating: 5,
//       category: "DETOX, DIGESTIVE SUPPORT",
//     },
//     {
//       id: 3,
//       name: "Bio Nutrition Advanced Berberine",
//       description: "Bio Nutrition, Advanced Berberine 1,200mg, Cardiac Support, Immune Enhancing, Weight Management, Gastrointestinal Support, Dietary Supplement, 50 Vegetarian Capsules",
//       price: "$25.99",
//       image: "/product/id3.jpg",
//       rating: 4.8,
//       category: "BLOOD SUGAR SUPPORT, INSULIN SUPPORT",
//     },
//     {
//       id: 4,
//       name: "Bio Nutrition-Black Seed Tea",
//       description: "Bio Nutrition, Black Seed Tea with Green Tea, Immune Support, Herbal Supplement, Net wt. 1.85 oz (55.5gm.), 30 Tea Bags",
//       price: "$13.99",
//       image: "/product/id4.jpg",
//       rating: 4.9,
//       category: "HERBAL TEAS, RAY'S PANTRY",
//     },
//     {
//       id: 5,
//       name: "Bio Nutrition-Blood Pressure Wellness",
//       description: "Bio Nutrition, Blood Pressure Wellness, Multi Nutrient Formula, 1,404mg, Containing Antioxidants Wholefood Extracts Vitamins, Minerals and Herbs, Maintain Healthy Blood Pressure Levels, Support Heart Health, Promote Vascular Flexibility and Elasticity, Improve Circulation and Blood Flow, 60 Tablets, Dietary Supplement",
//       price: "$24.99",
//       image: "/product/id5.jpg",
//       rating: 4.7,
//       category: "CARDIOVASCULAR SUPPORT, HEART SUPPORT",
//     },
//     {
//       id: 6,
//       name: "Bio Nutrition-Blood Pressure Wellness",
//       description: "Bio Nutrition, Blood Pressure Wellness, Multi Nutrient Formula, 1,404mg, Containing Antioxidants Wholefood Extracts Vitamins, Minerals and Herbs, Maintain Healthy Blood Pressure Levels, Support Heart Health, Promote Vascular Flexibility and Elasticity, Improve Circulation and Blood Flow, 60 Tablets, Dietary Supplement",
//       price: "$16.99",
//       image: "/product/id6.jpg",
//       rating: 4.6,
//       category: "GLANDULAR HEALTH, MEN AND WOMEN'S HEALTH",
//     },
//     {
//       id: 7,
//       name: "Bio Nutrition-Dandelion Root Tea",
//       description: "Bio Nutrition, Dandelion Root Tea, Organic, Liver Support, Herbal Supplement, Net Wt. 2,1 oz (58.8gm.), 30 Tea Bags",
//       price: "$10.99",
//       image: "/product/id7.jpg",
//       rating: 4.8,
//       category: "HERBAL TEAS, RAY'S PANTRY",
//     },
//     {
//       id: 8,
//       name: "Bio Nutrition-Fermented Black Garlic",
//       description: "Bio Nutrition, Fermented Black Garlic (Allium sativum L), 450mg, Naturally Contains Allicin, Immune Health, Dietary Supplement, 60 Vegetarian Capsules",
//       price: "$18.99",
//       image: "/product/id8.jpg",
//       rating: 4.9,
//       category: "A-Z",
//     },
//   ];

//   const promos = [
//     { id: "p1", src: "/hero1.png", alt: "Deal of the Week" },
//     { id: "p2", src: "/hero2.png", alt: "Refer a Friend" },
//     { id: "p3", src: "/hero3.png", alt: "Coins & Coupons" },
//   ];

//   // Framer Motion variants
//   const row: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//     },
//   };

//   const tile: Variants = {
//     hidden: { opacity: 0, y: 24, scale: 0.98 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       y: -6,
//       scale: 1.02,
//       boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
//       transition: { duration: 0.25, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Promo banner row with Framer Motion */}
//         <motion.div
//           className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
//           variants={row}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {promos.map((p) => (
//             <motion.div
//               key={p.id}
//               className="group relative rounded-xl overflow-hidden ring-1 ring-black/5"
//               variants={tile}
//               whileHover="hover"
//             >
//               <div className="aspect-video">
//                 <motion.img
//                   src={p.src}
//                   alt={p.alt}
//                   className="h-full w-full object-cover"
//                   initial={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.06 }}
//                   transition={{ duration: 0.35, ease: "easeOut" }}
//                   onError={(e) => {
//                     (e.currentTarget as HTMLImageElement).src =
//                       "/placeholder-product.jpg";
//                   }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Heading */}
//         <div className="text-center mt-16 mb-12">
//           <h2
//             className="relative inline-block text-5xl font-bold text-gray-900 mb-6
//                after:content-[''] after:block after:h-1 after:w-40 after:bg-green-600
//                after:rounded-full after:mx-auto after:mt-3"
//           >
//             Shop the Product
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover our premium collection of health supplements crafted with
//             the highest quality ingredients for your wellness journey.
//           </p>
//         </div>

//         {/* Products grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               className="group hover-lift border-gray-200 hover:border-primary/20"
//             >
//               <CardContent className="p-4">
//                 <div className="relative mb-4">
//                   <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-full w-full object-cover"
//                       loading="lazy"
//                       onError={(e) => {
//                         (e.currentTarget as HTMLImageElement).src =
//                           "/fallback-product.png";
//                       }}
//                     />
//                   </div>
//                   <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
//                     {product.category}
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs text-gray-600 line-clamp-2">
//                     {product.description}
//                   </p>

//                   <div className="flex items-center space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-3 h-3 ${
//                           i < Math.floor(product.rating)
//                             ? "text-yellow-400 fill-current"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                     <span className="text-xs text-gray-500 ml-1">
//                       ({product.rating})
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-bold text-primary">
//                       {product.price}
//                     </span>
//                   </div>
//                 </div>
//               </CardContent>

//               <CardFooter className="p-4 pt-0">
//                 <Button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground" size="sm">
//                   <ShoppingCart className="w-4 h-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a href="/products">
//             <Button className="bg-orange-500 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-orange-600 font-medium">
//             View All Products
//           </Button></a>
//         </div>
//       </div>
//     </section>

//   );
// };

// export default ProductSection;
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const ProductSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Moringa Leaf Powder",
      description: "Bio Nutrition, 100% Organic Moringa Leaf Powder, 300 grams",
      price: "$20.99",
      image: "/product/id1.jpg",
      rating: 5,
      category: "RAY'S PANTRY",
    },
    {
      id: 2,
      name: "Bio Nutrition-Activated Charcoal",
      description:
        "Bio Nutrition, Activated Charcoal 520mg, Natural Absorbent Agent, Relieves Gas Naturally, Dietary Supplement, 90 Vegetarian Capsules",
      price: "$13.99",
      image: "/product/id2.jpg",
      rating: 5,
      category: "DETOX, DIGESTIVE SUPPORT",
    },
    {
      id: 3,
      name: "Bio Nutrition Advanced Berberine",
      description:
        "Bio Nutrition, Advanced Berberine 1,200mg, Cardiac Support, Immune Enhancing, Weight Management, Gastrointestinal Support, Dietary Supplement, 50 Vegetarian Capsules",
      price: "$25.99",
      image: "/product/id3.jpg",
      rating: 4.8,
      category: "BLOOD SUGAR SUPPORT, INSULIN SUPPORT",
    },
    {
      id: 4,
      name: "Bio Nutrition-Black Seed Tea",
      description:
        "Bio Nutrition, Black Seed Tea with Green Tea, Immune Support, Herbal Supplement, Net wt. 1.85 oz (55.5gm.), 30 Tea Bags",
      price: "$13.99",
      image: "/product/id4.jpg",
      rating: 4.9,
      category: "HERBAL TEAS, RAY'S PANTRY",
    },
    {
      id: 5,
      name: "Bio Nutrition-Blood Pressure Wellness",
      description:
        "Bio Nutrition, Blood Pressure Wellness, Multi Nutrient Formula, 1,404mg, Containing Antioxidants Wholefood Extracts Vitamins, Minerals and Herbs, Maintain Healthy Blood Pressure Levels, Support Heart Health, Promote Vascular Flexibility and Elasticity, Improve Circulation and Blood Flow, 60 Tablets, Dietary Supplement",
      price: "$24.99",
      image: "/product/id5.jpg",
      rating: 4.7,
      category: "CARDIOVASCULAR SUPPORT, HEART SUPPORT",
    },
    {
      id: 6,
      name: "Bio Nutrition-Blood Pressure Wellness",
      description:
        "Bio Nutrition, Blood Pressure Wellness, Multi Nutrient Formula, 1,404mg, Containing Antioxidants Wholefood Extracts Vitamins, Minerals and Herbs, Maintain Healthy Blood Pressure Levels, Support Heart Health, Promote Vascular Flexibility and Elasticity, Improve Circulation and Blood Flow, 60 Tablets, Dietary Supplement",
      price: "$16.99",
      image: "/product/id6.jpg",
      rating: 4.6,
      category: "GLANDULAR HEALTH, MEN AND WOMEN'S HEALTH",
    },
    {
      id: 7,
      name: "Bio Nutrition-Dandelion Root Tea",
      description:
        "Bio Nutrition, Dandelion Root Tea, Organic, Liver Support, Herbal Supplement, Net Wt. 2,1 oz (58.8gm.), 30 Tea Bags",
      price: "$10.99",
      image: "/product/id7.jpg",
      rating: 4.8,
      category: "HERBAL TEAS, RAY'S PANTRY",
    },
    {
      id: 8,
      name: "Bio Nutrition-Fermented Black Garlic",
      description:
        "Bio Nutrition, Fermented Black Garlic (Allium sativum L), 450mg, Naturally Contains Allicin, Immune Health, Dietary Supplement, 60 Vegetarian Capsules",
      price: "$18.99",
      image: "/product/id8.jpg",
      rating: 4.9,
      category: "A-Z",
    },
  ];

  const promos = [
    { id: "p1", src: "/hero1.png", alt: "Deal of the Week" },
    { id: "p2", src: "/hero2.png", alt: "Refer a Friend" },
    { id: "p3", src: "/hero3.png", alt: "Coins & Coupons" },
  ];

  // Shop-by-category tiles (3x3)
  const categories = [
    {
      id: "vitamins-amino",
      name: "Vitamins A–Z & Amino Acids",
      href: "/categories/vitamins-amino",
      image: "/category_1.png",
    },
    {
      id: "herbal-az",
      name: "Herbal Supplement A–Z",
      href: "/categories/herbal-a-z",
      image: "/category_2.png",
    },
    {
      id: "nervous",
      name: "Nervous System",
      href: "/categories/nervous-system",
      image: "/category_3.png",
    },
    {
      id: "liquid-herbs",
      name: "Liquid Herbs A–Z",
      href: "/categories/liquid-herbs-a-z",
      image: "/category_7.png",
    },
    {
      id: "multivitamins",
      name: "Multi‑Vitamins",
      href: "/categories/multi-vitamins",
      image: "/category_4.png",
    },
    {
      id: "minerals",
      name: "Minerals",
      href: "/categories/minerals",
      image: "/category_8.png",
    },
    {
      id: "digestion",
      name: "Digestion & Cleansing",
      href: "/categories/digestion-cleansing",
      image: "/category_5.png",
    },
    {
      id: "men-women",
      name: "Men & Women Health",
      href: "/categories/men-women-health",
      image: "/category_6.png",
    },
    {
      id: "energy",
      name: "Energy & Vitality",
      href: "/categories/energy-vitality",
      image: "/category_9.png",
    },
  ];

  // Framer Motion variants
  const row: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const tile: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Promo banner row */}
        <motion.div
          className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={row}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {promos.map((p) => (
            <motion.div
              key={p.id}
              className="group relative rounded-xl overflow-hidden ring-1 ring-black/5"
              variants={tile}
              whileHover="hover"
            >
              <div className="aspect-video">
                <motion.img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.02 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/placeholder-product.jpg";
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Heading */}
        <div className="text-center mt-16 mb-12">
          <h2
            className="relative inline-block text-5xl font-bold text-gray-900 mb-6
               after:content-[''] after:block after:h-1 after:w-40 after:bg-green-600
               after:rounded-full after:mx-auto after:mt-3"
          >
            Shop the Product
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of health supplements crafted with
            the highest quality ingredients for your wellness journey.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover-lift border-gray-200 hover:border-primary/20"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/fallback-product.png";
                      }}
                    />
                  </div>
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/products">
            <Button className="bg-orange-500 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-orange-600 font-medium">
              View All Products
            </Button>
          </a>
        </div>

        {/* Shop by Category (3×3) */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Shop by Category</h3>
            <p className="mt-2 text-gray-600">
              Explore our most popular categories and find what’s right.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <a
                key={c.id}
                href={c.href}
                className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 hover:shadow-lg transition"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder-product.jpg";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-semibold drop-shadow">
                    {c.name}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/products">
            <Button className="bg-orange-500 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-orange-600 font-medium">
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
