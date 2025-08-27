import React from 'react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import CommentSection from '../Comment';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaPinterestP, FaTumblr, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bp18() {
  const shareUrl =
    "https://6-amazing-vitamin-d-supplement-benefits-you-must-be-aware-of/";
  const shareTitle =
    "6 amazing Vitamin-D supplement benefits one must be aware of";

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
            src="/blog/b8.jpg"
            alt="Preparing a heart-healthy supplement drink in a kitchen"
          />
        </figure>

        <h1 className='text-3xl text-black font-bold px-52'>6 Amazing Vitamin D Supplement Benefits You Must Be Aware of</h1>
        
        <p className='px-52 text-l text-emerald-600'><a href="#comments">Leave a Comment</a></p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin D, also known as the ‘Sunshine Vitamin’, is produced by the skin when it comes in contact with Sunlight. It’s a fat-soluble vitamin in a family of compounds that includes Vitamin D-1, D-2, and D-3.</p>
        <br />
        <p className='px-56 text-l text-gray-800'>
        According to studies, Vitamin D is naturally produced by the human body when it gets exposed to sunlight. Further, it also tends to break down quickly. This means your body can run low on Vitamin D quite frequently (especially during the winter season) if it’s not replenished by potent Vitamin D supplements.
        </p>
        <br />
        <p className='px-52 text-l font-bold text-gray-900'>
           In this blog, we shall analyze 6 amazing benefits of Vitamin D supplements and why you must consume it at regular intervals.</p>
       
<br />
<br />
        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Helps Build Healthy Bones</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        It is a proven fact that Vitamin D plays a critical role in regulating calcium and phosphorus in the bloodstream (two elements that are extremely essential for maintaining healthy bones). Vitamin D also plays a major role in helping the intestine absorb and transport calcium to the bones and other parts of the body.<br />
        <br />
       Several studies have also concluded that Vitamin D helps prevent Rickets in children (a disease characterized by a severely bow-legged appearance due to softening of the bones) and Osteoporosis in older men and women. You can try buying D3 MCT Oil – a revolutionary product from Ray’s Healthy Living. The product aims to improve the overall health of bones and teeth by promoting metabolism and proper functioning of the immunity system.
       </p>
        <br />
<br />  

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Reduces Risk of Type 2 Diabetes</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Several observational studies have revealed that there is an inverse relationship between the concentration of vitamin D in the bloodstream and the risk of type 2 diabetes. The studies have further added that insufficient vitamin D levels in patients suffering from type 2 diabetes lead to improper insulin secretion and glucose intolerance.
<br />
            <br />
            Experts are of the view that regular consumption of Vitamin D supplements not only helps overcome these issues but also reduces the risks posed by type 2 Diabetes as a whole.
</p>
        <br />
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Reduces Depression</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Research has shown that Vitamin D acts as an excellent stressbuster if consumed frequently. In one study, scientists found that increasing the concentration of vitamin D in the bloodstream of patients suffering from depression helped reduce stress and anxiety.
        <br />
        <br />
        Another study revealed that people with fibromyalgia showed significant improvements by increasing the intake of vitamin D supplements.
        </p>
        <br />
        <br />
        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Defends The Body Against Cancer</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Vitamin D is extremely important for regulating cell growth and cell-communication. Some studies have also suggested that calcitriol (the hormonally active form of vitamin D) helps reduce cancer progression by reducing the growth and development of new blood cells in cancer-affected tissues, increasing the cancer cell death, and reducing cell proliferation and metastases
</p>
        <br />
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Boosts Weight Loss</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
       If you’re trying to lose weight or prevent heart diseases, then regular consumption of Vitamin D can be of great help! A study conducted by eminent scholars revealed that people taking vitamin D supplements regularly were able to lose more weight than those taking a placebo supplement. The study also added that calcium and vitamin D have an appetite-suppressing effect that helps curb fat in the body.
</p>
            <br />
        
        
        <br />  
<h1 className='text-2xl text-gray-800 px-56 font-bold'>Promotes Healthy Pregnancy</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Pregnant women who’re deficient in vitamin D are always at risk of preeclampsia. Poor vitamin D concentration also leads to gestational diabetes mellitus and bacterial vaginosis. Vitamin D supplements enrich the body with the essential element and help it recover from such conditions.
        </p>
        <br />

       
        <p className='px-52 text-l text-gray-800'>
        So, here are 6 reasons why we think consuming Vitamin D is essential for all. Let us know your thoughts in the comment section. Feel free if you want to add any other potential benefit of Vitamin D.</p>
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
export default Bp18;
