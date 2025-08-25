import Header from "@/components/homepage/Header";
import HeroSection from "@/components/homepage/HeroSection";
import ProductSection from "@/components/homepage/ProductSection";
import AboutSection from "@/components/homepage/AboutSection";
import SpinWheelSection from "@/components/homepage/SpinWheelSection";
import BlogSection from "@/components/homepage/BlogSection";
import ConsultationSection from "@/components/ConsultationSection";
import FeedbackSection from "@/components/FeedbackSection";
import Testimonials from "@/components/homepage/Testimonials";
import EssentialOilsSection from "@/components/homepage/EssentialOilsSection";
import Footer from "@/components/homepage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <SpinWheelSection />
      <BlogSection />
      <Testimonials />
      <EssentialOilsSection />
      <Footer />
    </div>
  );
};

export default Index;
