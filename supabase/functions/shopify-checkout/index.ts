// supabase/functions/shopify-checkout/index.ts

// NOTE FOR DEVELOPERS:
// This is a Deno Deploy script for a Supabase Edge Function.
// Your local IDE (like VS Code) might show errors for the Deno-specific
// imports (e.g., "https://deno.land/...") and the global `Deno` object.
// This is expected if your IDE is configured for a Node.js environment.
// The code is correct and will run without issues when deployed to Supabase.
// To fix this locally, install the Deno extension for your IDE.

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

// CORS headers to allow requests from your website
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Replace with your website URL for production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// The GraphQL query to create a checkout session in Shopify
const CHECKOUT_CREATE_MUTATION = `
  mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

serve(async (req) => {
  // This is required for CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the Shopify secrets from your Supabase project's environment variables
    const SHOPIFY_STORE_URL = Deno.env.get('SHOPIFY_STORE_URL'); // e.g., 'your-store-name.myshopify.com'
    const SHOPIFY_STOREFRONT_TOKEN = Deno.env.get('SHOPIFY_STOREFRONT_TOKEN');

    if (!SHOPIFY_STORE_URL || !SHOPIFY_STOREFRONT_TOKEN) {
      throw new Error('Shopify store URL or storefront token is not set in Supabase secrets.');
    }

    // The full URL for the Shopify Storefront API
    const shopifyApiUrl = `https://${SHOPIFY_STORE_URL}/api/2023-01/graphql.json`;

    // Get the lineItems from the request body
    const { lineItems } = await req.json();

    if (!lineItems || !Array.isArray(lineItems)) {
        throw new Error('Invalid lineItems provided.');
    }

    // Make the request to the Shopify API
    const shopifyResponse = await fetch(shopifyApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query: CHECKOUT_CREATE_MUTATION,
        variables: { lineItems },
      }),
    });

    const shopifyData = await shopifyResponse.json();

    // Check for errors from Shopify
    if (shopifyData.data.checkoutCreate.checkoutUserErrors.length > 0) {
      throw new Error(JSON.stringify(shopifyData.data.checkoutCreate.checkoutUserErrors));
    }

    // Get the checkout URL to redirect the user
    const checkoutUrl = shopifyData.data.checkoutCreate.checkout.webUrl;

    return new Response(JSON.stringify({ checkoutUrl }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
