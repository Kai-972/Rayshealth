import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  ShoppingCart,
  Search,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from '@/lib/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { useCartStore } from "@/stores/cartStore";
import { categoriesData } from "./CategoriesData"; 

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const totalItems = useCartStore((state) => state.getTotalItems());

  // Fetch session and set up click outside handler
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      subscription.unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className="w-full">
      {/* Top Orange Bar */}
      <div className="flex">
        <div className="w-[20%] bg-white"></div>
        <div className="w-[80%] bg-orange-500 text-white py-4 rounded-bl-[120px]">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-base">+1 (443) 432-3295</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-base">info@rayshealthyliving.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-orange-200"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-200"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-200"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Nav Menu */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-8">
              <li><a href="/" className="text-gray-700 hover:text-green-600 font-medium">HOME</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-green-600 font-medium">ABOUT US</a></li>
              <li><a href="/products" className="text-gray-700 hover:text-green-600 font-medium">PRODUCTS</a></li>
              <li><a href="/blog" className="text-gray-700 hover:text-green-600 font-medium">BLOG</a></li>
              <li><a href="/testimonials" className="text-gray-700 hover:text-green-600 font-medium">TESTIMONIALS</a></li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search here..."
                className="w-full pr-10 rounded-full border-gray-300"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-600"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="relative h-9 w-9">
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
                <span className="sr-only">View cart</span>
              </Link>
            </Button>
            {session ? (
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-gray-700 font-medium"
              >
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-orange-500 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-orange-600 font-medium"
              >
                LOGIN/SIGNUP
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Green Navigation */}
      <nav className="bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-evenly py-3 text-sm font-medium">
            {/* Irish Moss */}
            <li className="relative group">
              <a href="/#" className="hover:text-green-200 flex items-center">
                IRISH MOSS
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li><a href="/irish-moss/know-more" className="block px-4 py-2 hover:bg-orange-500">Know More</a></li>
                  <li><a href="/#" className="block px-4 py-2 hover:bg-orange-500">Shop Now</a></li>
                </ul>
              </div>
            </li>

            {/* CBD */}
            <li className="relative group">
              <a href="/#" className="hover:text-green-200 flex items-center">
                CBD
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li><a href="/cbd/know-more" className="block px-4 py-2 hover:bg-orange-500">Know More</a></li>
                  <li><a href="/#" className="block px-4 py-2 hover:bg-orange-500">Shop Now</a></li>
                </ul>
              </div>
            </li>

            {/* Health Concern */}
            <li><a href="/#" className="hover:text-green-200">Health Concern</a></li>

            {/* Brands */}
            <li className="relative group">
              <a href="/brands" className="hover:text-green-200 flex items-center">
                Brands <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-56 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  {[
                    "Ray's Healthy Living",
                    "Bio Nutrition",
                    "Bluebonnet",
                    "Bravo Tea Herbs",
                    "Buried Treasure",
                    "Dr. Bronners",
                    "Garden Of Life",
                    "Life Extension",
                    "Nature's Sunshine",
                    "Now Foods",
                    "Superior Source",
                    "The Soap Works",
                  ].map((brand, idx) => (
                    <li key={idx}>
                      <a
                        href={`/products`}
                        className="block px-4 py-2 hover:bg-orange-500"
                      >
                        {brand}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Categories Multi-Level Dropdown */}
            <li className="relative group">
              <button className="hover:text-green-200 flex items-center focus:outline-none">
                Categories
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Main Dropdown */}
              <div className="absolute left-0 mt-2 w-64 bg-green-600 text-white shadow-lg transition-all duration-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible max-h-[500px] overflow-y-auto">
                <ul>
                  {categoriesData.map((cat, idx) => (
                    <li key={idx} className="relative group/sub">
                      <span className="flex justify-between items-center px-4 py-2 hover:bg-orange-500 cursor-pointer">
                        {cat.name}
                        {cat.subcategories.length > 0 && (
                          <ChevronDown className="w-3 h-3 ml-2" />
                        )}
                      </span>
                      {cat.subcategories.length > 0 && (
                        <div className="absolute top-0 left-full min-w-[200px] bg-green-700 text-white shadow-lg z-50 transition-all duration-200 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible">
                          <ul>
                            {cat.subcategories.map((sub, i) => (
                              <li key={i}>
                                <a
                                  href={`/categories/${cat.name.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="block px-4 py-2 hover:bg-orange-500"
                                >
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Maximum Cardio */}
            <li className="relative group">
              <a href="/#" className="hover:text-green-200 flex items-center">
                Maximum Cardio
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-56 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li><a href="/#" className="block px-4 py-2 hover:bg-orange-500">Shop Now</a></li>
                  <li><a href="/#" className="block px-4 py-2 hover:bg-orange-500">Know More</a></li>
                  <li><a href="/#" className="block px-4 py-2 hover:bg-orange-500">Video</a></li>
                </ul>
              </div>
            </li>

            {/* Essential Oil */}
            <li className="relative group">
              <a href="/#" className="hover:text-green-200 flex items-center">
                Essential Oil
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-56 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li><a href="/#" className="block px-4 py-2 hover:bg-orange-500">Shop Now</a></li>
                  <li><a href="/essential-oil/know-more" className="block px-4 py-2 hover:bg-orange-500">Know More</a></li>
                </ul>
              </div>
            </li>

            {/* Others */}
            <li><a href="/products" className="hover:text-green-200">Others</a></li>

            {/* Ray's Vitality */}
            <li><a href="/products" className="hover:text-green-200">Ray&apos;s Vitality</a></li>
          </ul>
        </div>
      </nav>

      {/* BOOK A HEALTH CONSULTANT */}
      <div className="fixed right-0 top-1/2 -translate-y-[80%] z-50">
      <a href="/consultation">
        <Button
          className="bg-black hover:bg-orange-500 text-white rounded-r-none rounded-l-lg
               leading-none tracking-tight whitespace-pre-line
               px-3 py-0 min-h-[280px] w-[44px]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          BOOK A HEALTH CONSULTANT
        </Button>
        </a>
      </div>

      {/* FEEDBACK */}
      <div className="fixed right-0 top-2/3 -translate-y-[10%] z-50">
      <a href="/contact">
        <Button
          className="bg-green-600 hover:bg-orange-500 text-white rounded-r-none rounded-l-lg
               leading-none tracking-tight whitespace-pre-line
               px-3 py-0 min-h-[160px] w-[44px]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          FEEDBACK
        </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
