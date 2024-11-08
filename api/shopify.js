const Shopify = require('shopify-api-node');

console.log('Shop Name:', process.env.SHOPIFY_SHOP_NAME);
console.log('Access Token:', process.env.SHOPIFY_ACCESS_TOKEN);

if (!process.env.SHOPIFY_SHOP_NAME) {
  console.error('Error: SHOPIFY_SHOP_NAME is not defined in the environment variables.');
  process.exit(1);
}

if (!process.env.SHOPIFY_ACCESS_TOKEN) {
  console.error('Error: SHOPIFY_ACCESS_TOKEN is not defined in the environment variables.');
  process.exit(1);
}

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: '2021-01' // Adjust as needed
});

async function getProducts() {
  try {
    const products = await shopify.product.list();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

module.exports = {
  getProducts,
  shopify
};