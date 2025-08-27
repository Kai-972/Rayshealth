import React from 'react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import CommentSection from '../Comment';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaPinterestP, FaTumblr, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bp16() {
  const shareUrl =
    "https://rayshealthyliving.com/try-these-7-supplements-that-are-good-for-liver/";
  const shareTitle =
    "Try These 7 Supplements That Are Good for Liver";

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
            src="/blog/b6.jpg"
            alt="Preparing a heart-healthy supplement drink in a kitchen"
          />
        </figure>

        <h1 className='text-3xl text-black font-bold px-52'>Try These 7 Supplements That Are Good for Liver</h1>
        
        <p className='px-52 text-l text-emerald-600'><a href="#comments">Leave a Comment</a></p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Whether it is heart or kidney, lungs or liver, lifestyle choices that we make can have a huge effect on them both positively or negatively. When it comes to liver, sedentary lifestyle, wrong food habits, addiction to alcohol, and consumption of chronic drugs can take a toll on its health.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
        The liver is one of the vital organs of the body. It performs the functions of detoxifying the body, digestion of food, absorption of nutrients, and storing energy. Opting for dietary supplements can ensure healthy functioning of the liver and keep many disorders related to it at bay.
        </p>
        <br />
        
        <h1 className='text-3xl text-black font-bold px-52'>Let’s take a look at the list of 7 best herbal supplements good for liver.</h1>
<br />
        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Milk Thistle</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Milk Thistle is a wonderful natural remedy for liver disorders. The potent herb is enriched with antioxidants, active natural substances and flavonoids such as silymarin.
        <br />
        <br />
        It helps in detoxification, optimizing liver functions, renewing liver tissue, reducing inflammation, and shielding liver cells from damage. Research demonstrates that the herb is particularly beneficial for treating cirrhosis and hepatitis B and C.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Holy Basil</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
        Since ancient times, basil leaves are considered to have multiple health benefits. They are used for treating various ailments. When used as a liver supplement, it is known to protect the liver against various damages that can lead to hepatitis. It also prevents the accumulation of fat in the liver that helps to keep it healthy in the longer run.
        </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Turmeric</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Think of it beyond being a mere spice or regular kitchen ingredient. The benefits of turmeric for health and wellness are countless. The magical herb is enriched with pharmacologic properties, antioxidants, and anti-inflammatory properties that that help in protecting and detoxifying the liver.
            <br />
            <br />
            The reason behind turmeric being a potent liver supplement is due to the presence of curcumin in it. It is an active ingredient and phytopolylphenol pigment fortified with potent biological properties. Curcumin ensures the proper functioning of the liver and protects it from damage caused by harmful toxins and oxidative stress in the longer-run.
      
      </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Cascara Sagrada</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
       A deciduous tree locally grown in the forests of North American Pacific, Cascara Sagrada is an ideal liver tonic. The supplement is known for its natural laxative properties. When consumed on a regular basis, it eliminates impurities and toxins from the liver and effectively deals with the ailments related to it.
       </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Dandelion</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            For maintaining optimum liver health, dandelion is the best supplement. It acts as a potent detoxifying agent for the liver that cleanses it from harmful toxins, impurities, and oxidative stress. Dandelion also provides vital nutrients and vitamins to the liver that keeps it healthy in the longer-run.
            </p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Artichoke</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            Artichoke supports liver health with its powerful nutrients and antioxidant properties. It protects the liver and renews liver cells. The herbal supplement stimulates bile flow from the liver and boosts digestive health.</p>
        <br />

        <h1 className='text-2xl text-gray-800 px-56 font-bold'>Yellow Dock Root Extract</h1>
        <br />
        <p className='px-52 text-l text-gray-800'>
            The yellow dock root extract comes from a perennial flowering plant that is the ideal panacea for liver-related disorders and ailments. Enriched with potent plant compounds known as glycosides, it flushes out harmful toxins from the liver and boosts bile production. The hepatoprotective properties of glycosides present in yellow dock root extract make it a potent natural supplement for the liver.
            </p>
            <br />
        <p className='px-52 text-l text-gray-800'>
            Research shows the diuretic action of the herb aids in toxin elimination by increasing the frequency of urine. It also helps in flushing out the harmful pollutants by stimulating the action of the lymphatic system.
        </p>
        <br />
        <p className='px-52 text-l text-gray-800'>
           To conclude, liver supplements are the best additions to regular diets. When combined with healthy nutrition and daily workout habits, they can work wonders for your liver. Opt for the above-mentioned supplements and keep your liver healthy for a longer time.
</p>
<br />

        <p className='px-52 text-l text-gray-800'>
            For buying the best organic supplements for the liver, visit Ray’s Healthy Living. The premium online store provides herbal wellness products formulated from pure botanical extracts. You can buy maximum cardio, kids formula, vitamins and minerals, herbal oils, essential oils and others that are known for their efficacy and potency.
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
export default Bp16;
