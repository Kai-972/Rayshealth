// src/pages/Cart.tsx
import { useState, useMemo } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Trash2, Loader2, AlertTriangle, CheckCircle2, Tag } from 'lucide-react';
import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<{code: string, amount: number} | null>(null);
  const { toast } = useToast();

  const subtotal = getTotalPrice();
  const shippingCost = 5.00; // Example flat rate shipping
  const total = subtotal - (appliedDiscount?.amount || 0) + shippingCost;

  const handleApplyCoupon = () => {
    if (!couponCode) return;
    // For this demo, we'll assume any code could be valid and let Shopify check it.
    // We'll apply a visual 10% discount for a specific demo code.
    if (couponCode.toUpperCase() === 'SAVE10') {
      const discountAmount = subtotal * 0.10;
      setAppliedDiscount({ code: couponCode.toUpperCase(), amount: discountAmount });
      toast({
        title: "Coupon Applied!",
        description: "Your discount will be calculated at checkout.",
      });
    } else {
      // For any other code, we'll just set it without calculating a discount amount.
      setAppliedDiscount({ code: couponCode.toUpperCase(), amount: 0 });
       toast({
        title: "Coupon Entered",
        description: `Code "${couponCode.toUpperCase()}" will be applied at checkout if valid.`,
      });
    }
  };


  // Check if any item in the cart is unavailable for checkout.
  const hasUnavailableItems = useMemo(() => {
    return items.some(item => !item.shopify_variant_id);
  }, [items]);

  const handleCheckout = async () => {
    if (hasUnavailableItems) {
      setError("Please remove unavailable items before proceeding.");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    const lineItems = items.map(item => ({
      variantId: item.shopify_variant_id,
      quantity: item.quantity,
    }));

    if (lineItems.length === 0) {
      setError("Your cart is empty.");
      setIsLoading(false);
      return;
    }

    try {
      // Send the lineItems AND the applied discount code to the function
      const { data, error: invokeError } = await supabase.functions.invoke('shopify-checkout', {
        body: { 
          lineItems,
          discountCode: appliedDiscount?.code 
        },
      });
      if (invokeError) throw invokeError;
      window.location.href = data.checkoutUrl;
    } catch (err: any) {
      console.error("Checkout Error:", err);
      setError(`Checkout failed. Please check your items and coupon code.`);
      setIsLoading(false);
    }
  };

  return (
        <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Cart</h1>
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
                <ul role="list" className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image_url || 'https://placehold.co/96x96/orange/white?text=Item'} alt={item.name} className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          {item.shopify_variant_id ? (
                            <div className="mt-1 flex items-center text-xs text-green-600"><CheckCircle2 className="h-4 w-4 mr-1" /><span>Available</span></div>
                          ) : (
                            <div className="mt-1 flex items-center text-xs text-yellow-600"><AlertTriangle className="h-4 w-4 mr-1" /><span>Not Available for Checkout</span></div>
                          )}
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                            <span>{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                          </div>
                          <div className="flex">
                            <Button variant="ghost" type="button" className="font-medium text-red-600 hover:text-red-500" onClick={() => removeFromCart(item.id)}><Trash2 className="h-4 w-4 mr-1" /> Remove</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow h-fit">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                <div className="mt-6 flex space-x-2">
                    <Input placeholder="Discount code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                    <Button onClick={handleApplyCoupon}>Apply</Button>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between"><p className="text-sm text-gray-600">Subtotal</p><p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p></div>
                  <div className="flex items-center justify-between"><p className="text-sm text-gray-600">Shipping</p><p className="text-sm font-medium text-gray-900">${shippingCost.toFixed(2)}</p></div>
                  {appliedDiscount && (
                    <div className="flex items-center justify-between text-green-600">
                      <p className="text-sm flex items-center"><Tag className="h-4 w-4 mr-1"/>Discount ({appliedDiscount.code})</p>
                      <p className="text-sm font-medium">Applied at checkout</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">${(subtotal + shippingCost).toFixed(2)}</p>
                  </div>
                </div>
                {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
                <div className="mt-6">
                  <Button onClick={handleCheckout} disabled={isLoading || hasUnavailableItems} className="w-full bg-orange-500 hover:bg-orange-600">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center bg-white p-12 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Your cart is empty</h2>
              <p className="mt-2 text-gray-600">Add some products to get started!</p>
              <Button asChild className="mt-6 bg-orange-500 hover:bg-orange-600"><Link to="/products">Start Shopping</Link></Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
