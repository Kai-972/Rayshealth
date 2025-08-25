import React from 'react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import CommentSection from '../Comment';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaPinterestP, FaTumblr, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bp15() {
  const shareUrl =
    "https://rayshealthyliving.com/a-comprehensive-list-of-7-supplements-to-improve-circulation/";
  const shareTitle =
    "The Ultimate Guide to Natural Cardiovascular Wellness: Beyond Supplements";

  const popup = (href) => {
    if (typeof window === "undefined") return;
    const w = 600, h = 600;
    const y =
      (window.top?.outerHeight ?? window.outerHeight) / 2 +
      (window.top?.screenY ?? window.screenY) -
      h / 2;
    const x =
      (window.top?.outerWidth ?? window.outerWidth) / 2 +
      (window.top?.screenX ?? window.screenX) -
      w / 2;
    window.open(
      href,
      "",
      `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=${w},height=${h},top=${y},left=${x}`
    );
  };

  const btn =
    "w-11 h-11 rounded-full flex items-center justify-center bg-white border-2 transition-colors leading-none";

  return (
    <>
      <Header />

      <article className="prose mx-auto px-4 py-8">
        <figure className="my-6 h-96 justify-center flex">
          <img
            src="/blog/b5.jpg"
            alt="Preparing a heart-healthy supplement drink in a kitchen"
          />
        </figure>

        <h1 className='text-3xl text-black font-bold px-52'>A Comprehensive List of 7 Supplements to Improve Circulation</h1>
        
        <p className='px-52 text-l text-emerald-600'><a href="#comments">Leave a Comment</a></p>
        <br />
        <p className='px-52 text-l text-gray-800'>
          Poor circulation is one of the most common ailments found in adults in the United States. According to veteran medical practitioners, several reasons result in poor blood circulation in the human body. Peripheral artery disease (PAD), diabetes, obesity, smoking, and Raynaud’s disease are some of the many causes of poor circulation.
          </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        A recent study conducted has revealed that poor blood flow in the human circulatory system leads to muscle cramps, numbness, digestive issues, and coldness in the hands or feet. These again have severe adverse effects on the body, if left untreated for a prolonged period.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        In this blog, we’ve provided a list of 7 supplements that enhance circulation and help maintain healthy arteries, veins, and capillaries.
        </p>
        
        <br />


        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Omega-7 Fatty Acids</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Palmitoleic acid is a purified and concentrated form of a specific omega-7 fatty acid. According to studies, palmitoleic acid reduces unhealthy triglycerides and LDL cholesterol, and raise beneficial HDL cholesterol. The study further adds that Omega-7 Fatty Acids also help improve the overall health of the circulatory system by improving the rate of blood flow.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Coenzyme Q10</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        CoQ10 supports circulation by preventing blood clots. Findings reported in The Journal of Nutritional Biochemistryshow that CoQ10 protects arteries by preventing the oxidation of LDL cholesterol. Try taking in 100–200 mg of CoQ10 daily if your body lacks sufficient quantity of this essential nutrient. For optimal absorption, use the Ubiquinol form of CoQ10.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Fish Oil</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Fish oil being rich in omega-3 fats – docosahexaenoic acid (DHA) and eicosapentaenoic acid (EPA), protects the blood vessels. Studies show that fish oil is highly effective in lowering high blood pressure, triglyceride, atherosclerosis, inflammation, blood clotting, and platelet aggregation. Another study has shown that fish oil is also effective in treating depression.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>L-arginine</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        L-arginine is an α-amino acid that helps boost the nitric oxide levels in the bloodstream. Nitric Oxide, in turn, improves circulation by stimulating blood flow.  As a person grows older, she/ he may need more of this nutrient than the diet can supply. So, it becomes essential to meet this deficit by consuming L-arginine supplements. A standard dosage of 500–1,000 mg L-arginine daily, is sufficient to meet the demand of the body.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Nattokinase</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Nattokinase is an enzyme present in fermented soybeans that helps reduce blood pressure. According to a report published in Nutrition Research, Nattokinase dissolves excess fibrin in blood vessels and helps improve circulation. The report also revealed that Nattokinase is effective in reducing LDL cholesterol, blood viscosity and increasing HDL cholesterol. A standard dose of 100 mg per day is sufficient to meet the body’s needs.       
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Niacin</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Niacin is a type of vitamin B that is best known for its effectiveness in raising ‘good cholesterol’ levels in the bloodstream. Many studies conducted on Niacin revealed that it also helps in dilating blood vessels and enhancing microcirculation. A daily dosage of 250–275 mg per day is sufficient to enrich the blood with Niacin and improving the overall circulatory system of the body.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Resveratrol</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Resveratrol is a compound primarily found in red wine and red grapes. According to veteran medical practitioners, Resveratrol positively affects the health of blood vessels cell lining helping release Nitric Oxide (an essential compound that helps in the relaxation of blood vessels). They further add that Resveratrol also helps lower LDL cholesterol and prevents blood platelets from excessive clotting. Daily consumption of 200–500 mg of trans-resveratrol is sufficient to witness its prowess.
        </p>
        <br />

        <p className='px-52 text-l text-gray-800'>
            So, here was the list of key supplements that help improve circulation in the blood. Let us know in the comment section if you think we missed any.
        </p>
        <br />




        
        {/* Share section */}
        <section className="px-52 pb-12">
          <div className="text-xl font-semibold text-black mb-2">Spread the love</div>
          <div className="flex gap-4 flex-wrap items-center">
            <button
              aria-label="Facebook"
              onClick={() =>
                popup(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`
                )
              }
              className={`${btn} border-[#4267B2] text-[#4267B2] hover:bg-[#4267B2] hover:text-white`}
            >
              <FaFacebookF size={20} />
            </button>

            <button
              aria-label="X"
              onClick={() =>
                popup(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${encodeURIComponent(shareTitle)}`
                )
              }
              className={`${btn} border-black text-black hover:bg-black hover:text-white`}
            >
              <FaXTwitter size={20} />
            </button>

            <button
              aria-label="LinkedIn"
              onClick={() =>
                popup(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`
                )
              }
              className={`${btn} border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white`}
            >
              <FaLinkedinIn size={20} />
            </button>

            <button
              aria-label="Reddit"
              onClick={() =>
                popup(
                  `https://reddit.com/submit?url=${encodeURIComponent(
                    shareUrl
                  )}&title=${encodeURIComponent(shareTitle)}`
                )
              }
              className={`${btn} border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white`}
            >
              <FaRedditAlien size={20} />
            </button>

            <button
              aria-label="Pinterest"
              onClick={() => {
                if (typeof document === "undefined") return;
                const s = document.createElement("script");
                s.type = "text/javascript";
                s.charset = "UTF-8";
                s.src =
                  "//assets.pinterest.com/js/pinmarklet.js?r=" +
                  Math.random() * 99999999;
                document.body.appendChild(s);
              }}
              className={`${btn} border-[#E60023] text-[#E60023] hover:bg-[#E60023] hover:text-white`}
            >
              <FaPinterestP size={20} />
            </button>

            <button
              aria-label="Tumblr"
              onClick={() =>
                popup(
                  `https://tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(
                    shareUrl
                  )}`
                )
              }
              className={`${btn} border-[#36465D] text-[#36465D] hover:bg-[#36465D] hover:text-white`}
            >
              <FaTumblr size={20} />
            </button>

            <a
              aria-label="WhatsApp"
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="nofollow noreferrer"
              className={`${btn} border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white`}
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </section>
      </article>
      <CommentSection/>
      <br />
      <Footer />
    </>
  );
}
export default Bp15;
