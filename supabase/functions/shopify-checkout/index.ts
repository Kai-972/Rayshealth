// supabase/functions/shopify-checkout/index.ts

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Remember to change for production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const SHOPIFY_API_VERSION = '2024-04';

const CART_CREATE_MUTATION = `
  mutation cartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log("--- New Checkout Request Received ---");

    const SHOPIFY_STORE_URL = Deno.env.get('SHOPIFY_STORE_URL');
    const SHOPIFY_STOREFRONT_TOKEN = Deno.env.get('SHOPIFY_STOREFRONT_TOKEN');

    if (!SHOPIFY_STORE_URL || !SHOPIFY_STOREFRONT_TOKEN) {
      throw new Error('Shopify secrets are not set correctly in Supabase.');
    }
    
    const shopifyApiUrl = `https://${SHOPIFY_STORE_URL}/api/${SHOPIFY_API_VERSION}/graphql.json`;
    console.log(`Connecting to Shopify API: ${shopifyApiUrl}`);

    const { lineItems } = await req.json();

    if (!lineItems || !Array.isArray(lineItems)) {
        throw new Error('Invalid lineItems provided.');
    }
    console.log("Received lineItems:", JSON.stringify(lineItems, null, 2));

    // --- FIXED: Convert the simple Variant ID into Shopify's required GID format ---
    const shopifyLines = lineItems.map(item => ({
        merchandiseId: `gid://shopify/ProductVariant/${item.variantId}`,
        quantity: item.quantity,
    }));
    console.log("Formatted lines for Shopify:", JSON.stringify(shopifyLines, null, 2));


    const shopifyResponse = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query: CART_CREATE_MUTATION,
        variables: { lines: shopifyLines },
      }),
    });

    const shopifyData = await shopifyResponse.json();
    console.log("Received response from Shopify:", JSON.stringify(shopifyData, null, 2));

    if (shopifyData.errors || (shopifyData.data && shopifyData.data.cartCreate.userErrors.length > 0)) {
      const errors = shopifyData.errors || shopifyData.data.cartCreate.userErrors;
      console.error("Shopify API Errors:", errors);
      throw new Error(JSON.stringify(errors));
    }

    const checkoutUrl = shopifyData.data.cartCreate.cart.checkoutUrl;
    console.log("Successfully created checkout URL:", checkoutUrl);

    return new Response(JSON.stringify({ checkoutUrl }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error("--- Function Error ---", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
