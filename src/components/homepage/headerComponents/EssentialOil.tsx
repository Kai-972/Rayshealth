
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



export default function EssentialOil() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />



      {/* Main Sections */}
      <main className="flex-grow">

        <div>
            <img src="/headercomp/essoil.jpg" alt="" />
        </div>
        
      </main>


      <Footer />
    </div>
  );
}
