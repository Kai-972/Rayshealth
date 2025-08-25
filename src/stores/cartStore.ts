// src/stores/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // To save cart in localStorage

// Define the shape of a product and a cart item
// Ensure this matches the data you fetch from Supabase
interface Product {
  id: number;
  name: string;
  price: number;
  image_url?: string;
  // This is crucial for the checkout later
  shopify_variant_id: string | null; 
}

interface CartItem extends Product {
  quantity: number;
}

// Define the shape of the store's state and actions
interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  // The 'persist' middleware saves the cart state to localStorage,
  // so the cart is not lost when the user refreshes the page.
  persist(
    (set, get) => ({
      items: [],

      // Action to add a product to the cart
      addToCart: (product) => {
        const cart = get().items;
        const findProduct = cart.find((p) => p.id === product.id);

        if (findProduct) {
          // If product already exists, just increase its quantity
          findProduct.quantity += 1;
        } else {
          // Otherwise, add the new product to the cart with quantity 1
          cart.push({ ...product, quantity: 1 });
        }
        set({ items: [...cart] });
      },

      // Action to completely remove a product from the cart
      removeFromCart: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },

      // Action to update the quantity of a specific product
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          // If quantity is 0 or less, remove the item
          get().removeFromCart(productId);
        } else {
          set({
            items: get().items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          });
        }
      },

      // Action to empty the entire cart
      clearCart: () => {
        set({ items: [] });
      },
      
      // Getter to calculate the total number of items in the cart
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // Getter to calculate the total price of all items in the cart
      getTotalPrice: () => {
        const total = get().items.reduce((total, item) => total + item.price * item.quantity, 0);
        // Return the total formatted to 2 decimal places
        return parseFloat(total.toFixed(2));
      }
    }),
    {
      name: 'shopping-cart-storage', // unique name for the localStorage key
    }
  )
);
