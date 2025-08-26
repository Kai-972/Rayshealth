// src/components/products/ProductPage1.tsx
import { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchProducts, fetchFilterCategories, fetchFilterBrands } from '@/lib/api';
import { useCartStore } from '@/stores/cartStore';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToWishlist, removeFromWishlist } from '@/lib/api';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";

// Import UI Components
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search, ChevronDown, ChevronRight, SlidersHorizontal, Plus, Minus, Heart } from 'lucide-react';

interface FilterItem { id: string; name: string; }

const ProductCard = ({ product }) => {
    const { items, addToCart, updateQuantity } = useCartStore();
    const { toast } = useToast();
    const navigate = useNavigate();
    const itemInCart = items.find(item => item.id === product.id);
    const queryClient = useQueryClient();
    const { user } = useUser(); // Use the hook to get the user
    const userId = user?.id;

    const handleAddToCart = () => {
        if (!user) {
            toast({
                title: "Please Log In",
                description: "You need to be logged in to add items to your cart.",
                variant: "destructive",
                action: <Button onClick={() => navigate('/login')}>Login</Button>,
            });
            return;
        }
        addToCart(product);
    };

    return (
        <article className="rounded-lg border border-neutral-200 bg-white hover:shadow-md transition group overflow-hidden flex flex-col">
            <Link to={`/product/${product.id}`}>
                <img src={product.image_url || "/placeholder.png"} alt={product.name} className="h-48 w-full object-contain p-4" />
            </Link>
            <div className="px-4 pt-2 flex-grow flex flex-col">
                <p className="text-xs text-neutral-500 uppercase tracking-wide">{product.brands?.name}</p>
                <h3 className="text-sm font-semibold leading-snug mt-1 flex-grow">{product.name}</h3>
                <div className="mt-2 text-sm font-semibold">${product.price}</div>
            </div>
            <div className="px-4 py-4 mt-auto">
                {itemInCart && user ? (
                    // Show quantity counter only if item is in cart AND user is logged in
                    <div className="flex items-center justify-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(itemInCart.id, itemInCart.quantity - 1)}>-</Button>
                        <span className="text-lg font-semibold w-10 text-center">{itemInCart.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(itemInCart.id, itemInCart.quantity + 1)}>+</Button>
                    </div>
                ) : (
                    <Button className="w-full rounded-full bg-orange-500 text-sm font-semibold text-white hover:bg-orange-600 transition" onClick={handleAddToCart}>
                        Add to cart
                    </Button>
                )}
            </div>
        </article>
    );
};


const FilterAccordion: React.FC<{
    groupLabel: string; items: FilterItem[]; isLoading: boolean; onSelectionChange: (id: string) => void;
}> = ({ groupLabel, items, isLoading, onSelectionChange }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-t pt-4">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold uppercase">{groupLabel}</h4>
                <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded hover:bg-neutral-100">
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
            </div>
            {isOpen && (
                <ul className="mt-3 space-y-2 max-h-[280px] overflow-auto pr-1">
                    {isLoading ? <Skeleton className="h-20 w-full" /> : items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between gap-2">
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <Checkbox onCheckedChange={() => onSelectionChange(item.id.toString())} />
                                <span className="text-neutral-700">{item.name}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const ProductPage1 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('name-asc');
    const [page, setPage] = useState(1);
    const productsPerPage = 12;

    const addToCart = useCartStore((state) => state.addToCart);

    const { data: categories, isLoading: isLoadingCategories } = useQuery({ queryKey: ['categories'], queryFn: fetchFilterCategories });
    const { data: brands, isLoading: isLoadingBrands } = useQuery({ queryKey: ['brands'], queryFn: fetchFilterBrands });

    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ['products', { searchTerm, selectedCategories, selectedBrands, minPrice, maxPrice, sortBy, page }],
        queryFn: () => fetchProducts({
            searchTerm, categories: selectedCategories, brands: selectedBrands,
            minPrice: Number(minPrice) || undefined, maxPrice: Number(maxPrice) || undefined,
            sortBy, page, perPage: productsPerPage
        }),
        placeholderData: keepPreviousData,
    });

    // --- DEBUG LOG: Show the data received by the component ---
    useEffect(() => {
        if (isSuccess) {
            console.log("📦 [Component Data] Products data updated:", data);
        }
    }, [data, isSuccess]);

    const products = data?.products || [];
    const totalProducts = data?.count ?? 0;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories(prev => prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]);
        setPage(1);
    };
    const handleBrandChange = (brandId: string) => {
        setSelectedBrands(prev => prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]);
        setPage(1);
    };

    return (
        <main className="bg-white text-neutral-900">
            <div className="max-w-[1200px] mx-auto px-6 py-8">
                <nav aria-label="breadcrumb" className="text-sm text-neutral-500 mb-4">
                    <a href="/" className="hover:text-emerald-700">Home</a><span className="px-2">/</span><span className="text-neutral-700">Products</span>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
                    <aside className="space-y-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                            <Input placeholder="Search for products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9" />
                        </div>
                        <FilterAccordion groupLabel="CATEGORIES" items={categories || []} isLoading={isLoadingCategories} onSelectionChange={handleCategoryChange} />
                        <FilterAccordion groupLabel="BRANDS" items={brands || []} isLoading={isLoadingBrands} onSelectionChange={handleBrandChange} />
                        <div className="border-t pt-4">
                            <h4 className="text-sm font-semibold">PRICE</h4>
                            <div className="mt-3 grid grid-cols-2 gap-3">
                                <Input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min" />
                                <Input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max" />
                            </div>
                        </div>
                    </aside>
                    <section>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 className="text-4xl font-bold">Products</h1>
                                <p className="mt-2 text-sm text-neutral-600">Showing {products.length} of {totalProducts} results</p>
                            </div>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-[200px]"><SlidersHorizontal className="h-4 w-4 text-neutral-400 mr-2" /><SelectValue placeholder="Default sorting" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name-asc">Default sorting</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {isLoading && !data ? (
                                Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="space-y-2"><Skeleton className="h-40 w-full" /><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-1/2" /><Skeleton className="h-10 w-full" /></div>
                                ))
                            ) : error ? (
                                <p className="text-red-500 col-span-full">Error loading products.</p>
                            ) : (
                                products.map((p) => (
                                    <ProductCard key={p.id} product={p} />
                                ))
                            )}
                        </div>
                        <div className="mt-10">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem><PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage(p => Math.max(p - 1, 1)); }} /></PaginationItem>
                                    {[...Array(totalPages)].slice(0, 5).map((_, i) => (
                                        <PaginationItem key={i}><PaginationLink href="#" isActive={page === i + 1} onClick={(e) => { e.preventDefault(); setPage(i + 1); }}>{i + 1}</PaginationLink></PaginationItem>
                                    ))}
                                    {totalPages > 5 && <PaginationItem>...</PaginationItem>}
                                    <PaginationItem><PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage(p => Math.min(p + 1, totalPages)); }} /></PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </section>
                </div>
            </div >
        </main >
    );
};

export default ProductPage1;
