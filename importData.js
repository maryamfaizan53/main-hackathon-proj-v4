import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Dataset name
  useCdn: false, // Disable caching for real-time updates
  token: process.env.SANITY_API_TOKEN, // Sanity API token
  apiVersion: '2021-08-31', // API version
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}`, error);
    return null;
  }
}

// Function to create or fetch a category
async function createOrFetchCategory(name) {
  const slug = name.toLowerCase().replace(/ /g, '-');
  try {
    const existingCategory = await client.fetch(`*[_type == "category" && slug.current == "${slug}"][0]`);
    if (existingCategory) {
      return existingCategory;
    }
    const category = {
      _type: 'category',
      name,
      slug: { _type: 'slug', current: slug },
    };
    return await client.create(category);
  } catch (error) {
    console.error(`Error creating/fetching category: ${name}`, error);
    throw error;
  }
}

// Function to create or fetch a style
async function createOrFetchStyle(name) {
  const slug = name.toLowerCase().replace(/ /g, '-');
  try {
    const existingStyle = await client.fetch(`*[_type == "style" && slug.current == "${slug}"][0]`);
    if (existingStyle) {
      return existingStyle;
    }
    const style = {
      _type: 'style',
      name,
      slug: { _type: 'slug', current: slug },
    };
    return await client.create(style);
  } catch (error) {
    console.error(`Error creating/fetching style: ${name}`, error);
    throw error;
  }
}

// Main function to import data
async function importData() {
  try {
    console.log('Fetching products data...');
    const { data: products } = await axios.get('https://template-0-beta.vercel.app/api/product');

    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.title || 'Unnamed Product'}`);

      // Validate required fields
      if (!product.category || !product.style) {
        console.warn(`Skipping product "${product.title || 'Unnamed Product'}" due to missing category or style.`);
        continue;
      }

      // Create or get category
      const category = await createOrFetchCategory(product.category);

      // Create or get style
      const style = await createOrFetchStyle(product.style);

      // Upload images and collect references
      const imageRefs = [];
      for (const imageUrl of product.images || []) {
        const imageRef = await uploadImageToSanity(imageUrl);
        if (imageRef) {
          imageRefs.push({
            _type: 'image',
            asset: { _type: 'reference', _ref: imageRef },
          });
        }
      }

      // Prepare product data
      const sanityProduct = {
        _type: 'product',
        title: product.title,
        slug: { _type: 'slug', current: product.slug },
        price: product.price,
        rating: product.rating || 0,
        originalPrice: product.originalPrice || 0,
        description: product.description || '',
        images: imageRefs,
        colors: product.colors || [],
        sizes: product.sizes || [],
        tags: product.tags || [],
        category: { _type: 'reference', _ref: category._id },
        style: { _type: 'reference', _ref: style._id },
        isNewArrival: product.isNewArrival || false,
        isTopSelling: product.isTopSelling || false,
        inventory: product.inventory || 0,
        productDetails: product.productDetails || [],
        faqs: (product.faqs || []).map((faq) => ({
          _type: 'object',
          question: faq.question || '',
          answer: faq.answer || '',
        })),
      };

      console.log(`Uploading product to Sanity: ${sanityProduct.title}`);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();
