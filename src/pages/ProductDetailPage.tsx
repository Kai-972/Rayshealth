// src/pages/ProductDetailPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProductById, fetchRelatedProducts, addToWishlist, removeFromWishlist, fetchWishlist } from '@/lib/api';
import { useCartStore } from '@/stores/cartStore';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { useUser } from '@/hooks/useUser';
import { useToast } from "@/components/ui/use-toast";

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus, Loader2, Heart } from 'lucide-react';
import { useState } from 'react';

// Reusable Card for the Related Products section
const RelatedProductCard = ({ product }) => {
    const { addToCart } = useCartStore();
    return (
        <Card className="flex flex-col overflow-hidden">
            <Link to={`/product/${product.id}`}>
                <CardHeader className="p-0">
                    <img src={product.image_url || 'https://placehold.co/400x400/orange/white?text=Product'} alt={product.name} className="h-48 w-full object-cover" />
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                    <p className="text-xs text-muted-foreground">{product.brands?.name}</p>
                    <CardTitle className="text-base font-semibold leading-tight mt-1">{product.name}</CardTitle>
                </CardContent>
            </Link>
            <CardFooter className="flex justify-between items-center mt-auto pt-4">
                <p className="text-lg font-bold text-green-600">${product.price}</p>
                <Button size="sm" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default function ProductDetailPage() {
    // Get the 'productId' from the URL (e.g., /product/14)
    const { productId } = useParams<{ productId: string }>();
    const { user } = useUser();
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { items, addToCart, updateQuantity } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // Fetch the main product
    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => fetchProductById(productId!),
        enabled: !!productId,
    });

    // Fetch the user's wishlist to check if this product is in it
    const { data: wishlist } = useQuery({
        queryKey: ['wishlist', user?.id],
        queryFn: () => fetchWishlist(user!.id),
        enabled: !!user,
    });

    const isWishlisted = wishlist?.some(p => p.id === product?.id);

    // Mutations for adding/removing from wishlist
    const addWishlistMutation = useMutation({
        mutationFn: () => addToWishlist({ userId: user!.id, productId: product!.id }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlist', user!.id] }),
    });
    const removeWishlistMutation = useMutation({
        mutationFn: () => removeFromWishlist({ userId: user!.id, productId: product!.id }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlist', user!.id] }),
    });

    const handleWishlistToggle = () => {
        if (!user) {
            toast({ title: "Please log in to use the wishlist.", variant: "destructive" });
            return;
        }
        if (isWishlisted) {
            removeWishlistMutation.mutate();
        } else {
            addWishlistMutation.mutate();
        }
    };

    const category = product?.product_categories?.[0]?.categories;

    const { data: relatedProducts } = useQuery({
        queryKey: ['relatedProducts', category?.id],
        queryFn: () => fetchRelatedProducts(category?.id, product.id),
        enabled: !!category?.id && !!product?.id,
    });

    const itemInCart = items.find(item => item.id === product?.id);

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
        if (!itemInCart) {
            addToCart(product, quantity);
        }
        //updateQuantity( Number(productId), quantity);
        return ;
    };

    const handleBuyNow = async () => {
        if (!user) {
            toast({
                title: "Please Log In",
                description: "You need to be logged in to check out.",
                variant: "destructive",
                action: <Button onClick={() => navigate('/login')}>Login</Button>,
            });
            return;
        }
        if (!product) return;
        setIsCheckingOut(true);

        // Ensure the item is in the cart before checking out
        if (!itemInCart) {
            addToCart(product, quantity);
        }

        const lineItems = [{
            variantId: product.shopify_variant_id,
            quantity: itemInCart ? itemInCart.quantity : 1,
        }];

        try {
            navigate("/cart");
        } catch (err) {
            console.error("Buy Now Error:", err);
            setIsCheckingOut(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="container mx-auto px-4 py-8 flex-grow">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Skeleton className="w-full h-96" />
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-1/4" />
                            <Skeleton className="h-10 w-3/4" />
                            <Skeleton className="h-8 w-1/3" />
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !product) {
        return <div>Error loading product or product not found.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column: Image and Description */}
                    <div className="space-y-8">
                        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
                            <img src={product.image_url || 'https://placehold.co/500x500/orange/white?text=Product'} alt={product.name} className="max-w-full h-auto max-h-[500px] object-contain" />
                        </div>
                        <Tabs defaultValue="description" className="w-full">
                            <TabsList><TabsTrigger value="description">Description</TabsTrigger></TabsList>
                            <TabsContent value="description" className="mt-4 text-sm text-gray-700 leading-relaxed"><p>{product.description}</p></TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Column: Details and Actions (Sticky) */}
                    <div className="md:sticky md:top-24 h-fit space-y-4">
                        <p className="text-sm font-semibold text-gray-500 uppercase">{product.brands?.name || 'Brand'}</p>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-3xl font-light text-green-600">${product.price}</p>

                        {itemInCart ? (
                            <div className="py-4 space-y-4">
                                <p className="font-semibold">This item is in your cart:</p>
                                <div className="flex items-center justify-center gap-2 border rounded-md p-2">
                                    <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => updateQuantity(itemInCart.id, itemInCart.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                                    <span className="text-2xl font-bold w-16 text-center">{itemInCart.quantity}</span>
                                    <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => updateQuantity(itemInCart.id, itemInCart.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4 py-4">
                                <div className="flex items-center border rounded-md">
                                    <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus className="h-4 w-4" /></Button>
                                    <span className="w-12 text-center">{quantity}</span>
                                    <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}><Plus className="h-4 w-4" /></Button>
                                </div>
                                <Button size="lg" className="flex-grow" onClick={() => { for (let i = 0; i < quantity; i++) { addToCart(product); } }}>Add to Cart</Button>
                                <Button size="lg" variant="secondary" className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleBuyNow} disabled={isCheckingOut || !product.shopify_variant_id}>
                                    {isCheckingOut ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Buy Now
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-12 w-12"
                                    onClick={handleWishlistToggle}
                                    disabled={addWishlistMutation.isPending || removeWishlistMutation.isPending}
                                >
                                    <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                                </Button>
                            </div>
                        )}
                        {!product.shopify_variant_id && <p className="text-xs text-center text-red-500">This product is not available for online purchase.</p>}

                        <div className="text-sm text-gray-600 pt-4">
                            <p><strong>SKU:</strong> {product.upc || 'N/A'}</p>
                            <p><strong>Category:</strong> {category?.name || 'Uncategorized'}</p>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts && relatedProducts.length > 0 && (
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold mb-6">Related products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map(related => (
                                <RelatedProductCard key={related.id} product={related} />
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
