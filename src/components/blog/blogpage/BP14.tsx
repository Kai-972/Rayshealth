import React from 'react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import CommentSection from '../Comment';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaPinterestP, FaTumblr, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bp14() {
  const shareUrl =
    "https://rayshealthyliving.com/healthy-foods-with-high-cholesterol-consume-them-in-limited-quantities/";
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
            src="/blog/b4.jpg"
            alt="Preparing a heart-healthy supplement drink in a kitchen"
          />
        </figure>

        <h1 className='text-3xl text-black font-bold px-52'>Healthy Foods with High Cholesterol: Consume Them in Limited Quantities
</h1>
        
        <p className='px-52 text-l text-emerald-600'><a href="#comments">Leave a Comment</a></p>
        <br />
        <p className='px-52 text-l text-gray-800'>
          Hectic work schedules, wrong food habits, and sedentary lifestyle take a toll on our health and triggers diabetes, hypertension, and cholesterol. Talking about cholesterol, it is one of the fatal ailments with symptoms like chest pain, heart attack, and stroke.
          </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
          High cholesterol has a lot to do with our daily nutrition habits. Very often, foods that we think are healthy actually contain high cholesterol levels. In fact a bagel with a high level of creamy cheese or hamburger for breakfast is doing more harm to body than imagined to be.
          </p>
        <br />
        <h1 className='text-3xl text-black px-52 font-bold'>We have put together a list of best healthy foods with high cholesterol or LDL.</h1>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Full Fat Yogurt</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            We all know yogurt is a probiotic that supports intestinal and gut health. But actually, it is a cholesterol-rich food loaded with several nutrients such as protein, calcium, phosphorus, vitamins, magnesium, potassium, and zinc. Research shows that one cup of full-fat yogurt contains 31.9 mg of cholesterol or 11% of RDI.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Eggs</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            We all love to eat eggs for breakfast, lunch, and dinner. Egg recipes are easy to make and are less time-consuming. Eggs are rich sources of cholesterol with each one of them containing 211 mg of cholesterol or 70% of the RDI.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Despite being high in cholesterol, eggs are enriched with vitamins A and B and selenium. So you should not exclude them from your diet but limit their consumption.   
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Cheese</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            We find cheese in cakes, sandwiches, and even biscuits and they taste delicious. But do you know that 1-ounce of cheese delivers 27mg of cholesterol and puts you at risk of fatal heart diseases.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
            However, you must keep in mind that different kinds of cheese differ in nutritional and calorie content. If you are too fond of cheese and cannot omit it from your diet, then you must pick those that are low in fat.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Sardines</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Sardines are popular seafood that is fortified with omega-3 fatty acids and proteins. It is also fortified with iron, selenium, phosphorus, zinc, copper, magnesium, phosphorus and vitamin E.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
            But seafood lovers must know that it is high on cholesterol. It has been found in researches that 92-gram serving of the fish delivers 131mg of cholesterol and packs RDI of 44%.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Organ Meats</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Heart, kidney, and liver of beef, chicken, and mutton are never wasted. The nutritional value of organ meats is huge. They contain antioxidants, vitamin B12, iron, and zinc. But at the same time, you must know that these foods also contain a high percentage of cholesterol.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Research shows that 56-gram serving of organ meats delivers 105mg of cholesterol or an RDI with 36%. Hence if you are health conscious and care about your heart, you need to limit its consumption.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Shellfish</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Shellfish are delicious and are an excellent source of nutrients like proteins, vitamins, selenium, and iron. They also include bioactive compounds, carotenoid antioxidants, and amino acids.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        But you will be surprised to know that shellfish contains high cholesterol that can wreak havoc for your cardiovascular health. You can get 166mg of cholesterol by consuming merely 3-ounce or 85-gram of serving of shrimp.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Steak Raised in Pastures</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Steaks that are raised in pastures are good sources of protein, vitamins, and minerals. But the high levels of cholesterol present in it can pose several health hazards. A 4-ounce serving of steak that is raised in pastures delivers 62 mg of cholesterol.
        </p>
        <br />

       
        <p className='px-52 text-l text-gray-800'>
            Which of the above-mentioned foods do you find to be high in cholesterol? Feel free to share your comments and feedback with us.
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
export default Bp14;
