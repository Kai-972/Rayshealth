import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactPage from "./components/homepage/Contact";
import BlogPage2 from "./components/blog/BlogPage2";
import BlogPage3 from "./components/blog/BlogPage3";
import BlogPage4 from "./components/blog/BlogPage4";
import BlogPage5 from "./components/blog/BlogPage5";
import BP11 from "./components/blog/blogpage/BP11";
import BP12 from "./components/blog/blogpage/BP12";
import BP13 from "./components/blog/blogpage/BP13";
import BP14 from "./components/blog/blogpage/BP14";
import BP15 from "./components/blog/blogpage/BP15";
import BP16 from "./components/blog/blogpage/BP16";
import BP17 from "./components/blog/blogpage/BP17";
import BP18 from "./components/blog/blogpage/BP18"
import Products from "./pages/Products";
import LoginPage from "./pages/auth/Login";
import CartPage from "./pages/Cart";
import TestimonialPage from "./pages/Testimonials";
import IrishMossKnowMore from "./components/homepage/headerComponents/IrishMossKnowMore";
import CBDKnowMore from "./components/homepage/headerComponents/CBDKnowMore";
import EssentialOil from "./components/homepage/headerComponents/EssentialOil";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProfilePage from "./pages/account/ProfilePage";
import WishlistPage from "./pages/account/WishlistPage";
import { useEffect } from "react";
import { useCartStore } from "./stores/cartStore";
import { supabase } from "./lib/supabaseClient";
import Bp18 from "./components/blog/blogpage/BP18";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const store = useCartStore.getState();
      if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
        if (session) {
          store.loadCart(); // Load the user's cart from the DB
        }
      } else if (event === 'SIGNED_OUT') {
        store.clearCart(); // Clear the cart on logout
      }
    });

    // Cleanup the listener when the app unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/blogpage2" element={<BlogPage2 />} />
            <Route path="/blogpage3" element={<BlogPage3 />} />
            <Route path="/blogpage4" element={<BlogPage4 />} />
            <Route path="/blogpage5" element={<BlogPage5 />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/testimonials" element={<TestimonialPage />} />

            {/* Header Components */}
            <Route path="/irish-moss/know-more" element={<IrishMossKnowMore />} />
            <Route path="/cbd/know-more" element={<CBDKnowMore/>} />
            <Route path="/essential-oil/know-more" element={<EssentialOil/>}/>

            {/* Blog Pages */}
            <Route path="/the-ultimate-guide-to-natural-cardiovascular-wellness-beyond-supplements" element={<BP11 />} />
            <Route path="/unlocking-the-hidden-benefits-of-superfoods-for-heart-health" element={<BP12 />} />
            <Route path="/10-astonishing-vitamin-e-supplement-benefits/" element={<BP13 />} />
            <Route path="/healthy-foods-with-high-cholesterol-consume-them-in-limited-quantities/" element={<BP14 />} />
            <Route path="/a-comprehensive-list-of-7-supplements-to-improve-circulation/" element={<BP15 />} />
            <Route path="/try-these-7-supplements-that-are-good-for-liver/" element={<BP16 />} />
            <Route path="/a-comprehensive-analysis-on-the-health-benefits-of-dietary-supplements/" element={<BP17 />} />
            <Route path="/6-amazing-vitamin-d-supplement-benefits-you-must-be-aware-of/" element={<Bp18/>}/>

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/account/profile" element={<ProfilePage />} />
              <Route path="/account/wishlist" element={<WishlistPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;
