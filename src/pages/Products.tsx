import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import ProductPage1 from "@/components/products/ProductPage1";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductPage1/>
      <Footer />
    </div>
  );
};
 
export default Products;