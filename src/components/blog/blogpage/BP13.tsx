import React from 'react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import CommentSection from '../Comment';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaPinterestP, FaTumblr, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bp13() {
  const shareUrl =
    "https://rayshealthyliving.com/10-astonishing-vitamin-e-supplement-benefits";
  const shareTitle =
    "10 Astonishing Vitamin E Supplement Benefits";

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
            src="/blog/b3.jpg"
            alt="Preparing a heart-healthy supplement drink in a kitchen"
          />
        </figure>

        <h1 className='text-3xl text-black font-bold px-52'>10 Astonishing Vitamin E Supplement Benefits</h1>
        
        <p className='px-52 text-l text-emerald-600'><a href="#comments">Leave a Comment</a></p>
        <br />
        <p className='px-52 text-l text-gray-800'>
          Vitamin E refers to a group of eight molecules divided into two categories – tocopherols and tocotrienols. If recent reports are to believed, Vitamin E supplements play a critical role in helping patients overcome body ailments caused due to vitamin E deficiency.
          </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
          In this blog post, we shall discuss 10 astonishing benefits of Vitamin E, and why it’s necessary to keep the body replenished with this essential nutrient by consuming it as a supplement.
          </p>
        <br />
        <h1 className='text-3xl text-black px-52 font-bold'>Here are some points of Vitamin E Supplement Benefits</h1>
        <br />
        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Effectively Counters Chronic Illness</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
          Vitamin E is one of the most potent antioxidants. Several studies conducted have revealed that Vitamin E protects the cells from free radicals and helps the body counter a wide array of chronic diseases. Another study conducted revealed Vitamin E is particularly effective in countering Asthma and Dementia.
        </p>
        <br />
        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Helps Prevent Skin Cancer</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
         A 2013 study found out that vitamin E supplements are highly effective in protecting the skin against the harmful ultraviolet rays of the sun. The study further added that oral vitamin E supplement, when paired with Vitamin C, protects the skin from DNS damage due to sun exposure.
        </p>
        <br />
        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Moisturizes Skin</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
         Vitamin E is an essential constituent of most skin moisturizers. Several studies conducted have revealed that Vitamin E helps strengthen the skin barrier functions and keeps the skin moisturized. Also, Vitamin E being naturally anti-inflammatory in nature, keeps the skin smooth and glowing.
         </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Helps Maintain Blood Pressure</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin E plays a significant role in maintaining blood pressure. According to studies, vitamin E keeps the blood vessels dilated and helps maintain normal blood pressure. A study conducted by the National Institute of Health Office of Dietary Supplements revealed that it does this by preventing the metabolism of arachidonic acid (a compound responsible for increasing vasodilation).
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Improves Vision</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin E being one of the most potent antioxidants, protect the eyes from damages caused due to free radicals. A research conducted by eminent dietitians of the United States revealed that consuming Vitamin E as a dietary supplement reduces the risk of cataracts considerably.
         </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Helps in Healing the Wounds</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        According to studies, a daily dosage of Vitamin E supplements stimulates the flow of Thrombin in the bloodstream and speeds up blood clotting. The study further added that a proper flow of Thrombin in the bloodstream helps platelets to clump together and aids wounds to heal quickly.
         </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Psoriasis</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin E works wonders on Psoriasis and other related diseases. The best part is that it has no side effects. According to studies, Vitamin E supplements reduce inflammation in the skin and helps the body fight against Psoriasis. The study further added that it’s the best option for people who want to avoid prescription remedies having mild psoriasis.
         </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Reduces Fine Lines and Wrinkles</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
         Undeniably, dry skin looks aged and wrinkled when compared to well-moisturized skin. The moisturizing benefits of Vitamin E help reduce fine lines and wrinkles and keep the skin more youthful.
         </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-52 font-bold'>Protects Skin from Sunburn</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
         Owing to its moisturizing property, Vitamin E is highly potent for dry, flaky skin. Also, it provides respite to the body from the burning and itching that result from a sunburn.
         </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
            So, here was a list of 10 benefits of Vitamin E that you must be aware of. All the benefits clearly suggest why it’s essential for you to keep the body replenished with this essential vitamin. Let us know if you’d like to add any.
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
export default Bp13;
