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

  // --- FIXED: Handle many-to-many category filtering ---
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