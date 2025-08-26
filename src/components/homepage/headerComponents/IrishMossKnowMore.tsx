
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
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------- NEW: Section2 (kept separate and independent) -------- */
interface Section2Props {
  heading: string;
  points: string[];
  media: string;
  kicker?: string;
  reverse?: boolean;
}

const Section2: React.FC<Section2Props> = ({ heading, points, media, kicker, reverse }) => {
  return (
    <section className="py-16 bg-slate-100">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={media}
            alt={heading}
            className="rounded-2xl shadow-lg max-h-[350px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl text-black font-bold mb-2">{heading}</h2>
          <span className="block w-16 h-1 bg-orange-400 mt-2"></span>
          <br />
          {kicker && (
            <h6 className="text-green-700 font-semibold mb-4">{kicker}</h6>
          )}

          {/* Bullet list (kept) */}
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {points.map((p, i) => (
              <li key={i} className="leading-relaxed">{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------------------------------------- */


export default function IrishMossPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />



      {/* Main Sections */}
      <main className="flex-grow">
        <Section
          title="Irish Moss"
          subtitle="Chondrus Crispus"
          content={[
            "Irish Moss is known to improve Thyroid functions, aid metabolism and boost the overall immune system.",
          ]}
          image="/headercomp/moss1.png"
          reverse
        />

        <Section
          title="Irish Sea Moss"
          subtitle="Is a dried leaf-like form of a northern seaweed, that is, Chondrus Crispus also known as Pearl Moss and Carrageen."
          content={[
            "Grows naturally in abundance in rocky places along the Atlantic coasts of North America and Europe.",
            "As a fresh plant it is soft and cartilaginous ranging from a greenish-yellow to purplish-brown color.",
            "When washed and dried, it takes on a translucent and horn-like form that is yellowish in color.",
            "Irrish Moss is a mucilaginous body by 55% parts, 10% albuminoids and 15% minerals rich in sulphur and iodine. Placed in water, it gives the odor of the sea and forms a heavy jelly when boiled. This jelly is used as a thickener and fining of beer."
          ]}
          image="/headercomp/moss2.png"
        />

        <Section
          title="Can Sea Moss be Eaten Raw?"
          subtitle="Sea Moss is good to be consumed as health drink. It can also be used for gravies, cakes and ice-creams, in shakes and as a thickening agent. As a natural and wholesome item, you can also eat it raw. The Moss is nature’s gift to humankind as an excellent source of minerals."
          content={[
            "At Ray’s we sell only naturally grown Sea Moss. The plants are spread over large areas for natural sun-drying without adding any fertilizers or chemicals. We use only natural sunlight to preserve the goodness of nature coming from the sea shore.",

            "We source all Sea Moss exclusively from the seashore where it is carefully cultivated in natural environments making it completely safe for you to consume it raw or any other form that you prefer."
        ]}
          image="/headercomp/moss3.png"
          reverse
        />

        <Section
          title="Food Additive"
          content={[
        "Raw Sea Moss can be used in food like pudding, smoothies, cream pie or whipped cream and salad dressing. In fact, it helps give any liquid a stable form. Whereas gelatin is an animal-based protein, our Irish Moss is totally a plant derivative. It’s polysaccharide is a natural sugar form when blended in liquid gives the semi-liquid form. Irish Moss is rich in carrageen which is used by the food industry to make items like ice-cream, jelly and more."    
        ]}
          image="/headercomp/moss4.png"
        />

        <Section
          title="Health Food"
          content={[
            "Irish Moss or Sea Moss is a powerhouse nutrients yielding abundant goodness to health. It acts as a soothing aid to the stomach providing relief from heartburn, dyspepsia and gastritis. It works wonders for conditions like indigestion and constipation and helps heal peptic and duodenal ulcer. Natural Irish Moss is also a repertoire of antiviral and antibacterial activities and helps sooth skin conditions like sun burns, chapped skin, dermatitis, eczema and psoriasis."]}
          image="/headercomp/moss5.png"
          reverse
        />

        <Section
            title="Minerals & Vitamins"
            content={[
                "Tasteless when eaten raw, Irish Moss is a loaded with natural minerals essential for a healthy human body. It is a rare plant that has sulphur amino acids, compounds that are restricted to animal protein only. Other minerals present are iodine, calcium, magnesium, iron, phosphorous, potassium manganese, zinc and selenium. It also contains, beta-carotene, vitamins, B and C."
            ]}
            image="/headercomp/moss6.png"
            ></Section>

        <Section
          title="Healthy Natural Supplement"
          content={[
            "Irish Sea Moss has long been used as a supplement that abates and fights symptoms of flu and cold. Being rich in a host of essential minerals like zinc, potassium, magnesium, manganese and iron, apart from Vitamins B and C, it boosts body immunity. The seaweed is invaluable with its natural chemical composition that contains potassium chloride. This compound is a vital element that augments dissolving catarrhs responsible for chest congestions.",
            "Sea Moss is thus a natural cold relief provider and a safe solution that people across the globe prefer to use over conventional over-the-counter cold and cough remedies. The weed is also known to be effective in other lungs conditions like pneumonia and tuberculosis acting as an anti-inflammatory and demulcent agent."
        ]}
          image="/headercomp/moss7.png"
          reverse
        />
        <Section
          title="Fights Infections"
          content={[
            "Apart from boosting the body’s natural immune system and acting as a remedy to cold, cough and flu, Irish Moss is also a strong antiviral and antimicrobial agent.",
            "It is extremely effective in fighting a wide range of infections that are known to plague the body. Sea Moss is known to alleviate conditions like bronchitis and pneumonia apart from sore throat arising out of bacterial and viral infections.",
            "One of the main uses of Irish Moss is as a potent treatment to heal thyroid related problems. The Moss contains a significant amount of Iodine which is extremely important for optimal functioning of the thyroid gland. Iodine in the Moss stimulates the thyroid gland to its optimal level thus helping the body fight against a host of diseases.",
            "AGerms tend to thrive on external surface areas with rich blood supply. As the blood circulates through the body, it passes through the thyroid gland where iodine and its antimicrobial properties cleanse it of the germs, killing weak ones and weakening the others.",
            "Iodine present in Sea Moss also helps relieve stress and tension and promotes a general sense of well-being physically and mentally."
          ]}
          image="/headercomp/moss8.png"
        />
        <Section
          title="Why is it called Irish Sea Moss?"
          content={[
            "The 1800s saw a great potato famine when people began to eat the naturally occurring purpelish algae out of hunger. It became a food on which people began to survive and the name derived."]}
          image="/headercomp/moss9.png"
          reverse
        />
        <div className="bg-slate-100"><br /> <br /> <h1 className="justify-center flex text-5xl text-orange-400 font-bold">Top Benefits of Irish Sea Moss</h1>
        <span className="mx-auto mt-3 block h-1 w-40 bg-green-600"></span></div>
       
        {/* NEW USAGE: Section2 after the existing sections */}
        <Section2
          kicker="Additional Info"
          heading="1. Improves Thyroid Function"
          points={[
            "Studies have shown that Irish Moss is a potent Thyroid Function Stimulator. It enhances TSH or Thyroid Stimulating Hormone that is released from the Pitutary. TSH is extremely important as it acts on the Thyroid Gland directly and affects the synthesis and release of other thyroid hormones. Sea Moss can thus play an effective role in managing a range of thyroid related conditions.",
            "This weed is also rich in selenium and iodine, both of which play critical roles in synthesis of Thyroid Hormones. These elements are precursors that stimulate and release TSH."
          ]}
          media="/headercomp/ben1.jpg"
          
        />

        <Section2
            heading="2. Manages Joint Pain"
            points={[
            "Sea Moss is a rich repertoire of anti-inflammatory agents and has antibacterial properties too. As such they are very effective in treating joint pains. The Moss contains natural potassium bromide and potassium iodide that calm the nerves in the joints and provide relief from pain."    
            ]}
            media="/headercomp/ben2.jpg"
           reverse
            />

        <Section2
          heading="3. Ups Metabolism"
          points={[
            "Thyroid regulating hormones are the key metabolism regulators of the body. Irish Sea Moss is known to stimulate thyroid function and as a result boost body metabolism. The iodine content of the weed triggers thyroid hormone production and boosts thyroid gland functioning that in turn have a direct bearing on body metabolism.",
            "Moreover, the purpleish red algae have a high iron content which is important for oxygen transportation in the body. The iron helps meet the body’s need of iron and effectively transports oxygen to the tissues and muscles through the body and naturally ups metabolism. This apart, iron is also known to enhance digestive mechanism by activating certain enzymes in the digestive system."
          ]}
            media="/headercomp/ben3.jpg"
            />
        <Section2
            heading="4. Boost Immune System"
            points={[
                "Irish Moss is rich in Bioactive compounds having antimicrobial and antiviral effects. Sulfated Polysaccharides are among the most important of such compounds present in Irish Moss that positively trigger the immune system.",
            "The weed influences gene-related immune response, immunity that is cell mediated and humoral immunity. Being rich in Iron increases hemoglobin count in cells across the body and eases oxygen supply to cells and tissues. It also helps increase defensin and lysozyme counts that act as a physiological barrier against infections."
         ]}
            media="/headercomp/ben4.jpg"
            reverse
            />
        <Section2
            heading="5. Improves Heart Health"
            points={[
                "Hear-related issues mostly arise from poor blood flow in the cardiovascular system. The high iron content of Irish Moss improves body iron content and smoothens oxygen supply reducing chances of Angina. Antioxidants present in it reduces oxidative destruction of cells and tissues by free body radicals.",
            ]}
            media="/headercomp/ben5.jpg"
            />
        <Section2
            heading="Helps in Weight Management"
            points={[
               "Eating Sea Moss gives the body required nutrients and at the same time it helps reduce appetite. The result is reduced food intake without suffering any ill effects of low food intake."
            ]}
            media="/headercomp/ben6.jpg"
            reverse
            />
        
        <Section2
        heading="7. Healthy Diet"
        points={[
            "The human body needs 102 essential minerals and Irish Sea Weed contains 92 of them. Taurine, the sulphur-containing amino acid absent in other plants is found in these algae. It is an excellent source of this mineral for vegetarians who are usually deficient on this mineral.",
            "Irish Moss is a rich repertoire of Vitamins B and C, proteins and fibres, sulphur and Beta-Carotene becoming a complete nutrition in itself.",
            "This nutrient-rich Moss is a great food supplement to everyone, especially those suffering from a host of illnesses related to mineral deficiencies. There was a time when people survived only on Irish Sea Moss during famine and yet they were healthy. Natural Sea Moss continues to be one of the best nutrient-rich options to maintain good physical and mental health."
        ]}
        media="/headercomp/ben7.jpg"
        />

        <Section2
        heading="8. Improves Overall Mental Health"
        points={[
            "Given the dense quantity of potassium present in Irish Moss, it plays a significant role in providing the body with overall mental health.",
        "Studies conducted have shown that children with ADHD or Hyperactivity disorders when given Irish Moss have shown significant improvements in their behavior. This apart, this seaweed has brought about remarkable relief in people with mental health conditions like agitation, anxiety, bad moods and depression."
    ]}
        media="/headercomp/ben8.jpg"
        reverse
        />

        <Section2
        heading="9. Natural Decongestant"
        points={[
            "High percentage of potassium chloride in Irish Sea Moss makes it extremely effective in treating conditions like cough and congestion arising out of it. Potassium chloride helps break down the mucus on the membrane and stop irritation to it. The seaweed can help people suffering from cold and flu, pneumonia and sinusitis decongest mucus in their body parts."
        ]}
        media="/headercomp/ben9.jpg"
        />

        <Section2
        heading="10. Strengthens Digestive System"
        points={[
            "Fiber-rich foods are ideal for the gut system and Irish Sea Moss is an ideal candidate for it! The seaweed works in the stomach as a mild laxative and also manages inflammatory disorders of the gut like gastritis, heartburn, nausea and indigestion. It helps both stimulate and sooth the digestive system."
        ]}
        media="/headercomp/ben10.jpg"
        reverse
        />

        <Section2
        heading="11. Improves Sexual Health"
        points={["Minerals such as zinc are crucial for maintain a healthy sexual life and good reproductive system. Sea Moss red algae with its high content of zinc and a host of other minerals help doing just that by removing dryness in females and improving libido."]}
        media="/headercomp/ben11.jpg"
        />
        
        <Section
            title="Using Irish Moss as Supplement"
            content={[
                "A lot of people do enjoy the goodness of Irish Sea Moss by just adding it to their salads or smoothies, but there are others that don’t like its sea-like smell. Most people prefer to take in the goodness of Sea Moss in the form of supplements.",
            "The powdered form of dried Sea Moss is available as capsules or as tinctures. Organic Irish Moss tincture is one such that is easy to take in any way you prefer.",
        "It’s advisable to read manufacturer’s instructions carefully before using any form of Irish Sea Moss supplement."]}
            image="/headercomp/moss10.png"
            reverse
            />

        <Section
        title="Irish Sea Moss & Bladderwrack Give Best Effects"
        content={[
            "Bladderwrack, like Irish Sea Moss is another seaweed and is known for its immense benefits on human health. One of the prominent benefits of this seaweed is its role in managing Thyroid-related disorders arising due to iodine deficiency.",
            "A combination of Irish Sea Moss and Bladderwrack proves to be most beneficial as they work in synergy. It has been observed that the effect of the 2 weeds when taken together is far greater than when they are taken separately.",
            "The combination is ideal for treating gastrointestinal problems such as bloating, acidity and gastritis. Together, they also cleanse blood and help counter cardiovascular disorders with much efficacy."
        ]}
        image="/headercomp/moss11.png"
        />

        <Section
        title="Buy only Original Irish Sea Moss"
        content={["Studies have shown that the benefits that naturally grown Irish Sea Moss give are widely absent from those that are grown in artificial brine land. The composition of the weed is seen to have changed thus robbing the artificially grown seaweed of the goodness that the natural algae have."]}
        image="/headercomp/moss12.png"
        reverse
        />

        
            <h2 className="justify-center flex px-40 text-black">In addition to the full complement of trace minerals found in all seaweeds, Irish Moss contains unique anti-viral properties. It has been used internally to treat coughs and chest infections, and topically to relieve shingles and other skin conditions.</h2>
            <br />
            <h2 className="justify-center flex px-36 text-red-500">MAY CONTAIN TRACE AMOUNTS OF SHELLFISH. THIS PRODUCT IS NOT RECOMMENDED FOR INDIVIDUALS WHO ARE HIGHLY SENSITIVE/ALLERGIC TO SHELLFISH.</h2>
       

      </main>


      <Footer />
    </div>
  );
}
