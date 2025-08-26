// src/lib/api.ts
import { supabase } from './supabaseClient';

interface ProductFilters {
  searchTerm?: string;
  categories?: string[];
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  page?: number;
  perPage?: number;
}

interface Product {
  id: number;
  name: string;
  image_url: string | null;
  price: number;
  // Add any other product fields you need
}

// --- Profile Functions ---

// Fetch the logged-in user's profile
export const fetchProfile = async (userId: string) => {
  if (!userId) return null;
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

// Update the logged-in user's profile
export const updateProfile = async ({ userId, updates }: { userId: string, updates: any }) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select() // Use .select() to return the updated data
    .single();
  if (error) throw new Error(error.message);
  return data;
};


// --- Filters ---

export const fetchFilterCategories = async () => {
  const { data, error } = await supabase.from('categories').select('id, name');
  if (error) throw new Error(error.message);
  return data;
};

export const fetchFilterBrands = async () => {
  const { data, error } = await supabase.from('brands').select('id, name');
  if (error) throw new Error(error.message);
  return data;
};

// --- Products ---

export const fetchProducts = async (filters: ProductFilters) => {
  console.log("🚀 [API Request] Fetching products with filters:", filters);

  const {
    searchTerm = '',
    categories = [],
    brands = [],
    minPrice,
    maxPrice,
    sortBy = 'name-asc',
    page = 1,
    perPage = 12,
  } = filters;

  let productIdsFromCategoryFilter: number[] | null = null;

  if (categories.length > 0) {
    const { data: categoryLinks, error: categoryError } = await supabase
      .from('product_categories')
      .select('product_id')
      .in('category_id', categories);

    if (categoryError) {
      console.error("❌ [API Response] Supabase error fetching category links:", categoryError);
      throw new Error(categoryError.message);
    }

    // Get a unique list of product IDs from the join table
    productIdsFromCategoryFilter = [...new Set(categoryLinks.map(link => link.product_id))];

    // If no products match the category, we can stop here and return empty.
    if (productIdsFromCategoryFilter.length === 0) {
      console.log("✅ [API Response] No products found for selected categories.");
      return { products: [], count: 0 };
    }
  }

  let query = supabase
    .from('products')
    .select(`
      *,
      brands ( id, name ),
      categories ( id, name )
    `, { count: 'exact' });

  if (searchTerm) {
    query = query.ilike('name', `%${searchTerm}%`);
  }
  if (minPrice) {
    query = query.gte('price', minPrice);
  }
  if (maxPrice && maxPrice > 0) {
    query = query.lte('price', maxPrice);
  }
  if (brands.length > 0) {
    query = query.in('brand_id', brands);
  }
  // If we have a list of product IDs from our category filter, apply it.
  if (productIdsFromCategoryFilter) {
    query = query.in('id', productIdsFromCategoryFilter);
  }

  const [sortField, sortOrder] = sortBy.split('-');
  if (sortField && sortOrder) {
    query = query.order(sortField, { ascending: sortOrder === 'asc' });
  }

  const from = (page - 1) * perPage;
  const to = from + perPage - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("❌ [API Response] Supabase error:", error);
    throw new Error(error.message);
  }
  console.log(`✅ [API Response] Received ${data.length} products. Total count: ${count}.`);

  return { products: data, count };
};


export const fetchProductById = async (productId: string) => {
  // FIXED: This query now correctly fetches the product's category
  // through the 'product_categories' join table.
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      brands ( name ),
      product_categories ( categories ( id, name ) )
    `)
    .eq('id', productId)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    throw new Error(error.message);
  }
  return data;
};

export const fetchRelatedProducts = async (categoryId: number | undefined, currentProductId: number) => {
  if (!categoryId) return [];

  // This query finds all product_ids linked to the same category
  const { data: productLinks, error: linkError } = await supabase
    .from('product_categories')
    .select('product_id')
    .eq('category_id', categoryId)
    .neq('product_id', currentProductId) // Exclude the current product
    .limit(4);

  if (linkError || !productLinks) {
    console.error("Error fetching related product links:", linkError);
    return [];
  }

  const productIds = productLinks.map(p => p.product_id);

  // Now fetch the details for those product IDs
  const { data, error } = await supabase
    .from('products')
    .select(`*, brands ( name )`)
    .in('id', productIds);

  if (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
  return data;
};

// --- Wishlist Functions ---

// Fetch all wishlist items for a user, along with the full product details
export const fetchWishlist = async (userId: string): Promise<Product[]> => {
  if (!userId) return [];

  const { data, error } = await supabase
    .from('wishlist_items')
    .select(`
      products (
        *,
        brands ( name )
      )
    `)
    .eq('user_id', userId);

  if (error) {
    console.error("Error fetching wishlist:", error);
    throw new Error(error.message);
  }

  if (!data) {
    return [];
  }

  // FIXED: The result from Supabase is [{ products: { id: 1, ... } }].
  // We need to extract the 'products' object from each item.
  const products = data
    .map(item => item.products)
    .filter(Boolean);

  // If products is an array of arrays, flatten it
  const flatProducts = Array.isArray(products[0]) ? products.flat() : products;

  return flatProducts as Product[];
};

// Add an item to the wishlist
export const addToWishlist = async ({ userId, productId }: { userId: string, productId: number }) => {
  const { data, error } = await supabase
    .from('wishlist_items')
    .insert({ user_id: userId, product_id: productId });
  // We'll ignore duplicate errors (code 23505) as they are expected
  if (error && error.code !== '23505') throw new Error(error.message);
  return data;
};

// Remove an item from the wishlist
export const removeFromWishlist = async ({ userId, productId }: { userId: string, productId: number }) => {
  const { data, error } = await supabase
    .from('wishlist_items')
    .delete()
    .match({ user_id: userId, product_id: productId });
  if (error) throw new Error(error.message);
  return data;
};

// --- DB Cart Functions ---

export const fetchDBCart = async (userId: string) => {
  if (!userId) return [];
  const { data, error } = await supabase
    .from('cart_items')
    .select('*, products(*, brands(name))')
    .eq('user_id', userId);
  if (error) throw new Error(error.message);
  // Transform the data to match the cart item shape
  return data.map(item => ({ ...item.products, quantity: item.quantity }));
};

export const upsertDBCartItem = async ({ userId, productId, quantity }: { userId: string, productId: number, quantity: number }) => {
  const { data, error } = await supabase
    .from('cart_items')
    .upsert(
      { user_id: userId, product_id: productId, quantity },
      { onConflict: 'user_id,product_id' }
    )
    .select();

  if (error) throw new Error(error.message);
  return data;
};

export const removeDBCartItem = async ({ userId, productId }: { userId: string, productId: number }) => {
  const { data, error } = await supabase
    .from('cart_items')
    .delete()
    .match({ user_id: userId, product_id: productId });
  if (error) throw new Error(error.message);
  return data;
};

export const clearDBCart = async (userId: string) => {
  const { data, error } = await supabase
    .from('cart_items')
    .delete()
    .eq('user_id', userId);
  if (error) throw new Error(error.message);
  return data;
};
