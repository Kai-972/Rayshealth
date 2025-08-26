// src/pages/account/WishlistPage.tsx
import { fetchWishlist, removeFromWishlist } from '@/lib/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image_url: string | null;
  price: number;
}

export default function WishlistPage() {
  const { user, loading: userLoading } = useUser();
  const queryClient = useQueryClient();

  const { data: wishlist, isLoading: wishlistLoading, error } = useQuery<Product[]>({
    queryKey: ['wishlist', user?.id],
    queryFn: () => fetchWishlist(user!.id),
    enabled: !!user,
  });

  const removeMutation = useMutation({
    mutationFn: (productId: number) => removeFromWishlist({ userId: user!.id, productId }),
    onSuccess: () => {
      // When a removal is successful, refresh the wishlist data
      queryClient.invalidateQueries({ queryKey: ['wishlist', user!.id] });
    },
  });

  const isLoading = userLoading || wishlistLoading;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-64 w-full" />)}
            </div>
          ) : error ? (
            <p className="text-red-500">Error loading wishlist.</p>
          ) : wishlist && wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {wishlist.map(product => (
                <Card key={product.id} className="relative group">
                  {/* REMOVE BUTTON */}
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeMutation.mutate(product.id)}
                    disabled={removeMutation.isPending}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <Link to={`/product/${product.id}`}>
                    <CardHeader className="p-0">
                      <img src={product.image_url || '/placeholder.png'} alt={product.name} className="rounded-t-lg h-48 w-full object-cover" />
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardTitle className="text-base">{product.name}</CardTitle>
                      <p className="font-semibold mt-2">${product.price}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
                <p className="text-lg text-gray-600">Your wishlist is empty.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
