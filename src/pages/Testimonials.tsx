import { motion } from "framer-motion";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import bannerImg from "/bg-testimonials.jpg";

const testimonialsLeft = [
  {
    text: `I took a 30 day vacation from June 30 to July 30. I drove over 3400 miles. The last 3 days of the trip, I was anxious to get home and drove too many hours without a rest stop.

I believe it caused a blood clot in my right lung. I did not go to a doctor so I’m only guessing. All I know is I felt puny for the first week I was home.

At 2:30 am on Sunday, August 5th, I woke up with severe pain in my right lung. If it had been on my left side I would have thought it was a heart attack.

I looked up my symptoms on the ‘Net and determined it was a blood clot. So I started drinking about 6 ozs of Maximum Cardio every 2 hours. On the 4th glass the pain went away completely. My blood pressure was 191 over 90 before I started with Maximum Cardio. After the 4th glass, my blood pressure was 128 over 75.

I believe Maximum Cardio probably saved my life. I know for sure it save me a trip to the ER and possible hospitalization.

I turned 79 this year (2018). I take no prescription drugs, no over the counter drugs. I have none of the health problems of men half my age. I’m a firm believer in Maximum Cardio.`,
    author: "Elisa Brahom"
  }
];

const testimonialsRight = [
  {
    text: "Ray’s essential oils turned out to be awesome. It has an extraordinary effect on boosting brain functions along with dealing with pains reliefs and aches. This essential oils are now essential in my life.",
    author: "Elisa Brahom"
  },
  {
    text: "Fount de life is just amazing. Thanks to Rayman’s healthy Living. You guys rock!",
    author: "David Kingson"
  },
  {
    text: "I am hugely benefitted by the effects of Maximum cardio 4U. What a useful product! Helps me incredibly in boosting my immunity and keeping cardiac actions smooth. Oh yes! Lovely flavours too.",
    author: "Henry E. Welling"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-orange-100">
      <Header />
       <div
        className="w-full h-[180px] md:h-[220px] opacity-90 flex items-center justify-start"
        style={{
          background: `url(${bannerImg}) center center / cover no-repeat`,
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-start px-6">
          <h1 className="text-white font-bold text-3xl md:text-4xl drop-shadow-lg">
            Testimonials
          </h1>
        </div>
      </div>
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-14">
          {/* Left: Large blockquote */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white rounded-md shadow-md px-8 py-10 flex flex-col justify-center min-h-[560px]"
          >
            {/* Open quotation mark */}
            <span className="absolute -left-10 -top-12 text-[8rem] leading-none text-orange-100 select-none pointer-events-none z-0">
              &ldquo;
            </span>
            <span className="relative z-10 block whitespace-pre-line text-center md:text-left text-[1.16rem] text-gray-800 leading-relaxed font-serif mb-7">
              {testimonialsLeft[0].text}
            </span>
            <span className="relative z-10 block text-center md:text-left font-bold text-[1.13rem] text-gray-900 mt-6">
              {testimonialsLeft[0].author}
            </span>
            {/* Close quotation mark */}
            <span className="absolute -right-8 -bottom-2 text-[5.1rem] leading-none text-orange-100 select-none pointer-events-none z-0">
              &rdquo;
            </span>
          </motion.div>

          {/* Right: Vertical stacked small testimonials */}
          <div className="flex flex-col gap-12 pt-8 md:pt-0">
            {testimonialsRight.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 * idx }}
                className="relative bg-white rounded-md shadow px-5 py-8"
              >
                {/* Open quotation mark */}
                <span className="absolute -left-7 -top-10 text-[4rem] leading-none text-orange-200 select-none pointer-events-none z-0">
                  &ldquo;
                </span>
                <span className="relative z-10 block whitespace-pre-line text-center md:text-left text-base text-gray-800 leading-relaxed mb-6 font-serif">
                  {item.text}
                </span>
                <span className="relative z-10 block text-center md:text-left font-bold text-gray-900 text-lg">
                  {item.author}
                </span>
                {/* Close quotation mark */}
                <span className="absolute -right-4 -bottom-3 text-[2.6rem] leading-none text-orange-200 select-none pointer-events-none z-0">
                  &rdquo;
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
