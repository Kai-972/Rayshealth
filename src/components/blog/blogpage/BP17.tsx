import React from 'react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import CommentSection from '../Comment';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaPinterestP, FaTumblr, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bp15() {
  const shareUrl =
    "https://rayshealthyliving.com/a-comprehensive-analysis-on-the-health-benefits-of-dietary-supplements/";
  const shareTitle =
    "A Comprehensive Analysis on the Health Benefits of Dietary Supplements";

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
            src="/blog/b7.jpg"
            alt="Preparing a heart-healthy supplement drink in a kitchen"
          />
        </figure>

        <h1 className='text-3xl text-black font-bold px-52'>A Comprehensive Analysis on the Health Benefits of Dietary Supplements</h1>
        
        <p className='px-52 text-l text-emerald-600'><a href="#comments">Leave a Comment</a></p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Dietary supplements are manufactured products that are intended to supplement a diet when taken as a pill, capsule, or tablet, or liquid. However, remember that dietary supplements are not medicines, nor should they be considered as a substitute for food. Usually, they’re one or combination of the following –
        </p>
        <br />
        <p className='px-56 text-l text-gray-800'>
        • Vitamin
        <br />
• Mineral
<br />
• Herb or other botanical
<br />
• Amino acid (the individual building blocks of a protein)
<br />
• Concentrate, metabolite, constituent, or extract
<br />
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Let’s now discuss what exactly is a dietary supplement and how it aids the bodily functions.
        </p>
       
<br />
        <h1 className='text-2xl text-gray-800 px-52 font-bold'>What Exactly is a Dietary Supplement and How it Aids Bodily Functions?</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Studies conducted on multiple occasions have revealed that dietary supplements help enhance the nutrition content in your diet and reduces the risk of osteoporosis or arthritis.
        <br />
        <br />
        According to experts, eating a variety of healthy foods is the best way to enrich the body with the nutrients that it needs. However, they are often not sufficient to meet the needs of the body. This is exactly when dietary supplements come to the rescue. When taken in proper quantities, they provide the body with all the nutrients that might be missing from your daily diet. Always make sure to talk to your doctor before taking any supplements. She/he might alter the course of some medicines that you’re already taking.
        </p>
        <br />


        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Will Dietary Supplement Work Post 50?</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            People over 50 years may need more vitamins and minerals as compared to younger adults. If you’re above 50 years of age, your doctor or a dietitian will be able to guide you on the need to change your diet or include dietary supplements to maintain optimum bodily functions.
            <br />
            <br />
            Studies conducted on multiple occasions have revealed that dietary supplements work wonders even for people above 50 years of age. They enrich the body mainly with the following nutrients –
       </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Calcium</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Calcium works with Vitamin D and helps keep the bones strong at all ages. A recent study conducted by eminent medical practitioners revealed that bone loss due to deficiency of calcium and Vitamin D in the bones leads to fractures in both older women and men.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Vitamin B6</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        This vitamin is essential for the formation of red blood cells. It is primarily found in potatoes, bananas, chicken breasts, and fortified cereals. If your body is deficient in Vitamin B6, dietary supplements will help replenish your body with this vital nutrient.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Vitamin B12</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin B12 helps in maintaining the count of red blood cells and the overall health of the nervous system. As per latest studies, older adults face trouble in absorbing this vitamin from the bloodstream. If you face such an issue, your doctor will recommend taking dietary supplements. Try buying Vitamin B Complex available at Ray’s Healthy Living. Being rich in B12, B9, B7, B6, B5, B3, B2, and B1, it promotes a healthy nervous system, steady hormonal function, and body immunity.
        </p>
            <br />
        
        
        <h1 className='text-3xl text-black px-52 font-bold'>Health Benefits of Dietary Supplements</h1>
<br />
<h1 className='text-2xl text-gray-800 px-56 font-bold'>Slows Down Ageing</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Dietary supplements minimize problems associated with aging. A study conducted in the U.S revealed that 180mg of omega-3 DHA (docosahexaenoic acid) per day had the effect of reducing dementia by 50 percent. Another study revealed that carotenoids, lutein, and zeaxanthin are associated with the prevention of age-related eye diseases such as macular degeneration, cataracts, and pigmentosa.
        </p>
        <br />

        <h1 className='text-2xl font-bold px-56 text-gray-800'>Boosts Immunity</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin C and Zinc are essential for maintaining a healthy immune system and optimizing white blood cells. Several studies have revealed that the consumption of Vitamin C helps maintain optimal immune activity. Dietary supplements help replenish the body with these essential minerals and keep the immune system healthy.    
        </p>
        <br />

        <h1 className='text-2xl font-bold px-56 text-gray-800'>Reduces the Risk of Cancer</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Vitamin B6 and Vitamin B12 prevents the formation of free radicals and reduces the risk of cancer. Folic acid is yet another compound that detoxifies carcinogens in the bloodstream. Dietary supplements help maintain Vitamin B6, B12, and Folic acid in the bloodstream and reducing the risks of cancer.
        </p>
        <br />
        <p className='px-52 text-gray-800'>
            So, here was our in-depth study on dietary supplements and its benefits. Let us know your thoughts in the comment section.
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
