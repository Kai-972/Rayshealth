// import { Phone, Mail, Facebook, Twitter, Linkedin,  ShoppingCart, Search, User, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const Header = () => {
//   return (
//     <header className="w-full">
//       {/* Top Orange Bar */}
// {/* Top Orange Bar */}
// <div className="flex">
//   {/* Left 30% Empty Space */}
//   <div className="w-[20%] bg-white"></div>

//   {/* Right 70% Orange Bar */}
//   <div className="w-[80%] bg-orange-500 text-white py-4 rounded-bl-[120px]">
//     <div className="container mx-auto px-4 flex justify-between items-center">

//       {/* Left Section: Phone + Email */}
//       <div className="flex items-center space-x-6">
//         <div className="flex items-center space-x-2">
//           <Phone className="w-5 h-5" />
//           <span className="text-base">+1 (443) 432-3295</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Mail className="w-5 h-5" />
//           <span className="text-base">info@rayshealthyliving.com</span>
//         </div>
//       </div>

//       {/* Right Section: Wholesale Button + Social Icons */}
//       <div className="flex items-center space-x-6">
//         {/* <div className="bg-green-500 px-4 py-2 rounded-bl-[20px] rounded-tr-[20px]">
//           <span className="text-black font-semibold">WHOLESALE</span>
//         </div> */}
//          <a href="#" className="hover:text-orange-200">
//     <Facebook className="w-5 h-5" />
//   </a>
//   <a href="#" className="hover:text-orange-200">
//     <Twitter className="w-5 h-5" />
//   </a>
//   <a href="#" className="hover:text-orange-200">
//     <Linkedin className="w-5 h-5" />
//   </a>
//       </div>
//     </div>
//   </div>
// </div>



//       {/* Main Header */}
//       <div className="bg-white py-4">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img src="/logo.png" alt="logo" />
//           </div>

//           {/* Navigation Menu */}
//           <nav className="hidden lg:flex">
//             <ul className="flex items-center space-x-8">
//               <li><a href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">HOME</a></li>
//               <li><a href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">ABOUT US</a></li>
//               <li><a href="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium">PRODUCTS</a></li>
//               <li><a href="/blog" className="text-gray-700 hover:text-green-600 transition-colors font-medium">BLOG</a></li>
//               <li><a href="/testimonials" className="text-gray-700 hover:text-green-600 transition-colors font-medium">TESTIMONIALS</a></li>
//             </ul>
//           </nav>

//           {/* Search Bar */}
//           <div className="flex-1 max-w-md mx-8">
//             <div className="relative">
//               <Input
//                 type="search"
//                 placeholder="Search here..."
//                 className="w-full pr-10 rounded-full border-gray-300"
//               />
//               <Button
//                 size="sm"
//                 className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-600"
//                 variant="default"
//               >
//                 <Search className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="sm" className="relative">
//               <ShoppingCart className="w-5 h-5 text-gray-700" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 0
//               </span>
//             </Button>
//              {/* Login / Signup Button (Notched) */}
//                 <button className="bg-orange-500 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-orange-600 font-medium">
//                   LOGIN/SIGNUP
//                 </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Green Navigation */}
//           <nav className="bg-green-600 text-white">
//       <div className="container mx-auto px-4">
//         <ul className="flex items-center justify-evenly py-3 text-sm font-medium">
//           {/* Irish Moss with Dropdown */}
//           <li className="relative group z-50">
//   <button className="hover:text-green-200 transition-colors flex items-center focus:outline-none">
//     IRISH MOSS
//     <ChevronDown className="w-4 h-4 ml-1" />
//   </button>
//   {/* Dropdown */}
//   <div className="absolute left-0 mt-2 hidden w-40 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block">
//     <a
//       href="/irish-moss/know-more"
//       className="block px-4 py-2 hover:bg-green-100 hover:text-green-700 rounded-t-lg"
//     >
//       Know More
//     </a>
//     <a
//       href="/irish-moss/shop"
//       className="block px-4 py-2 hover:bg-green-100 hover:text-green-700 rounded-b-lg"
//     >
//       Shop Now
//     </a>
//   </div>
// </li>
// {/* CBD */}
//           <li className="relative group">
//             <button className="hover:text-green-200 transition-colors flex items-center focus:outline-none">
//               CBD
//               <ChevronDown className="w-4 h-4 ml-1" />
//             </button>
//             <div className="absolute left-0 mt-2 hidden w-44 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block z-50">
//               <a href="/cbd/shop" className="block px-4 py-2 hover:bg-green-100">
//                 Shop Now
//               </a>
//               <a href="/cbd/know-more" className="block px-4 py-2 hover:bg-green-100">
//                 Know More
//               </a>
//             </div>
//           </li>
//           {/* Health Concern */}
//           <li>
//             <a href="/health-concern" className="hover:text-green-200 transition-colors">
//               Health Concern
//             </a>
//           </li>
//           {/* Brands */}
//           <li className="relative group">
//             <button className="hover:text-green-200 transition-colors flex items-center focus:outline-none">
//               Brands
//               <ChevronDown className="w-4 h-4 ml-1" />
//             </button>
//             <div className="absolute left-0 mt-2 hidden w-56 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block z-50 max-h-64 overflow-y-auto">
//               {[
//                 "Ray's Healthy Living",
//                 "Bio Nutrition",
//                 "Bluebonnet",
//                 "Bravo Tea Herbs",
//                 "Buried Treasure",
//                 "Dr. Bronners",
//                 "Garden Of Life",
//                 "Life Extension",
//                 "Nature's Sunshine",
//                 "Now Foods",
//                 "Superior Source",
//                 "The Soap Works",
//               ].map((brand, idx) => (
//                 <a
//                   key={idx}
//                   href={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="block px-4 py-2 hover:bg-green-100"
//                 >
//                   {brand}
//                 </a>
//               ))}
//             </div>
//           </li>
// {/*Categories*/}
//           <li>
//             <a href="/categories" className="hover:text-green-200 transition-colors">
//               Categories
//             </a>
//           </li>
//           {/* Maximum Cardio */}
//           <li className="relative group">
//             <button className="hover:text-green-200 transition-colors flex items-center focus:outline-none">
//               Maximum Cardio
//               <ChevronDown className="w-4 h-4 ml-1" />
//             </button>
//             <div className="absolute left-0 mt-2 hidden w-44 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block z-50">
//               <a href="/maximum-cardio/shop" className="block px-4 py-2 hover:bg-green-100">
//                 Shop Now
//               </a>
//               <a href="/maximum-cardio/know-more" className="block px-4 py-2 hover:bg-green-100">
//                 Know More
//               </a>
//               <a href="/maximum-cardio/video" className="block px-4 py-2 hover:bg-green-100">
//                 Video
//               </a>
//             </div>
//           </li>

//           {/* Essential Oil */}
//           <li className="relative group">
//             <button className="hover:text-green-200 transition-colors flex items-center focus:outline-none">
//               Essential Oil
//               <ChevronDown className="w-4 h-4 ml-1" />
//             </button>
//             <div className="absolute left-0 mt-2 hidden w-44 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block z-50">
//               <a href="/essential-oil/shop" className="block px-4 py-2 hover:bg-green-100">
//                 Shop Now
//               </a>
//               <a href="/essential-oil/know-more" className="block px-4 py-2 hover:bg-green-100">
//                 Know More
//               </a>
//             </div>
//           </li>

//           {/* Others */}
//           <li>
//             <a href="/others" className="hover:text-green-200 transition-colors">
//               Others
//             </a>
//           </li>

//           {/* Vitality */}
//           <li>
//             <a href="/vitality" className="hover:text-green-200 transition-colors">
//               Ray&apos;s Vitality
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>

//     </header>
//   );
// };

// export default Header;
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
  Sheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from '@/lib/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import { Session } from '@supabase/supabase-js'; // Import the Session type
import { useCartStore } from "@/stores/cartStore";
import CartSheet from "../cart/CartSheet";
import { SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    // Fetch the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes in auth state
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
    }
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirect to home after logout
  };

  const brands = [
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
  ];

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
              <a href="#" className="hover:text-orange-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-200">
                <Linkedin className="w-5 h-5" />
              </a>
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
              <button onClick={handleLogout} className="bg-gray-600 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-gray-700 font-medium">
                LOGOUT
              </button>
            ) : (
              <Link to="/login" className="bg-orange-500 text-white px-6 py-2 rounded-br-[20px] rounded-tl-[20px] hover:bg-orange-600 font-medium">
                LOGIN/SIGNUP
              </Link>
            )}
          </div>
        </div>
      </div>

      { /*Bottom Green Navigation*/}
      <nav className="bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-evenly py-3 text-sm font-medium">
            {/* Irish Moss */}
            <li className="relative group">
              <a href="/irish-moss" className="hover:text-green-200 flex items-center">
                IRISH MOSS
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li>
                    <a href="/irish-moss/know-more" className="block px-4 py-2 hover:bg-orange-500">
                      Know More
                    </a>
                  </li>
                  <li>
                    <a href="/irish-moss/shop-now" className="block px-4 py-2 hover:bg-orange-500">
                      Shop Now
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* CBD */}
            <li className="relative group">
              <a href="/cbd" className="hover:text-green-200 flex items-center">
                CBD
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li>
                    <a href="/cbd/know-more" className="block px-4 py-2 hover:bg-orange-500">
                      Know More
                    </a>
                  </li>
                  <li>
                    <a href="/cbd/shop-now" className="block px-4 py-2 hover:bg-orange-500">
                      Shop Now
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Health Concern (no dropdown) */}
            <li>
              <a href="/health-concern" className="hover:text-green-200">
                Health Concern
              </a>
            </li>

            {/* Brands */}
            <li className="relative group">
              <a href="/brands" className="hover:text-green-200 flex items-center">
                Brands
                <ChevronDown className="w-4 h-4 ml-1" />
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
                        href={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-orange-500"
                      >
                        {brand}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Categories (no dropdown) */}
            <li>
              <a href="/categories" className="hover:text-green-200">
                Categories
              </a>
            </li>

            {/* Maximum Cardio */}
            <li className="relative group">
              <a href="/maximum-cardio" className="hover:text-green-200 flex items-center">
                Maximum Cardio
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-56 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li>
                    <a href="/maximum-cardio/shop-now" className="block px-4 py-2 hover:bg-orange-500">
                      Shop Now
                    </a>
                  </li>
                  <li>
                    <a href="/maximum-cardio/know-more" className="block px-4 py-2 hover:bg-orange-500">
                      Know More
                    </a>
                  </li>
                  <li>
                    <a href="/maximum-cardio/video" className="block px-4 py-2 hover:bg-orange-500">
                      Video
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Essential Oil */}
            <li className="relative group">
              <a href="/essential-oil" className="hover:text-green-200 flex items-center">
                Essential Oil
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <div className="absolute left-0 mt-2 w-56 bg-green-600 text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul>
                  <li>
                    <a href="/essential-oil/shop-now" className="block px-4 py-2 hover:bg-orange-500">
                      Shop Now
                    </a>
                  </li>
                  <li>
                    <a href="/essential-oil/know-more" className="block px-4 py-2 hover:bg-orange-500">
                      Know More
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Others (no dropdown) */}
            <li>
              <a href="/others" className="hover:text-green-200">
                Others
              </a>
            </li>

            {/* Ray's Vitality (no dropdown) */}
            <li>
              <a href="/vitality" className="hover:text-green-200">
                Ray&apos;s Vitality
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* BOOK A HEALTH CONSULTANT */}
      <div className="fixed right-0 top-1/2 -translate-y-[80%] z-50">
        <Button
          className="bg-black hover:bg-orange-500 text-white rounded-r-none rounded-l-lg
               leading-none tracking-tight whitespace-pre-line
               px-3 py-0 min-h-[280px] w-[44px]"  /* ensure full background */
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          BOOK A HEALTH CONSULTANT
        </Button>
      </div>

      {/* FEEDBACK */}
      <div className="fixed right-0 top-2/3 -translate-y-[10%] z-50">
        <Button
          className="bg-green-600 hover:bg-orange-500 text-white rounded-r-none rounded-l-lg
               leading-none tracking-tight whitespace-pre-line
               px-3 py-0 min-h-[160px] w-[44px]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          FEEDBACK
        </Button>
      </div>

    </header>
  );
};

export default Header;
