
import React from "react";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";


interface SectionProps {
  title: string;
  subtitle?: string;
  content: string[];
  image: string;
  reverse?: boolean;
}


const Section: React.FC<SectionProps> = ({ title, subtitle, content, image, reverse }) => {
  return (
    <section className="w-full py-16">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image - takes exactly half screen and sticks to edge */}
        <div className="md:w-1/3 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text - centered with padding */}
        <div className="md:w-2/3 w-full flex items-center px-6 md:px-16">
          <div>
            <h2 className="text-4xl text-black font-bold mb-2">{title}</h2>
            <span className="block w-16 h-1 bg-green-600 mt-2"></span>
            <br />
            {subtitle && (
              <h6 className="text-orange-500 font-semibold mb-4">{subtitle}</h6>
            )}
            {content.map((para, idx) => (
              <p key={idx} className="text-gray-700 mb-4 text-[20px] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default function CBDKnowMore() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />



      {/* Main Sections */}
      <main className="flex-grow">
        <Section
          title="Hemp oil benefits"
          subtitle="Hemp Oil is usually referred to oil that are derived from any part of the plant Cannbis Sativa or the oil coming specifically from its seed, that is seed of the Hemp plant."
          content={[
            "According to experts, for a liquid to qualify as Hemp Oil, it must contain 0.3 percent of THC or Tetrahydrocannabinol. THS is the ingredient that is responsible for the “high” that caused by Marijuana.",
            "CBD or Cannabidol Oil and Hemp Oil are not identical. CBD is specifically the oil that is derived from flowers, leaves and stalk of Hemp Plant. Oil derived from these parts are higher in the potential beneficial compound present in the plant.",
            "Hemp Oil on the other hand is obtained exclusively from the seeds of the Hemp Plant. The seeds contain less levels of compound than present in the plant. But this level is just right for humans with their rich bioactive compounds, fatty acids and other nutrients."
        
        ]}
          image="/headercomp/med1-new.png"
          reverse
        />

        <Section
          title="Hemp Oil for Skin Diseases"
          content={[
            "Hemp Oil is rich in fatty acids and vitamins that are ideal nourish skin and keep it healthy. Using this oil helps keep skin radiant by protecting it from oxidation that causes its aging. It is also extremely useful to prevent outbreaks on skin and treat inflammations."]}
          image="/headercomp/med2n.png"
        />

       

        <h2 className="text-2xl font-semibold px-52 text-orange-400">Hemp Oil is rich in fatty acids and vitamins that are ideal nourish skin and keep it healthy. Using this oil helps keep skin radiant by protecting it from oxidation that causes its aging. It is also extremely useful to prevent outbreaks on skin and treat inflammations</h2>
        <br />
        <br />
        <div className="flex items-center justify-center h-1/2 w-1/2 mx-auto">
  <img src="/headercomp/eff.jpg" alt="Centered" />
</div>

<Section
          title="Hemp Oil & Brain Health"
          content={[
            "Fatty acids present in Hemp Oil are known to be good for brain health. It is especially beneficial to those who have undergone brain operation by protecting the brain. Studies conducted have proved that Hemp Oil is effective in protecting the brain against inflammation."
        ]}
          image="/headercomp/med3n.png"
          reverse
        />

         <Section
        title="Hemp Oil and Heart Health"
        content={["Hemp Oil is often termed as a wonder oil having positive effects on several body parts and systems. It works positively on the cardiovascular system helping people with issues like high cholesterol, atherosclerosis and high blood pressure.",
            "Alpha Linolenic acid, a fatty acid that is present in Hemp Oil is proven to reduce risks of cardiovascular diseases. Hemp Oil is ideal for vegetarians as this oil is otherwise found in fish oil."
        ]}
        image="/headercomp/med4n.png"
/>

<Section
title="Hemp Oil & CBD"
content={["The full spectrum of Hemp Oil that includes CBD is often richer in nutrient values. But when the concentration of the Hemp Seeds is high, it offers equivalent goodness that nourishes good health and protects body."]}
image="/headercomp/med5n.png"
reverse
/>

<Section
title="Hemp Oil & Pain Relief"
content={["Hemp Oil is known to be a natural analgesic agent and is especially effective in cases of inflammation. Studies show that Hemp Oil is effective against a range of body aches and pains. Make sure that you buy only high quality and pure Hemp Oil for getting its true analgesic benefits.",
"Most studies on its analgesic effects have been carried out on mice and results on humans are still awaited"

]}
image="/headercomp/med6n.png"
/>

<Section
title="Hemp Oil & Acne Treatment"
content={["Fatty acids in Hemp Oil are effective in treating acne and other inflammatory conditions resulting in acne."]}
image="/headercomp/med7n.png"
reverse
/>

<Section
title="Hemp Oil & Muscle Pain"
content={["Hemp Oil along with CBD is effective in relaxing tense muscles and alleviates stress in them. Its anti-inflammatory properties work on stressed muscles, ease tension in them and help them recover faster. Massaging Hemp Oil on painful and stressed muscles gives a sense of relaxation and brings a feeling of well-being almost instantly."]}
image="/headercomp/med8n.png"
/>

      </main>


      <Footer />
    </div>
  );
}
