// src/stores/cartStore.ts
import { create } from 'zustand';
import { supabase } from '@/lib/supabaseClient';
import { fetchDBCart, upsertDBCartItem, removeDBCartItem, clearDBCart } from '@/lib/api';

// Interfaces for Product and CartItem
interface Product {
  id: number;
  name: string;
  price: number;
  image_url?: string;
  shopify_variant_id: string | null;
}

interface CartItem extends Product {
  quantity: number;
}

// Store State and Actions
interface CartState {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
  loadCart: () => Promise<void>;
  addToCart: (product: Product, quantityToAdd?: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, newQuantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearError: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  loadCart: async () => {
    try {
      set({ isLoading: true, error: null });
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const dbItems = await fetchDBCart(user.id);
        set({ items: dbItems, isLoading: false });
      } else {
        set({ items: [], isLoading: false });
      }
    } catch (error: any) {
      console.error('Error loading cart:', error);
      set({ 
        error: 'Failed to load cart. Please refresh and try again.', 
        isLoading: false 
      });
    }
  },

  addToCart: async (product, quantityToAdd = 1) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        set({ error: 'Please log in to add items to cart' });
        return;
      }

      set({ isLoading: true, error: null });
      
      const items = get().items;
      const existingItem = items.find(item => item.id === product.id);
      const newQuantity = existingItem ? existingItem.quantity + quantityToAdd : quantityToAdd;
      
      // Validate quantity limits
      if (newQuantity > 10) {
        set({ 
          error: 'Maximum quantity of 10 per item allowed',
          isLoading: false 
        });
        return;
      }
      
      await upsertDBCartItem({ userId: user.id, productId: product.id, quantity: newQuantity });
      await get().loadCart(); // Re-sync state from DB
      
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      set({ 
        error: 'Failed to add item to cart. Please try again.',
        isLoading: false 
      });
    }
  },

  removeFromCart: async (productId) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      
      set({ isLoading: true, error: null });
      await removeDBCartItem({ userId: user.id, productId });
      await get().loadCart(); // Re-sync state from DB
      
    } catch (error: any) {
      console.error('Error removing from cart:', error);
      set({ 
        error: 'Failed to remove item from cart. Please try again.',
        isLoading: false 
      });
    }
  },

  updateQuantity: async (productId, newQuantity) => {
    try {
      if (newQuantity <= 0) {
        await get().removeFromCart(productId);
        return;
      }
      
      // Validate quantity limits
      if (newQuantity > 10) {
        set({ error: 'Maximum quantity of 10 per item allowed' });
        return;
      }
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      set({ isLoading: true, error: null });
      await upsertDBCartItem({ userId: user.id, productId, quantity: newQuantity });
      await get().loadCart(); // Re-sync state from DB
      
    } catch (error: any) {
      console.error('Error updating quantity:', error);
      set({ 
        error: 'Failed to update quantity. Please try again.',
        isLoading: false 
      });
    }
  },

  clearCart: async () => {
    try {
      set({ isLoading: true, error: null });
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        await clearDBCart(user.id);
      }
      set({ items: [], isLoading: false });
      
    } catch (error: any) {
      console.error('Error clearing cart:', error);
      set({ 
        error: 'Failed to clear cart. Please try again.',
        isLoading: false 
      });
    }
  },

  getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
  getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));