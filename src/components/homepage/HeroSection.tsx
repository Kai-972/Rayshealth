import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: {
    y: -6,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1559239115-ce3eb7cb87ea?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            className="space-y-6 lg:translate-x-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="space-y-2" variants={fadeUp}>
              <p className="text-green-600 font-semibold">Made in USA - Top Brand</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Ray&apos;s Healthy Living
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-xl"
              variants={fadeUp}
            >
              The Colloidal Silver Plus drops are great for immediate strengthening of the immune system.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-br-[20px] rounded-tl-[20px]"
                >
                  SHOP NOW
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-br-[20px] rounded-tl-[20px]"
                >
                  ABOUT US
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Product */}
          <div className="relative flex justify-center lg:justify-end -translate-x-32">
            <motion.div
              className="relative z-10 lg:-translate-x-32"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.img
                src="/img1.png"
                alt="Premium Health Supplements - Colloidal Silver Plus and Wellness Products"
                className="w-72 h-auto object-contain drop-shadow-2xl lg:w-[22rem]"
                variants={imageReveal}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true, amount: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
