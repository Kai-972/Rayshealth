// src/components/cart/CartSheet.tsx
import { useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Loader2 } from 'lucide-react';

export default function CartSheet() {
    const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheckout = async () => {
        setIsLoading(true);
        setError(null);

        // Filter out items that don't have a valid shopify_variant_id
        const validItems = items.filter(item => item.shopify_variant_id);
        if (validItems.length !== items.length) {
            setError("Some items in the cart are not available for checkout.");
            setIsLoading(false);
            return;
        }

        const lineItems = validItems.map(item => ({
            variantId: item.shopify_variant_id,
            quantity: item.quantity,
        }));

        if (lineItems.length === 0) {
            setError("Your cart is empty.");
            setIsLoading(false);
            return;
        }

        try {
            const { data, error: invokeError } = await supabase.functions.invoke('shopify-checkout', {
                body: { lineItems },
            });

            if (invokeError) throw invokeError;

            // Redirect to Shopify's secure checkout
            window.location.href = data.checkoutUrl;

        } catch (err: any) {
            console.error("Checkout Error:", err);
            setError(`Checkout failed: ${err.message}`);
            setIsLoading(false);
        }
    };

    return (
        <>
            <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            {items.length > 0 ? (
                <>
                    <ScrollArea className="flex-grow pr-4 my-4">
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="flex items-center gap-4">
                                    <img src={item.image_url || '/placeholder.png'} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
                                    <div className="flex-grow">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">${item.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                                            <span>{item.quantity}</span>
                                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <SheetFooter className="flex flex-col gap-4 pt-4 border-t">
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>${getTotalPrice()}</span>
                        </div>
                        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                        <Button onClick={handleCheckout} disabled={isLoading} className="w-full">
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Proceed to Checkout
                        </Button>
                        <Button variant="outline" onClick={clearCart} className="w-full">Clear Cart</Button>
                    </SheetFooter>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-lg font-semibold">Your cart is empty</p>
                    <p className="text-sm text-muted-foreground">Add some products to get started!</p>
                </div>
            )}
        </>
    );
}
